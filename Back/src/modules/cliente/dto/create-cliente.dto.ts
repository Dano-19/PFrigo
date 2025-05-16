import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  telefono: string;

  @IsNotEmpty()
  cedula: string;

  @IsOptional()
  direccion?: string;

}
