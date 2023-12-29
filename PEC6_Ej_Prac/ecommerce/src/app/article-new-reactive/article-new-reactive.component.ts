import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MyValidations } from '../utils/my-validations';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fn: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fn.group({
      name: ['', [Validators.required, MyValidations.nameArticleValidator]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      urlImg: ['', [Validators.required, Validators.pattern("^(https?):\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})$")]],
      isOnSale: [false]
    });
  }

  onSubmit(): void {
    console.log('Submited form', this.myForm.value);
  }


  //getters
  get name() {
    return this.myForm.get('name');
  }

  get price() {
    return this.myForm.get('price');
  }

  get urlImg() {
    return this.myForm.get('urlImg');
  }

  get isOnSale() {
    return this.myForm.get('isOnSale');
  }
}