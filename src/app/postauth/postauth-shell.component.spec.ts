import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostauthShellComponent } from './postauth-shell.component';

describe('PostauthShellComponent', () => {
  let component: PostauthShellComponent;
  let fixture: ComponentFixture<PostauthShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostauthShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostauthShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
