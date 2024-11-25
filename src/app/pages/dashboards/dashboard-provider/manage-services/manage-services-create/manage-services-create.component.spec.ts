import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServicesCreateComponent } from './manage-services-create.component';

describe('ManageServicesCreateComponent', () => {
  let component: ManageServicesCreateComponent;
  let fixture: ComponentFixture<ManageServicesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageServicesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
