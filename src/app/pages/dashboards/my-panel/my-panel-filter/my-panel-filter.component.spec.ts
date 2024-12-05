import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPanelFilterComponent } from './my-panel-filter.component';

describe('MyPanelFilterComponent', () => {
  let component: MyPanelFilterComponent;
  let fixture: ComponentFixture<MyPanelFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPanelFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPanelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
