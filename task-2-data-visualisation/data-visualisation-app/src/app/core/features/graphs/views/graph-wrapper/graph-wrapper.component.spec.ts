import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GraphWrapperComponent } from './graph-wrapper.component';

@Component({
  selector: 'app-spectra-graph',
  template: ''
})
class MockSpectraGraphComponent {
  @Input() config: any;
  @Input() trigger: any;
}

describe('GraphWrapperComponent', () => {
  let component: GraphWrapperComponent;
  let fixture: ComponentFixture<GraphWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphWrapperComponent, MockSpectraGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the spectra graph component', () => {
    let graphElement = fixture.debugElement.query(By.directive(MockSpectraGraphComponent))
    expect(graphElement).toBeTruthy();
  });

  it('should toggle visibility  as expected', () => {

    component.toggle('nmr');
    expect(component.graphConfig.configOptions[0].visible).toBeTrue();
    expect(component.graphConfig.configOptions[1].visible).toBeFalse();

    component.toggle('ms');
    expect(component.graphConfig.configOptions[1].visible).toBeTrue();
    expect(component.graphConfig.configOptions[0].visible).toBeFalse();
  });

});
