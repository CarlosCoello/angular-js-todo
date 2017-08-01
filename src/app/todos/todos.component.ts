import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit {
@ViewChild('f') form:any;
todos;
todo;
todoObj;
todoEdit: string;
editInProcess: boolean = false;


  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.firebaseService.getData().subscribe( todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

  editTodoItem(todo){
    this.todoObj = todo;
    this.todoEdit = todo.todo;
    this.editInProcess = true;
  }

  addToList(){
    this.firebaseService.addTodo(this.todo);
    this.form.reset();
  }

  updateTodo(todoObj){
    this.firebaseService.editTodo(todoObj.$key, this.todoEdit);
    this.form.reset();
    this.editInProcess = false;
  }

  deleteTodoItem(todo){
    this.firebaseService.removeTodo(todo.$key);
  }

  goBack(){
    this.editInProcess = false;
  }


}
