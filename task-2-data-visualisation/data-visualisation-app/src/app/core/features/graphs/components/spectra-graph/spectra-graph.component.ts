import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GraphConfig } from 'src/app/core/models/graph-config.model';

declare var st: any;
declare var $: any;
declare var d3: any;

/**Function pulled from the example code in index.html from the specktackle bitbucket. I make no assertion
 * to have been the original author.
 */
function load(x: any, chart: any, url: string) {                        // load chart data
  switch (x) {
    case 0:                            // MS
      var set = st.data.set()        // data type (set)
        .ylimits([0, 1100])        // y-axis limits
        .x("peaks.mz")             // x-accessor
        .y("peaks.intensity")      // y-accessor
        .title("spectrumId");      // id-accessor

      // annotation structure
      set.annotationColumn(st.annotation.ANNOTATION, "Ticks");
      set.annotationColumn(st.annotation.TOOLTIP, "Origin");
      set.annotationColumn(st.annotation.TOOLTIP_MOL, "Ion");
      set.annotationColumn(st.annotation.TOOLTIP_MOL, "Frag");

      chart.load(set);               // bind the data set
      set.add([                      // input array
        "resources/data1.json",
        "resources/data2.json",
        "resources/data3.json"
      ], [                           // input annotation array
        "resources/data1_anno.json",
        "",
        ""
      ]);

      break;
    case 1:                             // NMR
      var array = st.data.array()     // data type (array)
        .xlimits(["xMin", "xMax"])
        .ylimits(["yMin", "yMax"])
        .y("data")                  // one dimensional array
      //.title("id");
      chart.load(array);
      array.add([
        "resources/nmr1.json",
        "resources/nmr2.json"
        //"resources/nmr3.json"
        //"resources/nmr4.json"
      ]);
      break;
    case 2:                             // NMR 2D
      var set = st.data.set()
        .x("data.x")
        .y("data.y");
      chart.load(set);
      set.add("resources/nmr2d.json");
      break;
    case 3:
      // Chromatogram
      var set = st.data.set()
        .x("peaks.mz")
        .y("peaks.intensity")
        .title("spectrumId");
      chart.load(set);
      set.add([
        url
      ]);
      break;
    case 6:                            // MS
      var set = st.data.set()
        .ylimits([0, 1000])
        .x("peaks.mz")
        .y("peaks.intensity")
        .title("spectrumId");

      chart.load(set);
      set.add([
        /*"https://www.ebi.ac.uk/metabolights/webservice/beta/spectra/MTBLC15355/CCMSLIB00000578035" */
        url
      ]);
      break;
    case 7:                             // NMR
      var array = st.data.array()
        .xlimits(["xMin", "xMax"])
        .y("data")
        .title("id");
      chart.load(array);
      array.add([
        url
        /*"https://www.ebi.ac.uk/metabolights/webservice/compounds/spectra/10935/json"*/
      ]);
      break;
    case 8:                             // difference chart
      var set = st.data.set()
        .x("data.x")
        .y("data.y")
        .title("id");

      chart.load(set);
      set.add([
        url
      ]);
      break;
    case 9:                             // spectral match
      var set = st.data.set()
        .x("peaks.mz")
        .y("peaks.intensity")
        .title("spectrumId");

      chart.load(set);
      set.add([
        url
      ]);
      break;
    case 10:                            // PRIDE
      var set = st.data.set()
        .xlimits(["mzRangeStart", "mzRangeStop"])
        .x("mzArray")
        .y("intenArray")
        .title("spectrumId");

      // annotation structure
      set.annotationColumn(st.annotation.ANNOTATION, "Series");

      chart.load(set);
      set.add([
        "resources/pride.json"
      ], [
        "resources/pride_anno.json"
      ]);
      break;
  };
  $("#adddata").attr('disabled', 'disabled');
};

@Component({
  selector: 'app-spectra-graph',
  templateUrl: './spectra-graph.component.html',
  styleUrls: ['./spectra-graph.component.less']
})
export class SpectraGraphComponent implements OnInit, OnChanges {
  @Input() config: GraphConfig = {configOptions: []};

  msUrl: string = "https://www.ebi.ac.uk/metabolights/webservice/beta/spectra/MTBLC15355/CCMSLIB00000578035"
  nmrUrl: string = "https://www.ebi.ac.uk/metabolights/webservice/compounds/spectra/10935/json"

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.config.configOptions.forEach(option => {
      option.visible === true ? this.renderAnew(option.name) : null
    })
  }

  ngOnInit(): void {
    this.config.configOptions.forEach(option => {
      option.visible === true ? this.renderAnew(option.name) : null
    })
  }

  renderAnew(type: string){
    switch(type) {
      case 'nmr':
        this.nmr();
        break;
      case 'ms':
        this.ms();
        break;
      default:
        console.error('Unexpected Graph Type. Check your configuration: [' + type +']')
        break;
    }
  }

  ms(url: string = this.msUrl) {
    (function ms() {                    //ms stub
      $("#stgraph").empty();
      $("#adddata").removeAttr("disabled")
        .attr("onclick", "load(3, chart)");

      let chart = st.chart
        .ms()
        .legend(true)
        .labels(true)
        .xlabel("Mass-to-Charge")
        .ylabel("Intensity")
        .title("MS")
        .margins([80, 80, 80, 120]);
      chart.render("#stgraph");
      load(6, chart, url)
    })()
  }

  nmr(url: string = this.nmrUrl) {
    (function nmr() {                    // nmr stub
      $("#stgraph").empty();
      $("#adddata").removeAttr("disabled")
        .attr("onclick", "load(3, chart)");

      let chart = st.chart
        .nmr()
        .legend(true)
        .labels(true)
        .xlabel("ppm")
        .ylabel("Intensity")
        .title("Spectra")
        .margins([80, 80, 80, 120]);
      chart.render("#stgraph");
      load(7, chart, url)
    })()
  }

}
