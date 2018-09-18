import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WertpapierListeComponent } from './wertpapier-liste.component';

describe('WertpapierListeComponent', () => {
  let component: WertpapierListeComponent;
  let fixture: ComponentFixture<WertpapierListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WertpapierListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WertpapierListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
