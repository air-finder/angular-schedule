import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServicesListComponent } from './manage-services-list.component';

describe('ManageServicesListComponent', () => {
  let component: ManageServicesListComponent;
  let fixture: ComponentFixture<ManageServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageServicesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
