import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  lenght = 0;
  value = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLenght(event : Event){
    const input = event.target as HTMLInputElement;
    const parsedValue = parseInt(input.value);
    if(!isNaN(parsedValue)){
      this.lenght = parsedValue;
      }
  }
  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = "1234567890";
    const letters = "abcdefghiujklmnoprstuwyqzx"
    const symbols = "!@#$%^&*()"

    let validChars = "";

    if(this.includeLetters){
      validChars += letters;
    }
    
    if (this.includeNumbers){
      validChars += numbers;
    }
    
    if (this.includeSymbols){
      validChars += symbols;
    }

  let generatedPassword="";
  for(let i = 0; i < this.lenght; i++){
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  
 
}
