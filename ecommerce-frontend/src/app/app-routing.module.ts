import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';
import { TransaccionesEditComponent } from './components/transacciones-edit/transacciones-edit.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/:id/editar', component: UsuariosEditComponent },
  { path: 'agregar-usuario', component: UsuarioFormComponent },
  { path: 'transacciones', component: TransaccionesComponent },
  { path: 'transacciones/edit/:id', component: TransaccionesEditComponent },

  { path: 'agregar-transaccion', component: TransaccionFormComponent },
  { path: '**', redirectTo: '/usuarios', pathMatch: 'full' } ,// Redirección en caso de ruta no encontrada
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
