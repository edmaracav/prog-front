import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public headerText = 'Texto a ser exibido. Gosta de angular? ';
  public url = 'http://www.google.com.br'
  constructor() { }

  ngOnInit(): void {
  }

}
