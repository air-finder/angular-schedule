import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAsideItemComponent } from './layout-aside-item.component';

describe('LayoutAsideItemComponent', () => {
  let component: LayoutAsideItemComponent;
  let fixture: ComponentFixture<LayoutAsideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAsideItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAsideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
