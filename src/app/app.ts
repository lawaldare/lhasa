import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createLhasa } from 'lhasa-ligand-builder-plainjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    const lhasa = createLhasa(document.getElementById('lhasa-root')!, {
      assetsBaseUrl: 'assets/lhasa-assets/',
    });
  }
}
