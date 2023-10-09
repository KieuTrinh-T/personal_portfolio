import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  projects: any[] | undefined;
  labels:any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/projects.json').subscribe(data => {
      this.projects = data;
      this.labels = Array.from(new Set(this.projects?.map(item => item.label)));
    });
  }
  breakText(text: string): string {
    if (text && typeof text === 'string') {
      return text.replace(/<br\s*\/?>/g, '<br>');
    }
    return text;
  }

}
