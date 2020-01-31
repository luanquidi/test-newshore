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

  //Se crea arreglo de los miembros para mostrar
  public members: any[];
  public title: string;

  //Objeto de configuracion de la libreria Ng2SmartTableModule para mostrar los miembros y paginarlos
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
    
    //Método que permite recoger el id que viene por parametro
    this._route.params.subscribe((params: Params)=>{
      //Método que permite traer la información de los miembros de la casa
      this._houseService.getMembers(params._id).subscribe((response) => {
        this.members = response.members;
        //Se almacenan los miembros en el sessionStorage, para no hacer una nueva petición
        sessionStorage.setItem("members", JSON.stringify(this.members ))
        this.title = "Miembros de la casa " + response.nameHouse;
      }, (error) => {
        console.log(error)
      }); 
    })
  }

  //Método que permite filtrar por nombre
  searchByNamne(param: string){
    // console.log(param);
    //Para poder iniciar el filtro el texto debe contener minimo 3 caracteres
    if(param.length > 3){
      //se crea una lista con los miembros con coincidan con el nombre o apellido del miembro
      this.members = this.members.filter(x => x.name.toUpperCase().includes(param.toUpperCase()));
    }else{
      //Cuando el campo de busqueda tenga menos de 3 caracteres, se procede a armar la lista de miembros que previamente de guardaron en sessionStorage
      this.members = JSON.parse(sessionStorage.getItem("members"));
    }
  }

  //Método que permite mostrar la informacion del miembro por identificador
  viewMenber(member: Member){
    this._router.navigate(['/casas/miembro/' + member._id]);
  }


  

}
