import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilmockComponent } from './profilmock.component';

describe('ProfilmockComponent', () => {
  let component: ProfilmockComponent;
  let fixture: ComponentFixture<ProfilmockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilmockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilmockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
