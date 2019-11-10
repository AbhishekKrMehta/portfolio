import { Component } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent {

  myWorksList = [
    {
      title: 'My portfolio site',
      imageLink: '../../../assets/my_works_1.jpg',
      websiteLink: 'http://abhishekmehta.co/',
      description: 'You are currently viewing it :P Built using the latest version of Angular(v8) and is made completely responsive using flex layout and media query.',
      technology: 'Technologies used : HTML5, CSS3, JavaScript/TypeScript, Angular 8, Firebase, Bootstrap 4'
    },
    {
      title: 'Cuisine',
      imageLink: '../../../assets/my_works_2.jpg',
      websiteLink: 'https://abhishekkrmehta.github.io/cuisine/',
      description: 'This application uses a master-detail interface that lets you browse throught a list a recipes and show you the details upon selecting one. It is made responsive using media queries and styled using Material design from Google.',
      technology: 'Technologies used : HTML, CSS, JavaScript/TypeScript, Angular 8, Angular Material, RxJS'
    },
    {
      title: 'Stay updated!',
      imageLink: '../../../assets/my_works_3.jpg',
      websiteLink: 'https://abhishekkrmehta.github.io/stay-updated/',
      description: 'Stay Updated is a light website, built using Bootstrap Material design, which dynamically displays latest news from all around the globe. The user can also filter the results based on categories.',
      technology: 'Technologies used : HTML, CSS, JavaScript/TypeScript, Angular 6, Bootstrap 4'
    },
    {
      title: 'Bookshelf',
      imageLink: '../../../assets/my_works_4.jpg',
      websiteLink: 'https://abhishekkrmehta.github.io/bookshelf/books',
      description: 'It uses Google\'s Material Design Components. You can browse through a whole range of books and view their details. It also enables you to purchase your desired selection from Google Books.',
      technology: 'Technologies used : HTML5, CSS3, JavaScript/TypeScript, Angular 6, Angular Material, Karma, Jasmine'

    }
  ];
}
