import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpropertyBase } from '../model/IPropertyBase';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private dataUrl = 'data/property.json';  // Path to your JSON file

  constructor(private http: HttpClient) { }
  initializeProperties() {
    const storedProperties = localStorage.getItem('Properties');
    if (!storedProperties) {
      this.http.get<IpropertyBase[]>(this.dataUrl).subscribe(data => {
        localStorage.setItem('Properties', JSON.stringify(data));
        console.log('Initialized Properties from JSON:', data); // Debugging line
      });
    }
  }

  getPropertyById(id: number): Observable<IpropertyBase | undefined> {
    const properties = JSON.parse(localStorage.getItem('Properties') || '[]');
    const property = properties.find((p: IpropertyBase) => p.id === id);
    return of(property);  // Return as an Observable for consistency
  }

  getdata(): Observable<IpropertyBase[]> {
    const properties = JSON.parse(localStorage.getItem('Properties') || '[]');
    console.log('Properties from Local Storage:', properties); // Debugging: Check properties fetched from localStorage
    
    // No sorting needed here as we're filtering based on sellRent in the component
    return of(properties);  // Return as an Observable
  }
  
}
