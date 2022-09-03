import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length : number = 0;
  v:any;

  constructor()
  {

  }
  onButtonClick()
  {
    const numbers = '1234567';
    const letters = 'abcdefghijklmnopqurstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters)
    {
      validChars += letters;
    }
    if (this.includeNumbers)
    {
      validChars += numbers;
    }
    if(this.includeSymbols)
    {
      validChars +=symbols;
    }

    let generatePassword = '';
    for(let i = 0; i < this.length; i++)
    {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }

  getPassword()
  {
    return this.password;
  }

  onChangeUseLetters()
  {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers()
  {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols()
  {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event  : Event)
  {
    this.v = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(this.v);
    if(!isNaN(parsedValue))
    {
      this.length = parsedValue;
      
    }
    console.log('enter number');
  }
}
