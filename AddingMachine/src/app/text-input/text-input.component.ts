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
    let input:string = (<HTMLInputElement>document.getElementById("gUnit")).value;
    let output:number = superCalc.run(input);
    
    
    let paraInput:HTMLParagraphElement = document.createElement("p");
    paraInput.innerHTML = ">" + input;

    let paraOutput:HTMLParagraphElement = document.createElement("p");
    paraOutput.innerHTML = ">>" + output;

    console.log(document.getElementById("output").inputMode);
    document.getElementById("output").appendChild(paraInput);
    document.getElementById("output").appendChild(paraOutput);
    

  }

}
