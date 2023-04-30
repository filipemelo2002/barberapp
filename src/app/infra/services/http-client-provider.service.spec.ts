import { TestBed } from '@angular/core/testing';

import { HttpClientProviderService } from './http-client-provider.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpClientProviderService', () => {
  let service: HttpClientProviderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HttpClientProviderService]
    }).compileComponents();
    service = TestBed.inject(HttpClientProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
