import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAccessRegisterComponent } from './first-access-register.component';

describe('FirstAccessRegisterComponent', () => {
  let component: FirstAccessRegisterComponent;
  let fixture: ComponentFixture<FirstAccessRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAccessRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAccessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
