import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.css'],
})
export class QuestionnarieComponent implements OnInit {
  jsonFormDataDetails: any;
  jsonFormDataAddress: any;

  detailsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    comments: new FormControl(''),
    greeTerms: new FormControl(false),
  });

  addressForm = new FormGroup({
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl('Uruguay'),
    zipcode: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  toggleCheckbox() {
    this.detailsForm.patchValue({
      greeTerms: !this.detailsForm.get('greeTerms')?.value,
    });
  }

  ngOnInit() {
    this.http
      .get('/assets/questionanarie/user-details.json')
      .subscribe((FormData: any) => {
        this.jsonFormDataDetails = FormData;
        console.log(FormData);
      });

    this.http
      .get('/assets/questionanarie/user-adress.json')
      .subscribe((FormData: any) => {
        this.jsonFormDataAddress = FormData;
      });
  }

  submitDetailsForm() {
    console.log(this.detailsForm.value);
  }
  onSubmit() {
    console.log(this.addressForm.value);
  }
}
