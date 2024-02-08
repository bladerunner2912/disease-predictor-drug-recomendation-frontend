import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosis-result',
  standalone: true,
  imports: [],
  templateUrl: './diagnosis-result.component.html',
  styleUrl: './diagnosis-result.component.css',
})
export class DiagnosisResultComponent {
  @Input() diagnosisResult: any;
}
