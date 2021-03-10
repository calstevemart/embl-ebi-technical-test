import { Component, OnInit } from '@angular/core';

declare var st: any;
declare var $: any;
declare var d3: any;
declare var chart: any;
console.log(d3);

/**Pulled from the example code in index.html from the specktackle bitbucket. I make no assertion
 * to have been the original author.
 */
function load (x: any, chart: any) {                        // load chart data
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
          console.log('hit');                             // Chromatogram
          var set = st.data.set()
              .x("peaks.mz")
              .y("peaks.intensity")
              .title("spectrumId");
          chart.load(set);
          set.add([
            // 
              "specktackle/resources/data1.json",
              "specktackle/resources/data2.json",
              "specktackle/resources/data3.json"
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
              "resources/single_point_1.json"
          ]);
          break;
      case 7:                             // NMR
          var array = st.data.array()
              .xlimits(["xMin", "xMax"])
              .y("data")
              .title("id");
          chart.load(array);   
          array.add([
              "resources/single_point_2.json"
          ]);
          break;
      case 8:                             // difference chart
          var set = st.data.set() 
              .x("data.x")             
              .y("data.y")      
              .title("id");      
              
          chart.load(set);               
          set.add([                      
              "resources/difference.json"
          ]);
          break;
      case 9:                             // spectral match
          var set = st.data.set() 
              .x("peaks.mz")             
              .y("peaks.intensity")      
              .title("spectrumId");      
              
          chart.load(set);               
          set.add([                      
              "resources/data3.json",
              "resources/data3_inv.json"
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
  $("#adddata").attr('disabled','disabled');
};

@Component({
  selector: 'app-graph-wrapper',
  templateUrl: './graph-wrapper.component.html',
  styleUrls: ['./graph-wrapper.component.less']
})
export class GraphWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('cmponent loadeded');
    (function series () {                    // Chromatogram stub
      $("#stgraph").empty();
      $("#adddata").removeAttr("disabled")
          .attr("onclick","load(3, chart)");
          
      let chart = st.chart
          .series()
          .legend(true)
          .labels(true)
          .xlabel("Time [s]")
          .ylabel("Abundance")
          .title("Chromatogram")
          .margins([80, 80, 80, 120]);
      chart.render("#stgraph");
  })(/*st*/)
  }

}
