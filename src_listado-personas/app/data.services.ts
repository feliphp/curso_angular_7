import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
                private loginService: LoginService){}

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-83e4c.firebaseio.com/datos.json?auth='+token);
    }

    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-83e4c.firebaseio.com/datos.json?auth='+token, personas)
        .subscribe(
            response => console.log("resultado guardar Personas"+ response),
            error => console.log ("Error al guardar Personas"+error) 
        )
    }

    modificarPersona(index:number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-83e4c.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.put(url,persona)
        .subscribe(
            response => console.log("resultado modificar Personas"+ response),
            error => console.log ("Error al modificar Personas"+error) 
        )
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-83e4c.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado eliminar Personas"+ response),
            error => console.log ("Error al eliminar Personas"+error) 
        )
    }
}