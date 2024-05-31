
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
  utentiArr: Utenti[] = [];
  todosArr: Todos[] = [];

  constructor(private utentiService: UtentiService, private todosService: TodosService ) {}

 ngOnInit(){
   this.todosArr= this.todosService.todosArr.filter (todo => todo.completed);
   this.utentiArr= this.utentiService.utentiArr;
 }

 getUserName(userId: number): Utenti | undefined {
  return this.utentiArr.find(utenti => utenti.id === userId)
}

}
