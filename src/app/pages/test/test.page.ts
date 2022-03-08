import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
    text = 'default starting text';
  onChangeText() {
    this.text = 'change it!';
  }
   MenuExample() {

   }
   constructor(private menu: MenuController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
  // constructor() { }

  // ngOnInit() {
  // }

// }
