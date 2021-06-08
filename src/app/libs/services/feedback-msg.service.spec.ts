import { TestBed } from '@angular/core/testing';

import { FeedbackMsgService } from './feedback-msg.service';

describe('FeedbackMsgService', () => {
  let service: FeedbackMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
