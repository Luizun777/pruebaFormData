export class FileItem {

  public archivo: File;
  public filename : string;

  constructor( archivo: File ) {
    this.archivo = archivo;
    this.filename = archivo.name;
  }

}

export interface Respuesta {
  status: boolean;
  data: string;
  imagen: File;
}