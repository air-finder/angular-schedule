import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkersListComponent } from './manage-workers-list.component';

describe('ManageWorkersListComponent', () => {
  let component: ManageWorkersListComponent;
  let fixture: ComponentFixture<ManageWorkersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageWorkersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
