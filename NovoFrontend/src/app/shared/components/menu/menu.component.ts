import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isHomeOn: boolean = true;
  public isClientOn: boolean = false

  ngOnInit(): void {
    const page = localStorage.getItem('page');
    console.log(page);

    if (page === 'home') {
      this.home()
    } else if (page === 'clients') {
      this.client();
    } else {
      this.isHomeOn = false;
      this.isClientOn = true;
      this.router.navigate([`/${page}`]);
    };
  }

  constructor(private router: Router) { }

  public home(): void {
    this.isHomeOn = true;
    this.isClientOn = false;
    localStorage.setItem('page', 'home');
  }

  public client(): void {
    this.router.navigate(['/clients']);
    this.isHomeOn = false;
    this.isClientOn = true;
    localStorage.setItem('page', 'clients');
  }
}
