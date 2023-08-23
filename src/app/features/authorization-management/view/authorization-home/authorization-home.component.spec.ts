import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationHomeComponent } from './authorization-home.component';

describe('AuthorizationHomeComponent', () => {
  let component: AuthorizationHomeComponent;
  let fixture: ComponentFixture<AuthorizationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
