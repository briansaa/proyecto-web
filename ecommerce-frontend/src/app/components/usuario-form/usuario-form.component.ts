import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  nuevoUsuario: any = {}; // Objeto para almacenar los datos del nuevo usuario

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  agregarUsuario(): void {
    this.apiService.addUsuario(this.nuevoUsuario).subscribe(() => {
      // Limpiar el formulario después de la inserción
      this.nuevoUsuario = {};

      // Navegar de vuelta a la lista de usuarios y actualizarla
      this.router.navigate(['/usuarios']);
    });
  }
}
