import { IfStmt } from '@angular/compiler';
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
  id:number=0;

  Actualizar(persona:Persona){      
    this.service.actualizarPersona(persona)
    .subscribe(data=>{
      this.persona=data;
      this.showSuccess('La persona ha sido actualizada con Exito','Actualizacion Correcta');
      if(persona.idPerson!=undefined){
        this.service.ActaulizarSalario(persona.idPerson).subscribe(res=>{});      
      }
      var fechaA=new Date();
      if(persona.attachmentDate!=undefined && persona.baseSalary!=undefined){        
        var fechaC=new Date(persona.attachmentDate);
        var time=fechaA.getTime()-fechaC.getTime();
        var years= Math.floor(time / (1000 * 60 * 60 * 24 * 365));
        var salario=persona.baseSalary+persona.baseSalary*0.1;
        if(years>=2){
          this.showWarning('Su nuevo salario es '+salario,'Atención');
        }
        else{
          this.showWarning('No cumple con el tiempo para el aumento de Salario','Atención');
        }
      }           
      this.router.navigate(["listaPersonas"]);                    
    });           
  }

  showSuccess(mensaje:string, titulo:string) {
    this.toastr.success(mensaje, titulo);
  }

  showWarning(mensaje:string, titulo:string) {
    this.toastr.warning(mensaje, titulo);
  }

}
