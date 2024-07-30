import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule

@Component({
  selector: 'app-pfilter',
  templateUrl: './pfilter.component.html',
  styleUrl: './pfilter.component.css'
})
export class PfilterComponent {
  // this is @input property binding or @input decorator. this allow you communicate from the child component to parents componenet
  @Input()
  all: number = 0;

  @Input()
  InStock: number = 0;

  @Input()
  OutStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRedioButton: string = 'all';

  onSelectedFilterRedioButtonChanged(){
      // console.log(this.selectedFilterRedioButton)
     this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRedioButton);
  }
}