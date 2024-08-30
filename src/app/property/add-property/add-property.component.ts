import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IpropertyBase } from 'src/app/model/IPropertyBase';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  // for tab start
  isLinear = false;

  propertyForm!: FormGroup;
  imageFile: File | null = null;
  imageError: string | null = null;
 

 
  // for tab end
  constructor(private _formBuilder:FormBuilder ,private router:Router, private userService: UserService) { }

  ngOnInit(): void {

   
// for tab start
    this.propertyForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      sellRent: [1, Validators.required],
      price: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      BHK: [1, Validators.required],
      PType: ['', Validators.required],
      Ftype: ['', Validators.required],
      carpetArea: [null, Validators.required],
      builtArea: [null, Validators.required],
      image: [''],
      discription: ['', Validators.required],
      
    });
  
    // for tab end
  }
 
  
  get sellRent(){
    return this.propertyForm.controls.sellRent as FormControl;
  }
  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.size > 2000000) { // 2MB limit
        this.imageError = 'Image size should not exceed 2MB.';
        this.imageFile = null;
        return;
      }
      this.imageError = null;
      this.imageFile = file;

      // Update the form control with the file object (though it's not directly used)
      this.propertyForm.patchValue({ image: file });
    } else {
      this.imageError = 'Please select an image.';
      this.imageFile = null;
    }
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      // Create the new property object
      const newProperty: IpropertyBase = {
          id: 0, // Placeholder, will be set by UserService
          name: this.propertyForm.value.name,
          sellRent: +this.propertyForm.value.sellRent,  // Convert to number
          price: this.propertyForm.value.price,
          discription: this.propertyForm.value.discription,
          image: this.imageFile ? this.imageFile.name : '', // Save image name or path
          BHK: this.propertyForm.value.BHK,
          PType: this.propertyForm.value.PType,
          Ftype: this.propertyForm.value.Ftype,
          carpetArea: this.propertyForm.value.carpetArea,
          builtArea: this.propertyForm.value.builtArea
      };

      // Use the UserService to add the property (this will set the ID)
      this.userService.addUser(newProperty);

      // Navigate to the home page after saving
      this.router.navigate(['/']);
  } else {
      console.log('Form is invalid');
  }
  }

}
