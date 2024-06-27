import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  transacciones: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    // Suscribirse a eventos de navegación para recargar la lista
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadTransacciones();
      }
    });
  }

  ngOnInit() {
    this.loadTransacciones();
  }

  loadTransacciones() {
    this.apiService.getTransacciones().subscribe(data => {
      this.transacciones = data;
    });
  }

  deleteTransaccion(id: number) {
    this.apiService.deleteTransaccion(id).subscribe(() => {
      this.loadTransacciones(); // Recargar la lista después de eliminar
    });
  }

  irAFormulario() {
    this.router.navigate(['/agregar-transaccion']);
  }
  irAEditarTransaccion(id: number): void {
    this.router.navigate(['/transacciones/edit', id]);
  }
}
