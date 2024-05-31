import { Component, OnInit } from '@angular/core';
import { Utenti } from '../../models/utenti';
import { UtentiService } from '../../utenti.service';
import { TodosService } from '../../todos.service';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss'
})
export class UtentiComponent implements OnInit{
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
