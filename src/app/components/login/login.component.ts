import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: { class: 'flexComponent'}
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  //coursesObservable: Observable<any[]>;

  //itemRef: AngularFireObject<any>;
  //items: FirebaseObjectObservable<any>;
  items: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public toast: MatSnackBar) {
      this.items = db.list('Usuarios').valueChanges();

    //const relative = db.object('Usuarios').valueChanges();
    //this.items = db.object('Usuarios/0');
    //this.item = this.itemRef.valueChanges();
    //this.items = db.list('Usuarios').valueChanges();


    //this.coursesObservable = this.db.list('/Usuarios').valueChanges();
    //this.items.subscribe(res => console.log(res));
  }



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {

  }

  google(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res=>{
        console.log(res)
      }).catch(err=> {
        console.log(err);
      });
  }

  gem(){
    console.log(this.items)
    //this.afAuth.auth.signOut();
    this.items.subscribe(res=>{
      console.log(res);
    });
  }
  log() {

    this
      .afAuth
      .auth
      .signInWithEmailAndPassword(this.email.value, this.pass.value)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        this.toast.open('Hey!', null, {
          duration: 2000
        });
      });

    //console.log(this.email.value, this.pass.value);
    /*this.itemRef.set({
      correo: 'c@c'
    });*/
    //this.afAuth.auth().signInWithEmailAndPassword(email, password);

  }
  /*getCourses(listPath): Observable<any[]> {
    //return 
  }*/
}

//auth != null