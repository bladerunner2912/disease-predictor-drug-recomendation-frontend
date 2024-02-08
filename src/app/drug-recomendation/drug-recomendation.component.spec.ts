import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugRecomendationComponent } from './drug-recomendation.component';

describe('DrugRecomendationComponent', () => {
  let component: DrugRecomendationComponent;
  let fixture: ComponentFixture<DrugRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugRecomendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
