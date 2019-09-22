import { Component, OnInit, Input } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() cvDownloadUrl: string;
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '../../../assets/particles.json');
  }
}

