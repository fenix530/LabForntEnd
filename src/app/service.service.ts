import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }
  
  url='http://localhost:8089/empleado/listAll';
  urlG='http://localhost:8089/empleado/save';
  urlC='http://localhost:8089/empleado/list';
  urlU='http://localhost:8089/empleado/update';
  urlD='http://localhost:8089/empleado/delete;';
  urlV='http://localhost:8089/empleado/increase';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  crearPErsona(persona:Persona){
    return this.http.post<Persona>(this.urlG,persona);
  }

  getPersonaID(id:number){
    return this.http.get<Persona>(this.urlC+"/"+id);
  }

  actualizarPersona(persona:Persona){
    return this.http.put<Persona>(this.urlU+"/"+persona.idPerson,persona);
  }

  BorrarPersona(persona:Persona){
    return this.http.delete<Persona>(this.urlD+"/"+persona.idPerson);
  }
  msg:string | undefined;

  ActaulizarSalario(persona:Persona){
    return this.http.put<any>(this.urlV+"/"+persona.idPerson,persona);
  }
}

