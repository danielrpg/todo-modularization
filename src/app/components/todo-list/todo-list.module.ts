import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from 'src/app/services/todo.service';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TodoService]
})
export class TodoListModule { }
