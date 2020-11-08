import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatRoutingModule } from '../chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ChatRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
