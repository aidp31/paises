import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';

  constructor(private readonly paisService: PaisService){}

  get country(){
    return this.paisService.country
  }

  ngOnInit(){
  }


  buscar(){
    return this.paisService.searchCountry(this.termino)

  /*  this.paisService.buscarPais(this.termino).subscribe
    ((resp) =>{
      console.log(resp);
    },(err)=>{
      this.hayError = true;
    })*/
  }

}
