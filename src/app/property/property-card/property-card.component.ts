import { Component, OnInit,Input } from '@angular/core';
import { IpropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input()
  property!: IpropertyBase;
  



  constructor() { }

  ngOnInit(): void {
  }

}
