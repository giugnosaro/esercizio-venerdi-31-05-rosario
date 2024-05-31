import { Injectable } from '@angular/core';
import { Todos } from './models/todos';
import { Utenti } from './models/utenti';



@Injectable({
  providedIn: 'root'
})
export class ApplicazioneService {
  getUtenti(): import("rxjs").Observable<import("./models/utenti").Utenti[]> {
    throw new Error('Method not implemented.');
  }
  getUtenteById(id: number): import("rxjs").Observable<import("./models/utenti").Utenti | undefined> {
    throw new Error('Method not implemented.');
  }
  addUtente(utente: Utenti): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  updateUtente(updateUtente: Utenti): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  deleteUtente(id: number): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  getTodos(): import("rxjs").Observable<import("./models/todos").Todos[]> {
    throw new Error('Method not implemented.');
  }
  getTodoById(id: number): import("rxjs").Observable<import("./models/todos").Todos | undefined> {
    throw new Error('Method not implemented.');
  }
  addTodo(todo: Todos): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  updateTodo(updateTodo: Todos): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  deleteTodo(id: number): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
