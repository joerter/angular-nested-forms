import { Component, Input } from '@angular/core';

import { Hero } from './hero.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() model: Hero;
}