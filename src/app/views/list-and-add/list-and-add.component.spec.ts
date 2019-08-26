import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAndAddComponent } from './list-and-add.component';

describe('ListAndAddComponent', () => {
  let component: ListAndAddComponent;
  let fixture: ComponentFixture<ListAndAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAndAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAndAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
