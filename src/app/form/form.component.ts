import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  userLink: string = '';

  @Output() linkSubmittedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  getLinkFromUser(form: NgForm): void {
    this.userLink = form.value.link;
    console.log(this.userLink);
    this.linkSubmitted(this.userLink);
    form.reset();
  }

  linkSubmitted(link: string) {
    this.linkSubmittedEvent.emit(link);
  }

}
