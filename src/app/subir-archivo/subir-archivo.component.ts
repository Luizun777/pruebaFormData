import { Component, OnInit } from '@angular/core';
import { ArchivoService } from '../archivo.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.scss']
})
export class SubirArchivoComponent implements OnInit {

  imgPrevList: any = [];
  fotoNueva: boolean = true;
  verEliminarFoto: boolean = false;
  indexElimninar: number = null;
  fotoEliminar: any;

  constructor(
    private archivoSrv: ArchivoService
  ) { }

  ngOnInit(): void {
  }

  subir() {
    console.log('Subiendo');
    let form = new FormData();
    form.append('user', JSON.stringify(1));
    form.append('token', 'token_aslkdjasl');
    form.append('imagenes', this.imgPrevList);
    console.log(this.imgPrevList);
    console.log(form);
  }

  subirFoto(event, tipo?: string) {
    const archivo = tipo !== 'drop' ? (event.target.files[0]) : event;
    this.archivoSrv.cargarArchivo(archivo).then( (resp: any) => {
      const reader = new FileReader();
      reader.onload = ( e: any ) => {
        const base64 = e.target.result;
        const data: any = {
          status: true,
          data: base64,
          imagen: archivo
        }
        this.emitirResultado(data, archivo);
      }
      reader.readAsDataURL(archivo);
    }).catch( error => {
      const data: any = {
        status: false,
        data: error,
        imagen: null
      }
      this.emitirResultado(data, archivo);
    });
  }

  emitirResultado( data: any, file: File ) {
    console.log(file);
    if(data.status) {
      this.imgPrevList.push(file);
      this.fotoNueva = true;
      console.log('Bien');
    } else {
      console.log('No');
      
    }
  }

}
