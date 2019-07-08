import { Component, OnInit } from '@angular/core';
import Calc from "../calculator/calc";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  calc:Calc;// Wont work inside onClick because it doesnt know the reference to this.calc <- so i made a fresh one inside the method

  constructor() {
    this.calc = new Calc();
  }

  ngOnInit() {
    document.getElementById("blurr").addEventListener("click", this.onClick);
  }

  onClick(){
    let superCalc:Calc = new Calc();
    let output = document.getElementById("output") as InnerHTML;
    let input:string = (<HTMLInputElement>document.getElementById("gUnit")).value;
    

    output.innerHTML += ("> " + input);
    output.innerHTML += (">> " + superCalc.run(input));

  }

}
