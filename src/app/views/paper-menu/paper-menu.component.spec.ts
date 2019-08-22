import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperMenuComponent } from './paper-menu.component';

describe('PaperMenuComponent', () => {
  let component: PaperMenuComponent;
  let fixture: ComponentFixture<PaperMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
