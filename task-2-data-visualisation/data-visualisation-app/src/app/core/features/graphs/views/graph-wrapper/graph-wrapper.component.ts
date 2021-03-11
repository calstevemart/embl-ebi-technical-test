import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  trigger: number = 0;

  constructor(public cd: ChangeDetectorRef) { 
  }

  toggle(type: string) {
    console.log('hit toggle with ' + type)
    this.graphConfig.configOptions.forEach(option => {
      option.name === type ? option.visible = true : option.visible = false
    })
    console.log(this.graphConfig)
    this.trigger += 1;
    this.cd.detectChanges();
  }

  ngOnInit(): void {

  }

}
