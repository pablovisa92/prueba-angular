import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

import { User } from './../models/users.model';

interface ResponseUsers{
  results: User[];
  info: any;
}

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(results: number = 5) {
    //Introducimos un parametro de entrada en el metodo
    return this.http.get<ResponseUsers>(`https://randomuser.me/api/?results=${results}`)
    // // Utilizamos `` para encerrarTypeScript también admite plantillas de cadenas de texto o plantillas de literales. Estas plantillas de literales le permiten incrustar expresiones en una cadena de texto. Las plantillas de literales están encerrados por el carácter de retroceso (`)
    //Este metodo nos devolveria un observable(flujo continuo de datos) por lo que deberemos tratarlo con pipes en este caso map que lo utilizamos para 
    //que se transforme en un observable nativo de array de usuarios (es decir un array) -->Seguimos en users-list.component.ts
    .pipe(
      map(response => response.results)
    );
  }


}
