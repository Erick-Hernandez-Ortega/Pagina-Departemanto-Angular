import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore : AngularFirestore) { 
    this.items = firestore.collection('cursos').valueChanges();
  }

  ngOnInit(): void {
  }

}
