import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: any[] = [];
  transacciones: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });

    this.apiService.getTransacciones().subscribe(data => {
      this.transacciones = data;
    });
  }
}
