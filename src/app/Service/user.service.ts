import { Injectable } from '@angular/core';
import { IpropertyBase } from '../model/IPropertyBase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }



  addUser(property: IpropertyBase) {
    let properties: IpropertyBase[] = [];

    // Retrieve properties from localStorage if available
    const storedProperties = localStorage.getItem('Properties');
    if (storedProperties) {
        properties = JSON.parse(storedProperties);
    }

    // Get the last used ID from localStorage or start from 1
    let lastId = localStorage.getItem('lastId');
    let newId = 1; // Default starting ID

    if (lastId) {
        newId = +lastId + 1; // Increment the last ID
    }

    // Assign the new ID to the property
    property.id = newId;

    // Update the last used ID in localStorage
    localStorage.setItem('lastId', newId.toString());

    // Add the new property to the array
    properties = [property, ...properties];

    // Store the updated properties array back in localStorage
    localStorage.setItem('Properties', JSON.stringify(properties));

    console.log('Stored Properties:', JSON.parse(localStorage.getItem('Properties') || '[]')); // Debugging line
}
}
