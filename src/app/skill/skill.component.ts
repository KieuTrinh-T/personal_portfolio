import { Component } from '@angular/core';
import { ISkill } from '../interfaces/skills';
import { ReadJsonService } from '../read-json.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  public skills: ISkill[] = [];
  constructor(private _service: ReadJsonService) {
    this._service.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: error => console.error(error)
    });
  }

}
