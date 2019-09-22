import { Component, OnInit } from '@angular/core';

interface ExperienceType {
  project: string;
  duration: string;
  description: string;
  technology: string;
  work: string[];
}

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent implements OnInit {

  // todo: fill works array
  myExperienceList: ExperienceType[] = [
    {
      project: 'Project 1',
      duration: '(December 2016 - July 2017)',
      description: 'Involved in a project for a banking client which comprised of enhancement of UI with regard to styling and verification of code for cross browser compatibility, along with addition of functionalities to the existing application.',
      technology: 'HTML, CSS, JavaScript, Bootstrap, jQuery',
      work: []
    },
    {
      project: 'Project 2',
      duration: '(August 2017 - August 2018)',
      description: 'Part of the core team involved in developing customer relationship management system for a networking major client. It comprised of working with REST APIs, validating forms, implementing Material Design and making the application responsive, among other tasks.',
      technology: ' Technologies used : HTML, CSS, TypeScript, Angular 4, Bootstrap, Angular Material',
      work: []
    },
    {
      project: 'Project 3',
      duration: '(September 2018 - Present)',
      description: 'Deeply involved in the primary customer facing application for one of the leading European Aviation Company. Current app is facilitating all the check-ins and has logs about 1 million unique sessions each day.',
      technology: 'Technologies used : HTML5, CSS3, JavaScript/TypeScript, Angular 6, Angular Material, Karma, Jasmine',
      work: [
        'Used nested reactive forms for complex frontend validation of user inputted data.',
        'Each and every functionality unit tested using karma and jasmine',
        'Followed agile way of working'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
