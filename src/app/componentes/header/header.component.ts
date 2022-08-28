import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMe : boolean = false

  constructor() { }

  mostrar(){
    this.showMe = !this.showMe;
  }

  ngOnInit(): void {
  }

}
