import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoComponenteService {
  private mostrarFormularioSubject = new BehaviorSubject<boolean>(false);
  mostrarFormulario$ = this.mostrarFormularioSubject.asObservable();

  toggleFormulario() {
    this.mostrarFormularioSubject.next(!this.mostrarFormularioSubject.value);
  }
}
