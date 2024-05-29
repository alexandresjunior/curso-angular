import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear()

  constructor(private uiService: UiService) { }

  checkRoute(route: string): boolean {
    return this.uiService.hasRoute(route);
  }
}
