import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeVideoComponent } from './theme-video.component';

describe('ThemeVideoComponent', () => {
  let component: ThemeVideoComponent;
  let fixture: ComponentFixture<ThemeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
