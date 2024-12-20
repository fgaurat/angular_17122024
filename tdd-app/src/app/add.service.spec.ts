import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return 3', () => {
    const r = service.add(1,2)
    expect(r).toBe(3)
  });


});
