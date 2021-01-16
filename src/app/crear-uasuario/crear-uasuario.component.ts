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
  Guardar(){
    this.service.crearPErsona(this.persona).subscribe(data=>{
      this.showSuccess('Persona ha sido Creada con Exito!','Correcto');
      this.router.navigate(["listaPersonas"]);       
    })
    this.service.ActaulizarSalario(this.persona)
    .subscribe(res =>{
      this.showSuccess(res,'Atención');
    })
  }

  showSuccess(mensaje:string, titulo:string) {
    this.toastr.success(mensaje, titulo);
  }

}
