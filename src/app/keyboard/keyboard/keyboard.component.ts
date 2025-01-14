import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  texts: any;
  current: any="";
  iskeyboardvisible: boolean = false;
  showkeyboard() {
    this.iskeyboardvisible = !this.iskeyboardvisible;
  }
  sentence(s: string) {
    this.current = this.current + s;
  }
  isbuttonsvisible: boolean = true;
  shownewbuttons() {
    this.isbuttonsvisible = !this.isbuttonsvisible;
  }
  isthemelight: boolean = true;
  change: string = "🌞";
  themes() {
    this.isthemelight = !this.isthemelight;
    if (this.isthemelight == true) {
      this.change = "🌞";
    } else {
      this.change = "🌜";
    }

  }
  isemojeOn: boolean = false;
  emoje() {

  }
  backspace(b: any) {
    this.current = this.current - b;
    this.current = "";
    // this.current=this.current+"";
  }


}
