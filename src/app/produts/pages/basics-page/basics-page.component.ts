import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower: string = 'henrry';
  public nameUpper: string = 'HENRRY';
  public fullName: string = 'HeNrRy CoRdOvIlLo';

  public today = new Date();
}
