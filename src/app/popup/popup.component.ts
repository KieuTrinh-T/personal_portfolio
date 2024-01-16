import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from '../interfaces/projects';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IProject) { }

  breakText(text: string): string {
    if (text && typeof text === 'string') {
      return text.replace(/<br\s*\/?>/g, '<br>');
    }
    return text;
  }
}
