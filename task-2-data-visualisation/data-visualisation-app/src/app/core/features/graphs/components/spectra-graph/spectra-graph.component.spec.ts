import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectraGraphComponent } from './spectra-graph.component';

describe('SpectraGraphComponent', () => {
  let component: SpectraGraphComponent;
  let fixture: ComponentFixture<SpectraGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectraGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectraGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
