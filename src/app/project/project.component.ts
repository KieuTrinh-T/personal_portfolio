import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from '../read-json.service';
import { IProject } from '../interfaces/projects';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: IProject[] = [];
  labels: string[] = [];

  constructor(private _service: ReadJsonService, public dialog: MatDialog) {
    this._service.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.projects.forEach(p => p.IsVisible = true);
        this.labels = Array.from(new Set(this.projects.map(p => p.Label)));
      },
      error: error => console.error(error)
    });
  }

  openPersonalProjectDialog(project: IProject): void {
    this.dialog.open(PopupComponent, {
      width: '80%',
      data: project
    });
  }

  onChipChange(event: MatChipListboxChange): void {
    const selectedLabel = event.value;
    console.log(selectedLabel);
    if (selectedLabel === 'All' || selectedLabel === undefined) {
      this.projects.forEach(p => p.IsVisible = true);
    }
    else {
      this.projects.forEach(p => p.IsVisible = p.Label === selectedLabel);
    }
  }
}
