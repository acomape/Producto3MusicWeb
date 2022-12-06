import { Pipe, PipeTransform } from "@angular/core";
import { Cancion } from '../servicios/canciones.service';

@Pipe ({
  name: 'filtro',
})

export class FiltroCancionesPipe implements PipeTransform {

  transform (value: any, args: any): any {

    if (args === '' || args.length < 3) return value;
    const result = [];
    for (const cancion of value){
      if (cancion.artista.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result.push(cancion);
      };
    };
    for (const cancion of value){
      if (cancion.titulo.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result.push(cancion);
      };
    };
    return result;



  }
}
