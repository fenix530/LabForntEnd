import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../Modelo/Persona';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-crear-uasuario',
  templateUrl: './crear-uasuario.component.html',
  styleUrls: ['./crear-uasuario.component.css']
})
export class CrearUasuarioComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService, private toastr: ToastrService) { }

  ngOnInit(){
  }

  persona:Persona = new Persona();
  id:number=0;

  Guardar(){
    this.service.crearPErsona(this.persona).subscribe(data=>{
      this.showSuccess('Persona ha sido Creada con Exito!','Correcto');
      this.id=Number(data);
      this.service.ActaulizarSalario(this.id)
        .subscribe(res =>{
        this.showSuccess(res.toString(),'Atención');
      });
      var fechaA=new Date();
      if(this.persona.attachmentDate!=undefined && this.persona.baseSalary!=undefined){        
        var fechaC=new Date(this.persona.attachmentDate);
        var time=fechaA.getTime()-fechaC.getTime();
        var years= Math.floor(time / (1000 * 60 * 60 * 24 * 365));
        var salario=this.persona.baseSalary+this.persona.baseSalary*0.1;
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
