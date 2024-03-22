import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesearchComponent } from './recipesearch.component';

describe('RecipesearchComponent', () => {
  let component: RecipesearchComponent;
  let fixture: ComponentFixture<RecipesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
