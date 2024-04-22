/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeliculasService } from './peliculas.service';

describe('Service: Peliculas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculasService]
    });
  });

  it('should ...', inject([PeliculasService], (service: PeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
