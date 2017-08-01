import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
todos: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.todos = this.db.list('/todos');
    return this.todos;
  }

  addTodo(todo){
    return this.todos.push({todo: todo});
  }

  editTodo(key, todo){
    return this.todos.update(key, {todo: todo});
  }

  removeTodo(key){
    return this.todos.remove(key);
  }

}
