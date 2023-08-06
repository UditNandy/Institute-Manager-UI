import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorizationProfileComponent } from './create-authorization-profile.component';

describe('CreateAuthorizationProfileComponent', () => {
  let component: CreateAuthorizationProfileComponent;
  let fixture: ComponentFixture<CreateAuthorizationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthorizationProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAuthorizationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
