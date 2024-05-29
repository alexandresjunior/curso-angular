import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ButtonComponent, CommonModule]
})
export class HeaderComponent {
  title: string = "Taskify";
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  checkRoute(route: string): boolean {
    return this.uiService.hasRoute(route);
  }
}
