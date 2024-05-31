import { Utenti } from '../../models/utenti';
import { UtentiService } from './../../utenti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  utenti:Utenti[] = [];

  constructor(private utentiService: UtentiService ) {}

  ngOnInit(): void {
    this.getUtenti();
  }
  getUtenti(): void {
    this.utentiService.getAllUtenti().subscribe(utenti => this.utenti = utenti);
  }
}
