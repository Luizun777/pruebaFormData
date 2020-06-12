import { Injectable } from '@angular/core';
import { FileItem } from './models/file-item';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor() { }

  cargarArchivo(archivo: any) {
    const PESO_MAX = 5 * 1024 * 1024;
    return new Promise( (resolve, reject) => {
      if( !this.archivoValido(archivo.type) ) {
        reject('FORMATO');
      } else {
        if ( archivo.size > PESO_MAX ) {
          reject(`El peso de la imagen excede el permitido.`);
        } else {
          const nuevoArchivo = new FileItem(archivo);
          resolve(nuevoArchivo);
        }
      }
    });
  }

  private archivoValido( tipo: string ): boolean {
    return ( tipo === '' || tipo === undefined ) ? false : ( tipo.startsWith('image') );
  }

}
