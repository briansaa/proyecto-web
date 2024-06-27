import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadUsuarios();
      }
    });
  }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: number) {
    this.apiService.deleteUsuario(id).subscribe(() => {
      this.loadUsuarios();
    });
  }

  irAFormulario() {
    this.router.navigate(['/agregar-usuario']);
  }

  editarUsuario(id: number) {
    this.router.navigate(['/usuarios', id, 'editar']);
  }
  
}
