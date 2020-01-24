import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmockComponent } from './aboutmock.component';

describe('AboutmockComponent', () => {
  let component: AboutmockComponent;
  let fixture: ComponentFixture<AboutmockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
