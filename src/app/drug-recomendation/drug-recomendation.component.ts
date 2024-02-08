import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-drug-recomendation',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './drug-recomendation.component.html',
  styleUrl: './drug-recomendation.component.css',
})
export class DrugRecomendationComponent {
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  predictedDrug = '';

  formData: any = {
    disease: '',
    gender: '',
    age: null,
  };

  recomend() {
    const apiUrl = 'http://127.0.0.1:5000/recomend';
    console.log('works');
    if (
      this.formData.disease == '' ||
      this.formData.gender == '' ||
      this.formData.age == null
    ) {
      return;
    }
    console.log(this.formData);
    const s = this.http.post(`${apiUrl}`, this.formData);
    s.subscribe((e) => {
      var message: any = e;
      console.log(e);
      this.predictedDrug = message['status'];
      this.cdr.detectChanges();
    });
    // s.subscribe((e) => {
    //   console.log(e);
    // });
  }
}
