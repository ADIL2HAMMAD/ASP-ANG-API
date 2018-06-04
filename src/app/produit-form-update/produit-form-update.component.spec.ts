import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormUpdateComponent } from './produit-form-update.component';

describe('ProduitFormUpdateComponent', () => {
  let component: ProduitFormUpdateComponent;
  let fixture: ComponentFixture<ProduitFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
