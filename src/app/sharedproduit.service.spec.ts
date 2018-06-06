import { TestBed, inject } from '@angular/core/testing';

import { SharedproduitService } from './sharedproduit.service';

describe('SharedproduitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedproduitService]
    });
  });

  it('should be created', inject([SharedproduitService], (service: SharedproduitService) => {
    expect(service).toBeTruthy();
  }));
});
