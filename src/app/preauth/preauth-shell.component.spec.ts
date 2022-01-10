import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreauthShellComponent } from './preauth-shell.component';

describe('PreauthShellComponent', () => {
  let component: PreauthShellComponent;
  let fixture: ComponentFixture<PreauthShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreauthShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreauthShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
