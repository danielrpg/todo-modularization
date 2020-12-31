import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from 'src/app/services/todo.service';


@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    TodoDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TodoService]
})
export class TodoDetailModule { }
