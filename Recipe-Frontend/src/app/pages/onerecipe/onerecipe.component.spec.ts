import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerecipeComponent } from './onerecipe.component';

describe('OnerecipeComponent', () => {
  let component: OnerecipeComponent;
  let fixture: ComponentFixture<OnerecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnerecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnerecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
