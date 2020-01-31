import { Component, Output,EventEmitter } from '@angular/core';
import Swal  from 'sweetalert2';
import { HouseService } from 'src/app/services/house/houses.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @Output() param: EventEmitter<string> = new EventEmitter<string>();
  public paramsText: string;



  constructor(
    private _houseService: HouseService,
    private _router: Router
  ) { 
    this.paramsText = '';
  }

  //Método que permite comunicar al componente padre y pasarle los parametros para hacer el filtro
  search(){
    this.param.emit(this.paramsText)
  }

}
