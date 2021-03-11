import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { GraphConfig } from 'src/app/core/models/graph-config.model';



@Component({
  selector: 'app-graph-wrapper',
  templateUrl: './graph-wrapper.component.html',
  styleUrls: ['./graph-wrapper.component.less']
})
export class GraphWrapperComponent implements OnInit {

  graphConfig: GraphConfig = {
    configOptions: [
      {
        name: 'nmr',
        visible: false
      },
      {
        name: 'ms',
        visible: true
      }
    ]
  }

  constructor() { }

  toggle(type: string) {
    this.graphConfig.configOptions.forEach(option => {
      option.name === type ? option.visible = true : option.visible = false
    })
  }

  ngOnInit(): void {

  }

}
