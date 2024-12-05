import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessAnaliticsComponent } from './my-business-analitics.component';

describe('MyBusinessAnaliticsComponent', () => {
  let component: MyBusinessAnaliticsComponent;
  let fixture: ComponentFixture<MyBusinessAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBusinessAnaliticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBusinessAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
