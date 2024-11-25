import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAnaliticsComponent } from './provider-analitics.component';

describe('ProviderAnaliticsComponent', () => {
  let component: ProviderAnaliticsComponent;
  let fixture: ComponentFixture<ProviderAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderAnaliticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
