import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  GraphConfig,
  IndividualGraphConfig,
} from 'src/app/core/models/graph-config.model';

/**Pure js library variable declarations */
declare var st: any;
declare var $: any;
declare var d3: any;

/**
 * Function pulled from the example code in index.html from the specktackle bitbucket. I make no assertion
 * to have been the original author.
 * @param x - Type of chart to load.
 * @param chart - chart reference used to render chart and bind data.
 * @param url - the url from which we fetch data to bind to the chart.
 */
function load(x: any, chart: any, url: string) {
  // load chart data
  switch (x) {
    case 0: // MS
      var set = st.data
        .set() // data type (set)
        .ylimits([0, 1100]) // y-axis limits
        .x('peaks.mz') // x-accessor
        .y('peaks.intensity') // y-accessor
        .title('spectrumId'); // id-accessor

      // annotation structure
      set.annotationColumn(st.annotation.ANNOTATION, 'Ticks');
      set.annotationColumn(st.annotation.TOOLTIP, 'Origin');
      set.annotationColumn(st.annotation.TOOLTIP_MOL, 'Ion');
      set.annotationColumn(st.annotation.TOOLTIP_MOL, 'Frag');

      chart.load(set); // bind the data set
      set.add(
        [
          // input array
          'resources/data1.json',
          'resources/data2.json',
          'resources/data3.json',
        ],
        [
          // input annotation array
          'resources/data1_anno.json',
          '',
          '',
        ]
      );

      break;
    case 1: // NMR
      var array = st.data
        .array() // data type (array)
        .xlimits(['xMin', 'xMax'])
        .ylimits(['yMin', 'yMax'])
        .y('data'); // one dimensional array
      //.title("id");
      chart.load(array);
      array.add([
        'resources/nmr1.json',
        'resources/nmr2.json',
        //"resources/nmr3.json"
        //"resources/nmr4.json"
      ]);
      break;
    case 2: // NMR 2D
      var set = st.data.set().x('data.x').y('data.y');
      chart.load(set);
      set.add('resources/nmr2d.json');
      break;
    case 3:
      // Chromatogram
      var set = st.data
        .set()
        .x('peaks.mz')
        .y('peaks.intensity')
        .title('spectrumId');
      chart.load(set);
      set.add([url]);
      break;
    case 6: // MS
      var set = st.data
        .set()
        .ylimits([0, 1000])
        .x('peaks.mz')
        .y('peaks.intensity')
        .title('spectrumId');

      chart.load(set);
      set.add([url]);
      break;
    case 7: // NMR
      var array = st.data
        .array()
        .xlimits(['xMin', 'xMax'])
        .y('data')
        .title('id');
      chart.load(array);
      array.add([url]);
      break;
    case 8: // difference chart
      var set = st.data.set().x('data.x').y('data.y').title('id');

      chart.load(set);
      set.add([url]);
      break;
    case 9: // spectral match
      var set = st.data
        .set()
        .x('peaks.mz')
        .y('peaks.intensity')
        .title('spectrumId');

      chart.load(set);
      set.add([url]);
      break;
    case 10: // PRIDE
      var set = st.data
        .set()
        .xlimits(['mzRangeStart', 'mzRangeStop'])
        .x('mzArray')
        .y('intenArray')
        .title('spectrumId');

      // annotation structure
      set.annotationColumn(st.annotation.ANNOTATION, 'Series');

      chart.load(set);
      set.add(['resources/pride.json'], ['resources/pride_anno.json']);
      break;
  }
  $('#adddata').attr('disabled', 'disabled');
}

/**
 * Spectra Graph component to handle graph rendering.
 */
@Component({
  selector: 'app-spectra-graph',
  templateUrl: './spectra-graph.component.html',
  styleUrls: ['./spectra-graph.component.less'],
})
export class SpectraGraphComponent implements OnInit, OnChanges {
  /**Config object that contains the configuration options for each graph type */
  @Input() config: GraphConfig = { configOptions: [] };
  /**Manual trigger for change detection as changes to config object not registered in ChangeDetectorRef */
  @Input() trigger: number = 0;
  /**The currently selected configuration object. Primarily used for axis rendering in template. */
  currentlySelected: any;
  /**Default url for MS graph. */
  msUrl: string =
    'https://www.ebi.ac.uk/metabolights/webservice/beta/spectra/MTBLC15355/CCMSLIB00000578035';
  /**Default url for MS graph. */
  nmrUrl: string =
    'https://www.ebi.ac.uk/metabolights/webservice/compounds/spectra/10935/json';

  constructor() {}

  /**
   * OnChanges lifecycle hook to continually rerender graph based on user selection.
   * @param changes - SimpleChanges object, unused.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.config.configOptions.forEach((option) => {
      option.visible === true ? this.renderAnew(option) : null;
    });
  }

  /**OnInit lifecycle hook to initially render the graph. */
  ngOnInit(): void {
    this.config.configOptions.forEach((option) => {
      option.visible === true ? this.renderAnew(option) : null;
    });
  }

  /**
   * Selects which render method to call based on current config.
   * @param option - The currently set config option.
   */
  renderAnew(option: IndividualGraphConfig) {
    this.currentlySelected = option;
    switch (option.name) {
      case 'nmr':
        this.nmr();
        break;
      case 'ms':
        this.ms();
        break;
      default:
        console.error(
          'Unexpected Graph Type. Check your configuration: [' +
            option.name +
            ']'
        );
        break;
    }
  }

  /**
   * Wrapper method around pure js function to instantiate, render and load data to the MS graph.
   * @param url - The url to fetch data from for the MS graph.
   */
  ms(url: string = this.msUrl) {
    (function ms() {
      //ms stub
      $('#stgraph').empty();
      $('#adddata').removeAttr('disabled').attr('onclick', 'load(3, chart)');

      let chart = st.chart
        .ms()
        .legend(true)
        .labels(true)
        .xlabel('Mass-to-Charge')
        .ylabel('Intensity')
        .title('MS')
        .margins([80, 80, 80, 120]);
      chart.render('#stgraph');
      load(6, chart, url);
    })();
  }

  /**
   * Wrapper method around pure js function to instantiate, render and load data to the NMR graph.
   * @param url - The url to fetch data from for the NMR graph.
   */
  nmr(url: string = this.nmrUrl) {
    (function nmr() {
      // nmr stub
      $('#stgraph').empty();
      $('#adddata').removeAttr('disabled').attr('onclick', 'load(3, chart)');

      let chart = st.chart
        .nmr()
        .legend(true)
        .labels(true)
        .xlabel('ppm')
        .ylabel('Intensity')
        .title('Spectra')
        .margins([80, 80, 80, 120]);
      chart.render('#stgraph');
      load(7, chart, url);
    })();
  }
}
