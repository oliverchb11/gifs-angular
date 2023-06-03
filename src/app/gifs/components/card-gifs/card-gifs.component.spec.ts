import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGifsComponent } from './card-gifs.component';

describe('CardGifsComponent', () => {
  let component: CardGifsComponent;
  let fixture: ComponentFixture<CardGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGifsComponent]
    });
    fixture = TestBed.createComponent(CardGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
