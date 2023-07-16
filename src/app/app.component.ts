import { Component, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryCellComponent } from "./components/memory-cell/memory-cell.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MemoryCellComponent, FormsModule]
})
export class AppComponent {
  title = 'programingInOneLine';

  readonly memoryCells = [signal(0), signal(33), signal(0), signal(0), signal(0)]
  readonly charCode = computed(() => String.fromCharCode(this.memoryCells[1]()))
  readonly redColor = computed(() => `rgb(${this.memoryCells[2]()},0,0)`)
  readonly greenColor = computed(() => `rgb(0,${this.memoryCells[3]()},0)`)
  readonly blueColor = computed(() => `rgb(0,0,${this.memoryCells[4]()})`)
  readonly resColor = computed(() => `rgb(${this.memoryCells[2]()},${this.memoryCells[3]()},${this.memoryCells[4]()})`)

  updateMemo(e: Event, memoryCell: WritableSignal<number>) {
    memoryCell.set(parseInt((e.target as HTMLInputElement).value))
  }
}
