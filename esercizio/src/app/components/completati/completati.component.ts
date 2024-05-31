import { Todos } from '../../models/todos';
import { Utenti } from '../../models/utenti';
import { TodosService } from '../../todos.service';
import { UtentiService } from './../../utenti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent implements OnInit{
  utenti: Utenti[] = [];
  todos: any[] = [];

  constructor(private utentiService: UtentiService, private todosService: TodosService ) {}

  ngOnInit(): void {
    this.utentiService.getAllUtenti().subscribe((utenti: Utenti[]) => {
      console.log('Utenti:', utenti);
      this.utenti = utenti;
    });

    this.todosService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  getTodosByUserId(userId: number): Todos[] {
    return this.todos.filter(todo => todo.userId === userId);
  }

  isCompleted(userId: number): boolean {
    const todosByUser = this.getTodosByUserId(userId);
    return todosByUser.every(todo => todo.completed);
  }

}
