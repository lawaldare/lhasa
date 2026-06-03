import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { createLhasa } from 'lhasa-ligand-builder-plainjs';

@Component({
  selector: 'lhasa-app',
  imports: [CommonModule],
  template: `<section id="lhasa-root"></section>`,
  styles: [
    `
      :host ::ng-deep #lhasa-root {
        border: 2px solid red;
        .lhasa_editor {
          width: 100% !important;

          .editor_canvas_container {
            min-width: 98% !important;

            svg {
              width: 100% !important;
            }
          }
        }
      }
    `,
  ],
})
export class Lhasa implements AfterViewInit {
  ngAfterViewInit(): void {
    const lhasa = createLhasa(document.getElementById('lhasa-root')!, {
      assetsBaseUrl: 'assets/lhasa-assets/',
    });
  }
}
