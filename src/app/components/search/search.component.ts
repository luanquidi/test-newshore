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

  search(){
    this.param.emit(this.paramsText)
    // this._houseService.getMemberByName(this.paramsText).subscribe((response)=> {
      
    //   if(response[0] != undefined){
    //     this._router.navigate(['/casas/miembro/' + response[0]._id]);
    //     return;
    //   }

    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Intenta nuevamente',
    //     text: 'No se encontraron resultados!'
    //   });

    // }, (error) => {
    //   console.log(error);
    // })
  }

}
