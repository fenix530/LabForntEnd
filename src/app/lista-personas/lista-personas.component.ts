import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../Modelo/Persona';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas:Persona[] | undefined;
  msg:String | undefined;
  constructor(private service:ServiceService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Consultar(persona:Persona){
    if(persona.idPerson!=undefined){
      localStorage.setItem("id",persona.idPerson.toString());
      this.router.navigate(["DeatllePersona"]);
    }    
  }

  Editar(persona:Persona){
    if(persona.idPerson!=undefined){
      localStorage.setItem("id",persona.idPerson.toString());
      this.router.navigate(["actualizarPersona"]);
    }    
  }

  Eliminar(persona:Persona){
    if(this.personas!=undefined){
      this.service.BorrarPersona(persona)
      .subscribe(data=>{
        this.personas=this.personas?.filter(p=>p!=persona)
      });
      this.router.navigate(["listaPersonas"]);
      this.showError('la persona ha sido eliminada con exito','Persona Eliminada');
    }    
  }

  showSuccess(mensaje:string, titulo:string) {
    this.toastr.success(mensaje, titulo);
  }

  showError(mensaje:string, titulo:string) {
    this.toastr.error(mensaje, titulo);
  }

}
