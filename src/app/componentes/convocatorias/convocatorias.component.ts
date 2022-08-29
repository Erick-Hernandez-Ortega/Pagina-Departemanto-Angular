import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDownloadURL, listAll, ref, Storage } from "@angular/fire/storage"
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent implements OnInit {
  items: Observable<any[]>;
  imagenes : string [];

  constructor(firestore: AngularFirestore, private storage: Storage) { 
    this.items = firestore.collection('convocatorias').valueChanges();
    this.imagenes = []
  }
  
  ngOnInit(): void {
    this.getImagenes()
  }

  getImagenes(){
    const imagenesRef = ref(this.storage, "Imagenes");

    listAll(imagenesRef)
    .then(async response => {
      console.log(response);
      
      this.imagenes = []

      for (let item of response.items){
        const url = await getDownloadURL(item)
        console.log(url);
        this.imagenes.push(url)
      }
    }).catch(e => console.log(e))
  }

}
