import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true
})
export class MenuComponent {
  constructor(private router: Router, private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
