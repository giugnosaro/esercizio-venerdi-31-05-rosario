import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtentiService } from './utenti.service';
import { TodosService } from './todos.service';
import { Todos } from './models/todos';
import { Utenti } from './models/utenti';

@Injectable({
  providedIn: 'root'
})
export class ApplicazioneService {

  constructor(
    private utentiService: UtentiService,
    private todoService: TodosService
  ) { }

  // Metodi relativi agli utenti

  getUtenti(): Observable<Utenti[]> {
    return this.utentiService.getAllUtenti();
  }

  getUtenteById(id: number): Observable<Utenti | undefined> {
    return this.utentiService.getUtenteById(id);
  }

  addUtente(utente: Utenti): Observable<any> {
    return this.utentiService.addUtente(utente);
  }

  updateUtente(updateUtente: Utenti): Observable<any> {
    return this.utentiService.updateUtente(updateUtente);
  }

  deleteUtente(id: number): Observable<any> {
    return this.utentiService.deleteUtente(id);
  }

  // Metodi relativi ai Todos

  getTodos(): Observable<Todos[]> {
    return this.todoService.getTodos();
  }

  getTodoById(id: number): Observable<Todos | undefined> {
    return this.todoService.getTodoById(id);
  }

  addTodo(todo: Todos): Observable<any> {
    return this.todoService.addTodo(todo);
  }

  updateTodo(updateTodo: Todos): Observable<any> {
    return this.todoService.updateTodo(updateTodo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.todoService.deleteTodo(id);
  }
}
