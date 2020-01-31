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
    this._route.params.subscribe((params: Params)=>{
      this._houseService.getMember(params._id).subscribe((response) => {
        this.member = response;
        console.log(this.member)
      }, (error) => {
        console.log(error)
      });
    })
  }

  goBack(){
    this._location.back();
  }

}
