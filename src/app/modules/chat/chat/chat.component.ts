import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../service/chat.service';
import { ChatI } from '../models/chat';
import { COOKIE_NAME } from '../../../shared/services/token/token-interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatForm: FormGroup;
  messages;

  constructor(private fb: FormBuilder, private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.chatMessage();

    this.chatForm = this.fb.group({
      message: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        }
      )
    });
  }

  chatMessage(): void {
    this.chatService.initMessage()
      .subscribe(
        ((res: ChatI ) => {
          this.messages = res.response;
        })
      );
  }

  onSubmit(): void {
    const message = this.chatForm.get('message').value;
    const data = {
      text: message,
    };
    const myMessage = {
      text: message,
      mine: true
    };
    this.messages.push(myMessage);

    this.chatService.postMessage(data)
      .subscribe( res => {
        this.messages.push(res.response[0]);
      });
  }

  logOut(): void {
    localStorage.removeItem(COOKIE_NAME);
    this.router.navigate(['']);
  }
}
