import { Component, OnInit } from '@angular/core';
import { GraphConfig } from 'src/app/core/models/graph-config.model';

/**
 * Wrapper component for the graph view.
 */
@Component({
  selector: 'app-graph-wrapper',
  templateUrl: './graph-wrapper.component.html',
  styleUrls: ['./graph-wrapper.component.less'],
})
export class GraphWrapperComponent implements OnInit {
  /**Default graph config object, with the MS graph visible by default. */
  graphConfig: GraphConfig = {
    configOptions: [
      {
        name: 'nmr',
        visible: false,
        xAxis: 'ppm',
        yAxis: '',
      },
      {
        name: 'ms',
        visible: true,
        xAxis: 'Mass-to-Charge',
        yAxis: 'Intensity',
      },
    ],
  };
  /**Used to manually trigger change detection in the spectra-graph child component. */
  trigger: number = 0;

  constructor() {}

  /**Toggles graph type by updating config object, which is fed into child component. */
  toggle(type: string) {
    this.graphConfig.configOptions.forEach((option) => {
      option.name === type ? (option.visible = true) : (option.visible = false);
    });

    this.trigger += 1;
  }

  ngOnInit(): void {}
}
