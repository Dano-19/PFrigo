import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ]
})
export class ReporteComponent {
  visible: boolean = false;
  selectedProduct: any = null;
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.http.get<any[]>('http://localhost:3000/clientes').subscribe({
      next: (data) => {
        this.products = data;
        console.log('Clientes recibidos:', this.products);
      },
      error: (error) => {
        alert('Error al obtener los clientes');
        console.error(error);
      }
    });
  }

  showDialog(product: any) {
    this.selectedProduct = product;
    this.visible = true;
  }

  onlyNumbers(event: KeyboardEvent): void {
    const key = event.key;
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }
  }

  isTelefonoValido(telefono: string): boolean {
    return /^0\d{9}$/.test(telefono);
  }
}
