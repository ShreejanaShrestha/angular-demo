import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  dragArrays = ['one', 'one', 'two', 'three'];

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  assignees = {
    data: [
      {name: "JERRY GREEN", selected: false, id: 1, owner: {picture:'aaaa', name: 'ram' }},
      {name: "MERRY POO", selected: false, id: 1, owner: {picture:'bbbbb', name: 'ram' }},
      {name: "CERRY SMT", selected: false, id: 1, owner: {picture:'cccc', name: 'ram' }},
      {name: "HARRY RIT", selected: false, id: 1, owner: {picture:'ddd', name: 'ram' }},

    ]
  };
  dragForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dragForm = this.fb.group({
      name: new FormControl('', Validators.required),
      checkArray: this.fb.array([])
    });
  }


  ngOnInit(): void {
  }

  onCheckboxChange(e) {
    console.log(e);
    const checkArray: FormArray = this.dragForm.get('checkArray') as FormArray;

    if (e.target.checked) {
      console.log(e.target.value);
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.dragForm.value)
  }

  addNew(event, name) {
    this.dragArrays.push(name);
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.dragArrays, event.previousIndex, event.currentIndex);
  //
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
