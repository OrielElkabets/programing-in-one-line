import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryCellComponent } from "./components/memory-cell/memory-cell.component";
import { FormsModule } from '@angular/forms';
import { MemoryInteractionPackageComponent } from "./components/memory-interaction-package/memory-interaction-package.component";
import { Visualizers } from './models/visualizer';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, MemoryCellComponent, FormsModule, MemoryInteractionPackageComponent]
})
export class AppComponent {
  title = 'programingInOneLine';

  Visualizers = Visualizers

  readonly red = signal(0)
  readonly green = signal(0)
  readonly blue = signal(0)
  readonly resColor = computed(() => `rgb(${this.red()},${this.green()},${this.blue()})`)
}
