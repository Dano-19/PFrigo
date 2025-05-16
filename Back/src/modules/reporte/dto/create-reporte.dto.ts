import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateReporteDto {
  
  @IsNotEmpty()
  nombre: string;

  @IsOptional()
  direccion?: string;

  @IsNotEmpty()
  descripcion: string;

}