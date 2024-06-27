import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transacciones-edit',
  templateUrl: './transacciones-edit.component.html',
  styleUrls: ['./transacciones-edit.component.css']
})
export class TransaccionesEditComponent implements OnInit {
  transaccionForm: FormGroup;
  transaccionId: number;
  errorMessage: string | null = null;
  usuario_id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.transaccionForm = this.fb.group({
      usuario_id: [''],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      fecha: ['', Validators.required]
    });
    this.transaccionId = 0;
  }

  ngOnInit(): void {
    this.transaccionId = +this.route.snapshot.paramMap.get('id')!;
    // Fetch transaction details
    this.apiService.getTransaccion(this.transaccionId).subscribe(data => {
      this.transaccionForm.patchValue(data);
      this.usuario_id = data.usuario_id; // Guardar el usuario_id asociado
    }, error => {
      console.error('Error fetching transaction:', error);
    });
  }

  onSubmit(): void {
    if (this.transaccionForm.valid) {
      this.transaccionForm.patchValue({ usuario_id: this.usuario_id });
      this.apiService.updateTransaccion(this.transaccionId, this.transaccionForm.value).subscribe(
        () => {
          this.router.navigate(['/transacciones']);
        },
        error => {
          console.error('Error updating transaction:', error);
          this.errorMessage = error.error?.message || 'Error updating transaction';
        }
      );
    }
  }
}
