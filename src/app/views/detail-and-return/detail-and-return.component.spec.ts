import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAndReturnComponent } from './detail-and-return.component';

describe('DetailAndReturnComponent', () => {
  let component: DetailAndReturnComponent;
  let fixture: ComponentFixture<DetailAndReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAndReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAndReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
