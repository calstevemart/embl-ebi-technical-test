import { Component, OnInit } from '@angular/core';

/**Pure js library variable declarations. */
declare var jQuery: any;

/**Page template component, used to render navbar. */
@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.less']
})
export class PageTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
