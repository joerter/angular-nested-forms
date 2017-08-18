import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Hero } from './hero.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild("parentForm") parentForm: NgForm;
    model = new Hero(18, 'Dr IQ', 'Super Flexible', 'Chuck Overstreet');

    ngOnInit() {
      console.log(this.parentForm.controls);
    }
}
