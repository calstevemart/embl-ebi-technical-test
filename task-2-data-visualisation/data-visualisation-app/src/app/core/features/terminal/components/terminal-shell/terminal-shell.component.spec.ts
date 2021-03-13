import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalShellComponent } from './terminal-shell.component';

describe('TerminalShellComponent', () => {
  let component: TerminalShellComponent;
  let fixture: ComponentFixture<TerminalShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
