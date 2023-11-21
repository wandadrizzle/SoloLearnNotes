
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <h1>
     {{title}}
    </h1>
    <!--<nav>
      <a href="">Home</a>
      <a href="">Contacts</a>
    </nav>-->
    <!--OTHER TESTS AND DEMOS-->
    <!--<button (click)="login()">Click me</button>
    <p [class.red]="isRed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at neque placeat accusantium? Facilis dolorum eveniet sequi mollitia dolore numquam odit consequatur autem? Maxime architecto deserunt illum, odit voluptates earum!</p>
    <button (click)="change()">Switch Background Color</button>
    <br>
    <br>
    <div *ngFor="let item of products">{{item}}</div>-->
    
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string="Wanda's Favourite Quotes" //defining a property
  isRed:boolean=false;
  products=['writing', 'coding','talking','fitness'];
  constructor() { }

  ngOnInit(): void {
  }
//defining a method
login(){
//Oooh, is my notes app going to have logins because imma hide secrets?
alert("Welcome!")
}

change(){
  this.isRed = !this.isRed;
}

}

//#region NOTES:
/*
I am concerned, maybe it's because I am still using Angular 14 and that is why the standalone thing doesn't work.
Binding creates a live connection between the class and interface -- needs [] = "Expression"
-use the DOM property name
-ke eng attr.aria-label?
-ke eng class.name?
--Attributes use a similar syntax for binding, and need to be prefixed with attr.
-DOM yona?
-Which events are good to know?
-Oh shnap, need a proper HTML recap

-A directive is a class that adds new behavior to our elements.
--ngIf & ngFor
*/
//#endregion
