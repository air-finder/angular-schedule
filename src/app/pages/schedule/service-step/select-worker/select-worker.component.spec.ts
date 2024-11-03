import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkerComponent } from './select-worker.component';

describe('SelectWorkerComponent', () => {
  let component: SelectWorkerComponent;
  let fixture: ComponentFixture<SelectWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
