import { Component, inject } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { TodosService } from '../../../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './todos.component.html',
  styles: ``
})
export class TodosComponent {

  public todoService = inject(TodosService);

  public todo = this.todoService.todoSource();
  public done = this.todoService.doneSource();
  public inProgges = this.todoService.inProggesSource();

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateLists();
    }
  }

  updateLists(){
    this.todoService.todoSource.set(this.todo);
    this.todoService.doneSource.set(this.done);
    this.todoService.inProggesSource.set(this.inProgges);
  }
}
