import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from './interfaces/projects';
import { ISkill } from './interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  constructor(private _http: HttpClient) { }
  getProjects(): Observable<IProject[]> {
    return this._http.get<IProject[]>('assets/data/projects.json');
  }

  getSkills(): Observable<ISkill[]> {
    return this._http.get<ISkill[]>('assets/data/skills.json');
  }
}
