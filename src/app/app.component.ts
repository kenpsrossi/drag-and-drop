import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  incomingItems = ['Remedio1', 'Remedio2', 'Remedio3', 'Remedio4', 'Remedio5'];

  availableItems = ['Remedio6', 'Remedio7', 'Remedio8', 'Remedio9'];

  soldItems = ['RemedioA', 'RemedioB', 'RemedioC', 'RemedioD'];

 // items = [
   // {value: 'Oranges', disabled: false},
   // {value: 'Bananas', disabled: true},
   // {value: 'Mangoes', disabled: false},
  //];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}


// For a Disabled Drag and Drop

// import {Component} from '@angular/core';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   items = [
//     {value: 'Oranges', disabled: false},
//     {value: 'Bananas', disabled: true},
//     {value: 'Mangoes', disabled: false},
//   ];

//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.items, event.previousIndex, event.currentIndex);
//   }
// }
