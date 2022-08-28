import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  showMe : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.showMe = !this.showMe;
  }
}
