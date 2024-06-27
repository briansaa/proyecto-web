import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {
  usuarioId: number = 0;
  usuarioForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      // Agrega aquí más campos según tu modelo de usuario
    });
  }

  ngOnInit(): void {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getUsuario(this.usuarioId).subscribe(
      (data: any) => {
        this.usuarioForm.patchValue(data);
      },
      (error: any) => {
        console.log('Error al obtener el usuario', error);
      }
    );
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      this.apiService.updateUsuario(this.usuarioId, this.usuarioForm.value).subscribe(
        (data: any) => {
          console.log('Usuario actualizado correctamente', data);
          this.router.navigate(['/usuarios']);
        },
        (error: any) => {
          console.log('Error al actualizar el usuario', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
