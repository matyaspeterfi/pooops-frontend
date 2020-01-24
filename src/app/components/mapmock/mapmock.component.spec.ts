import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmockComponent } from './mapmock.component';

describe('MapmockComponent', () => {
  let component: MapmockComponent;
  let fixture: ComponentFixture<MapmockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
