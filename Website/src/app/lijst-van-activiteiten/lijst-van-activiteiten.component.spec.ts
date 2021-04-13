import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstVanActiviteitenComponent } from './lijst-van-activiteiten.component';

describe('LijstVanActiviteitenComponent', () => {
  let component: LijstVanActiviteitenComponent;
  let fixture: ComponentFixture<LijstVanActiviteitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LijstVanActiviteitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LijstVanActiviteitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
