import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit {
  nuevaTransaccion: any = {}; // Objeto para almacenar los datos de la nueva transacción
  usuarios: any[] = []; // Lista de usuarios

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  agregarTransaccion(): void {
    this.apiService.addTransaccion(this.nuevaTransaccion).subscribe(() => {
      // Limpiar el formulario después de la inserción
      this.nuevaTransaccion = {};

      // Navegar de vuelta a la lista de transacciones y actualizarla
      this.router.navigate(['/transacciones']);
    });
  }
}
