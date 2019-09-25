import { Component } from '@angular/core';

@Component({
  selector: 'app-social-profiles',
  templateUrl: './social-profiles.component.html',
  styleUrls: ['./social-profiles.component.scss']
})
export class SocialProfilesComponent {

  socialProfiles = [
    {
      title: 'Mobile',
      href: 'tel:+31682304814',
      iconClass: 'fas fa-mobile-alt',
      value: '(+31) 682304814'
    },
    {
      title: 'Email',
      href: 'mailto:abhishek.kr.mehta1@gmail.com',
      iconClass: 'fas fa-envelope',
      value: 'abhishek.kr.mehta1@gmail.com'
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhishekkumarmehta',
      iconClass: 'fab fa-linkedin',
      value: 'linkedin.com/in/abhishekkumarmehta'
    },
    {
      title: 'GitHub',
      href: 'https://github.com/AbhishekKrMehta',
      iconClass: 'fab fa-github',
      value: 'github.com/AbhishekKrMehta'
    },
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/abhishek.kr.mehta1',
      iconClass: 'fab fa-facebook',
      value: 'fb.com/abhishek.kr.mehta1'
    }
  ];
}
