import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from 'src/app/services/house/houses.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  public members: any[];
  public title: string;
  settings = {
    noDataMessage: "No hay miembros",
    pager: {
      display: true,
      perPage: 10
    },
    columns: {
      name: {
        title: 'Nombre',
        filter: false
      }
    },
    actions: {
      columnTitle: 'Ver miembro',
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'verMiembro', title: '<i class="fa fa-eye m-r-10"></i>' }
      ],
      position: 'right'
    },


  };
  
  constructor(
    private _houseService: HouseService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.members = [];
    
  }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params)=>{
      this._houseService.getMembers(params._id).subscribe((response) => {
        this.members = response.members;
        sessionStorage.setItem("members", JSON.stringify(this.members ))
        this.title = "Miembros de la casa " + response.nameHouse;
      }, (error) => {
        console.log(error)
      }); 
    })
  }
  searchByNamne(param: string){
    console.log(param);

    if(param.length > 3){
      this.members = this.members.filter(x => x.name.toUpperCase().includes(param.toUpperCase()));
    }else{
      this.members = JSON.parse(sessionStorage.getItem("members"));
    }


  }

  viewMenber(member: Member){
    this._router.navigate(['/casas/miembro/' + member._id]);
  }


  

}
