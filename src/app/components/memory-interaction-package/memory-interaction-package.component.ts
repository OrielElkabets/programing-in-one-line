import { Component, Input, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryCellComponent } from "../memory-cell/memory-cell.component";
import { ValueVisualizerComponent } from "../value-visualizer/value-visualizer.component";
import { ValueOptions, Visualizer } from 'src/app/models/visualizer';

@Component({
  selector: 'app-memory-interaction-package',
  standalone: true,
  templateUrl: './memory-interaction-package.component.html',
  styleUrls: ['./memory-interaction-package.component.scss'],
  imports: [CommonModule, MemoryCellComponent, ValueVisualizerComponent]
})
export class MemoryInteractionPackageComponent implements OnInit {
  @Input() memory!:WritableSignal<number>
  @Input({ required: true }) minVal!: number
  @Input({ required: true }) maxVal!: number
  @Input({ required: true }) visualizers!: Visualizer<ValueOptions>[]

  ngOnInit() {
    this.memory ??= signal(this.minVal)
  }

  updateMemo(e: Event, memoryCell: WritableSignal<number>) {
    memoryCell.set(parseInt((e.target as HTMLInputElement).value))
  }

  scrollSlider(e: WheelEvent) {
    const slider = e.target as HTMLInputElement
    e.deltaY < 0 ? slider.stepUp() : slider.stepDown()
    slider.dispatchEvent(new Event("input"))
  }
}
