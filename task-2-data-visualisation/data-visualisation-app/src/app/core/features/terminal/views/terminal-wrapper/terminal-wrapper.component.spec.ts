import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalWrapperComponent } from './terminal-wrapper.component';

describe('TerminalWrapperComponent', () => {
  let component: TerminalWrapperComponent;
  let fixture: ComponentFixture<TerminalWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
