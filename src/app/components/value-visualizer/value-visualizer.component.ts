import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunTransformPipe } from 'src/app/pipes/run-transform.pipe';
import { ValueOptions, Visualizer, VisualizerOptions } from 'src/app/models/visualizer'

@Component({
  selector: 'app-value-visualizer',
  standalone: true,
  imports: [CommonModule, RunTransformPipe],
  templateUrl: './value-visualizer.component.html',
  styleUrls: ['./value-visualizer.component.scss']
})
export class ValueVisualizerComponent {
  @Input() value = 0
  @Input({ required: true }) visualizer!: Visualizer<ValueOptions>
  VisualizerOptions = VisualizerOptions
}
