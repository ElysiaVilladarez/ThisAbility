import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  let service: GoogleAnalyticsService;
  let mockRouter: any;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('mockRouter', ['events']);

    service = new GoogleAnalyticsService(mockRouter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('sendEventTracking should send event', () => {
  //   service.sendEventTracking('category', 'action');
  //   spyOn(this, 'ga');
  // });
});
