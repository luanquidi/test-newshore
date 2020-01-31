import { Component, OnInit } from "@angular/core";
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house/houses.service';

@Component({
  selector: "app-house",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.css"]
})
export class HousesComponent implements OnInit {
  public title: string;
  public houses: House[];
  public estado: boolean;
  public mensaje: string;

  constructor(private _houseService: HouseService) {
    this.title = "Casas";
    this.estado = true;
  }

  ngOnInit() {
    this._houseService.getHouses().subscribe(
      response => {
        this.houses = response;
        console.log(this.houses)
      },
      error => {
        this.estado = false;
        this.mensaje = "No hay casas para mostrar, se ha producido un Error";
        console.log(error);
      }
    );
  }
}
