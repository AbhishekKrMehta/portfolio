import { Component, OnInit } from '@angular/core';

interface Skills {
  technology: string;
  proficiency: string;
}
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  primarySkills: Skills[] = [
    {
      technology: 'ANGULAR',
      proficiency: '9/10'
    },
    {
      technology: 'HTML5',
      proficiency: '9/10'
    },
    {
      technology: 'CSS3',
      proficiency: '9/10'
    },
    {
      technology: 'JAVASCRIPT',
      proficiency: '8/10'
    },
    {
      technology: 'GRAPHQL',
      proficiency: '7/10'
    },
    {
      technology: 'BOOTSTRAP',
      proficiency: '9/10'
    }
  ];

  otherSkills = [
    'Firebase',
    'TypeScript',
    'Angular Material',
    'Karma / Jasmine',
    'Responsive Design',
    'Git and GitHub',
    'jQuery',
    'Flexbox',
    'SASS / SCSS',
    'Photoshop'
  ];

  constructor() { }

  ngOnInit() { }
}
