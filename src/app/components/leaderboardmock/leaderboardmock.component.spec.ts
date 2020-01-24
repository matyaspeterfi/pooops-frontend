import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardmockComponent } from './leaderboardmock.component';

describe('LeaderboardmockComponent', () => {
  let component: LeaderboardmockComponent;
  let fixture: ComponentFixture<LeaderboardmockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardmockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardmockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
