import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../Modelo/Persona';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-actualizar-personas',
  templateUrl: './actualizar-personas.component.html',
  styleUrls: ['./actualizar-personas.component.css']
})
export class ActualizarPersonasComponent implements OnInit {

  persona=new Persona;
  constructor(private service:ServiceService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    if(id!=null){
      this.service.getPersonaID(+id)
      .subscribe(data=>{
        this.persona=data;
      })

    } 
  }

  msg:string="";

  Actualizar(persona:Persona){  
    this.service.ActaulizarSalario(persona)
    .subscribe(res =>{
      this.showSuccess(res,'Atención');
    })
    this.service.actualizarPersona(persona)
    .subscribe(data=>{
      this.persona=data;
      this.showSuccess('La persona ha sido actualizada con Exito','Actualizacion Correcta');
      this.router.navigate(["listaPersonas"]); 
    });
       
  }

  showSuccess(mensaje:string, titulo:string) {
    this.toastr.success(mensaje, titulo);
  }

}
