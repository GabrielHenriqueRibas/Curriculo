  // email-validation.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root',
  })
  export class EmailValidationService {
    private url = 'https://emailvalidation.abstractapi.com/v1/';
    private chave = '22b5394c01774fd8b4ec5753bb9262a5'; 

    constructor(private http: HttpClient) {}

    validacaoEmail(email: string): Promise<any> {
      const url = `${this.url}?api_key=${this.chave}&email=${email}`;
      return this.http.get(url).toPromise();
    }
  }
