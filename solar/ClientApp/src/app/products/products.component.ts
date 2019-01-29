import { Component } from '@angular/core';
import { ShareMenu } from '../BottomSheet/share.component'
import { MatBottomSheet } from '@angular/material';
import { Title, Meta } from '@angular/platform-browser';

interface Product {
  id: Number,
  Name: String,
  Description: String,
  img_src: String
}
@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  constructor(private bottomSheet: MatBottomSheet, private titleService: Title, private metaService: Meta) { }
  openBottomSheet(): void {
    this.bottomSheet.open(ShareMenu);
  }
  Products: Product[] = [
    { id: 1, Name: 'Roof Top Solar Panels', Description: 'Solar Panels of various sizes can be installed on Roof tops.', img_src: '../../assets/solar-roof-top-small.jpg' },
    { id: 2, Name: 'DC Table Fan', Description: 'a Boon for remote areas.', img_src: '../../assets/12V-DC-Table-Fan.jpg' },
    { id: 3, Name: 'DC LED Bulb', Description: 'Saving more energy!', img_src: '../../assets/dc-led-bulb.jpg' },
    { id: 4, Name: 'Solar Street lights', Description: 'Solar Street lights can be helpful in remote areas', img_src: '../../assets/Solar-Street-light.jpg' },
  ]
}
