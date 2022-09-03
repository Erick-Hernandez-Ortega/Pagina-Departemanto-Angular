import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore : AngularFirestore) { 
    this.items = firestore.collection('contacto').valueChanges();
  }

  ngOnInit(): void {
  }

}
