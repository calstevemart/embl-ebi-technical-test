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
    component.config = {
      configOptions: [
        {
          name: 'nmr',
          visible: false,
          xAxis: 'ppm',
          yAxis: ''
        },
        {
          name: 'ms',
          visible: true,
          xAxis: 'Mass-to-Charge',
          yAxis: 'Intensity'
        }
      ]
    }

    /**
     * We don't want these wrapper functions firing, as they call to st.js, which itself
     * makes fetch() calls. This fetch() is a difficult thing to mock out in the testbed,
     * so I stub the calling methods instead.
     */
    spyOn(component,'ms').and.stub();
    spyOn(component, 'nmr').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('lifecycle hook tests', ()=> {
    beforeEach(() => {
      spyOn(component, 'renderAnew').and.stub();
    })

    it('should hit the render method in the init but only once', () => {
      component.ngOnInit()
      expect(component.renderAnew).toHaveBeenCalledTimes(1);
    });
  
    it('should hit the render method in the onChanges but only once', () => {
      component.ngOnChanges({});
      expect(component.renderAnew).toHaveBeenCalledTimes(1);
    })
  })

  it('should call the correct render method based on the current state of the config', () => {
    let option1 = {
      name: 'nmr',
      visible: false,
      xAxis: 'ppm',
      yAxis: ''
    }
    component.renderAnew(option1);
    expect(component.nmr).toHaveBeenCalledTimes(1);
    expect(component.currentlySelected).toBe(option1);

    let option2 = {
      name: 'ms',
      visible: true,
      xAxis: 'Mass-to-Charge',
      yAxis: 'Intensity'
    }
    component.renderAnew(option2);
    //twice as it is also called on init
    expect(component.ms).toHaveBeenCalledTimes(2);
    expect(component.currentlySelected).toBe(option2);
  });


});
