import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house/houses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  public member: Member;
  
  constructor(
    private _houseService: HouseService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    //Método que permite recoger el id que viene por parametro en la url
    this._route.params.subscribe((params: Params)=>{
      //Método que permite obtener la informacion del miembro, de acuerdo a su identificador
      this._houseService.getMember(params._id).subscribe((response) => {
        this.member = response;
      }, (error) => {
        console.log(error)
      });
    })
  }

  //Método que permite hacer un back en el navegador
  goBack(){
    this._location.back();
  }

}
