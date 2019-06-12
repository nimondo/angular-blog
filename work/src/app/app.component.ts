import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    blogs = [
    {
      title: 'Mon premier post',
      content: 'Mon premier post loloa. kadi est malade ouf.',
	  loveits:0,
	  created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Mon premier post loloa. kadi est malade ouf.',
	  loveits:0,
	  created_at: new Date()
    },
    {
      title: 'Mon troisieme post',
      content: 'Mon premier post loloa. kadi est malade ouf.',
	  loveits:0,
	  created_at: new Date()
    }
  ];
}
