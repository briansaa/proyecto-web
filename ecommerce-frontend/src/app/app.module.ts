import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service'; // Importa tu servicio aquí
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { AppRoutingModule } from './app-routing.module';

import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';
import { TransaccionesEditComponent } from './components/transacciones-edit/transacciones-edit.component'; // Importa tu nuevo componente

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    TransaccionesComponent,
    TransaccionFormComponent,
    UsuariosEditComponent,
    TransaccionesEditComponent // Asegúrate de agregar el componente a las declaraciones
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega HttpClientModule para usar HttpClient
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
