
import { Component, OnInit } from "@angular/core";
import { Utenti } from "../../models/utenti";
import { Todos } from "../../models/todos";
import { UtentiService } from "../../utenti.service";
import { TodosService } from "../../todos.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  utentiArr: Utenti[] = [];
  todosArr: Todos[] = [];


  constructor(private utentiService: UtentiService, private todosService: TodosService ) {}

  ngOnInit(): void {
    this.utentiArr = this.utentiService.utentiArr;
    this.todosArr = this.todosService.todosArr;
  }

  getUserName(userId: number): Utenti | undefined {
    return this.utentiArr.find(utenti => utenti.id === userId)
  }

}
