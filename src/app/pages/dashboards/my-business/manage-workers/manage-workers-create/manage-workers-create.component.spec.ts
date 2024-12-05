import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkersCreateComponent } from './manage-workers-create.component';

describe('ManageWorkersCreateComponent', () => {
  let component: ManageWorkersCreateComponent;
  let fixture: ComponentFixture<ManageWorkersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageWorkersCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
