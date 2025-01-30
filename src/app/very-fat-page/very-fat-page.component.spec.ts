import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-very-fat-page',
  templateUrl: './very-fat-page.component.html',
  styleUrls: ['./very-fat-page.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MenuComponent]
})
export class VeryFatPageComponent implements OnInit {
  messages: string[] = [];
  inputMessage: string = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    setTimeout(() => {
      // Simulate loading
    }, 2000);
  }

  sendMessage(): void {
    if (this.isEvenNumber(this.inputMessage)) {
      this.toastr.error('Четное значение');
    } else {
      this.messages.push(this.reverseString(this.inputMessage));
    }
    this.inputMessage = '';
  }

  isEvenNumber(value: string): boolean {
    const num = parseInt(value, 10);
    return !isNaN(num) && num % 2 === 0;
  }

  reverseString(str: string): string {
    return str.split('').reverse().join('');
  }
}
