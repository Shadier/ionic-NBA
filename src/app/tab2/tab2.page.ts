import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  brightnessValue = 0.8;

  constructor(private brightness: Brightness) {}
  
  change(){
    this.brightness.setBrightness(this.brightnessValue);
  }
}
