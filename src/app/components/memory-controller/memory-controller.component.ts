import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcGradientPipe } from "../../pipes/calc-gradient.pipe";

@Component({
    selector: 'app-memory-controller',
    standalone: true,
    templateUrl: './memory-controller.component.html',
    styleUrls: ['./memory-controller.component.scss'],
    imports: [CommonModule, CalcGradientPipe]
})
export class MemoryControllerComponent {
  @Input({ required: true }) memory!: WritableSignal<number>
  @Input({ required: true }) minVal!: number
  @Input({ required: true }) maxVal!: number

  updateMemo(e: Event) {
    this.memory.set(parseInt((e.target as HTMLInputElement).value))
  }

  scrollSlider(e: WheelEvent) {
    const slider = e.target as HTMLInputElement
    e.deltaY < 0 ? slider.stepUp() : slider.stepDown()
    slider.dispatchEvent(new Event("input"))
  }

  getPrecentage() {
    const precentage = 100 / (this.maxVal - this.minVal) * (this.memory() - this.minVal)
    return `linear-gradient(to right,red ${precentage}%, blue ${precentage}%)`
  }
}
