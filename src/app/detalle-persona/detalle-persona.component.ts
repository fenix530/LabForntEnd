import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Modelo/Persona';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {
  
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

}
