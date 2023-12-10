import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user)
    
  }

  updateUser(user: any): Observable<any> {
    const updateUrl = `${this.url}/${user.id}`;
    return this.http.put<any>(updateUrl, user);
  }

  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.url}/${userId}`;
    return this.http.delete<any>(deleteUrl);
  }
}
