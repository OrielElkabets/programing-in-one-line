import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memory-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memory-cell.component.html',
  styleUrls: ['./memory-cell.component.scss']
})
export class MemoryCellComponent{
  @Input({ required: true }) cellValue = signal(0)
  binValue = computed(() => this.cellValue().toString(2).padStart(8,'0').split('').splice(-8,8))
  overflow = computed(() => this.cellValue() < 0 || this.cellValue() > 255)
}
