import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbar, MatButton, RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
