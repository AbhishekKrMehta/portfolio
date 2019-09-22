import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cvDownloadUrl: string;
  constructor() { }

  ngOnInit() {
    window.onscroll = () => this.displayScrollProgress();
  }

  toggleMenuOnMobile() {
    const x = document.getElementById('myNavigationBar');
    if (x.className === 'navigationBar') {
      x.className += ' responsive';
    } else {
      x.className = 'navigationBar';
    }
  }

  displayScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }


}
