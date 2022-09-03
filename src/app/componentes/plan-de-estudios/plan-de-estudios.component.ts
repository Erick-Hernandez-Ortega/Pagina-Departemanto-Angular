import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-plan-de-estudios',
  templateUrl: './plan-de-estudios.component.html',
  styleUrls: ['./plan-de-estudios.component.css']
})
export class PlanDeEstudiosComponent implements OnInit {
  items: Observable<any[]>;
  materias2: Observable<any[]>;
  materias3: Observable<any[]>;
  materias4: Observable<any[]>;
  materias5: Observable<any[]>;
  materias6: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('materias').valueChanges();
    this.materias2 = firestore.collection('materias basicas particular').valueChanges();
    this.materias3 = firestore.collection('especializante').valueChanges();
    this.materias4 = firestore.collection('ciberseguridad').valueChanges();
    this.materias5 = firestore.collection('desarrollo de software').valueChanges();
    this.materias6 = firestore.collection('inteligencia de datos').valueChanges();
  }

  ngOnInit(): void {
    
  }

}
