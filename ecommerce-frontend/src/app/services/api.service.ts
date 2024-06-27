import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4000/api/';

  constructor(private http: HttpClient) {}

  // Usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}usuarios`);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}usuarios/${id}`);
  }

  addUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}usuarios`, usuario);
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}usuarios/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}usuarios/${id}`);
  }

  // Transacciones
  getTransacciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}transacciones`);
  }

  getTransaccion(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}transacciones/${id}`);
  }

  addTransaccion(transaccion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}transacciones`, transaccion);
  }

  updateTransaccion(id: number, transaccion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}transacciones/${id}`, transaccion);
  }

  deleteTransaccion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}transacciones/${id}`);
  }
}
