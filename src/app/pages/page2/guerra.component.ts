import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guerra',
  templateUrl: './guerra.component.html',
  styleUrls: ['./guerra.component.css']
})
export class GuerraComponent implements OnInit {

  public concierto: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.cargarConcierto();
  }

  cargarConcierto(){
    this.http.get('https://examen-d4160-default-rtdb.firebaseio.com/concierto.json')
      .subscribe((data) => {
        console.log("Datos recibidos:", data);
        this.concierto = data;
      });
  }

}
