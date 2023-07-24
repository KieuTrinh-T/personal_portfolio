import { Component } from '@angular/core';

@Component({
  selector: 'app-homecredit',
  templateUrl: './homecredit.component.html',
  styleUrls: ['./homecredit.component.css']
})
export class HomecreditComponent {
  public visible = false;
  ViewProcess(){
    this.visible = !this.visible;
  }

}
