import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperUiComponent } from './paper-ui.component';

describe('PaperUiComponent', () => {
  let component: PaperUiComponent;
  let fixture: ComponentFixture<PaperUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
