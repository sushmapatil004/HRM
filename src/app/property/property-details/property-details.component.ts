import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/Service/housing.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId!: number;
  property: IpropertyBase | undefined;
  errorMessage: string = '';
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(private route:ActivatedRoute,private _formBuilder: FormBuilder ,private housingService:HousingService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    const id = +this.route.snapshot.params['id'];
    this.housingService.getPropertyById(id).subscribe(data => {
      this.property = data;
      console.log('Property Detail:', this.property);
    });
  }
  

}
