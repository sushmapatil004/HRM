import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/Service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent: number = 1;
  properties: IpropertyBase[] = [];
  name='';
  searchName='';
  sorybyparam='';




  constructor(private route: ActivatedRoute,private housingService:HousingService) { }

  ngOnInit(): void {
       // Retrieve the sellRent value from route data
   this.route.data.subscribe(data => {
    this.sellRent = data['sellRent'];
    console.log('Route sellRent:', this.sellRent); // Debugging: Check the received sellRent value
    this.loadProperties();
  });
  }
  onNameFilter(){
    this.searchName=this.name;
      }
      onNameFilterClear(){
    this.name='';
    this.searchName='';
    
      }
      loadProperties(): void {
        this.housingService.getdata().subscribe(data => {
          console.log('All Properties:', data); // Debugging: Check all properties fetched from service
          // Filter the properties based on sellRent value
          this.properties = data.filter(property => property.sellRent === this.sellRent);
          console.log('Filtered Properties:', this.properties); // Debugging: Check filtered properties
        });
      
      }

}
