  // email-validation.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root',
  })
  export class EmailValidationService {
    private apiUrl = 'https://emailvalidation.abstractapi.com/v1/';
    private apiKey = '22b5394c01774fd8b4ec5753bb9262a5'; 

    constructor(private http: HttpClient) {}

    validateEmail(email: string): Promise<any> {
      const url = `${this.apiUrl}?api_key=${this.apiKey}&email=${email}`;
      return this.http.get(url).toPromise();
    }
  }
