import { Injectable } from '@angular/core';
import { Utenti } from './models/utenti';
import { Observable, of } from 'rxjs';
import { ApplicazioneService } from './applicazione.service';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private applicazioneService: ApplicazioneService) { }

  getAllUtenti(): Observable<Utenti[]> {

    return this.applicazioneService.getUtenti();
  }

  getUtenteById(id: number): Observable<Utenti | undefined> {

    return this.applicazioneService.getUtenteById(id);
  }

  addUtente(utente: Utenti): Observable<any> {

    return this.applicazioneService.addUtente(utente);
  }

  updateUtente(updateUtente: Utenti): Observable<any> {

    return this.applicazioneService.updateUtente(updateUtente);
  }

  deleteUtente(id:number): Observable<any> {

    return this.applicazioneService.deleteUtente(id);
  }
}

