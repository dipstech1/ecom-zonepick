import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsInfoComponent } from './profile-details-info.component';

describe('ProfileDetailsInfoComponent', () => {
  let component: ProfileDetailsInfoComponent;
  let fixture: ComponentFixture<ProfileDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
