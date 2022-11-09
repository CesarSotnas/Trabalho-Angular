import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  lista!: any;

  constructor(private covidService: CovidService) {}

  ngOnInit() {
    this.covidService.getDados().subscribe(
      (data) => {
        console.log(data);
        this.lista = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
