import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
interface Book {
  Name: string,
  Author: string,
  Img: string,
  Summary?: string,
  Price: string,
  Href: string,
}
@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  Books: Book[] = [
    {
      Name: 'Solar Photovoltaic Technology and Systems',
      Author: 'Chetan Singh Solanki',
      Img: '//images-na.ssl-images-amazon.com/images/I/51MKUrZZcCL.jpg',
      Summary: 'A Manual for Technicians, Trainers and Engineers',
      Price: 'Starts from ₹ 365 (₹ 289.93 for Kindle)',
      Href: '//amzn.to/2EEZqp1'
    },
    {
      Name: 'Solar Photovoltaics',
      Author: 'Chetan Singh Solanki',
      Img: '//images-na.ssl-images-amazon.com/images/I/51b2W%2BhBGhL.jpg',
      Summary: 'Fundamentals, Technologies and Applications',
      Price: 'Starts from ₹ 399 (₹ 303.73 for Kindle)',
      Href: '//amzn.to/2SfuRZZ'
    },
    {
      Name: 'Solar Power Demystified',
      Author: 'Lacho Pop MSE and Dimi Avram MSE',
      Img: '//images-eu.ssl-images-amazon.com/images/I/51bqHK3GjZL.jpg',
      Summary: 'The Beginners Guide To Solar Power, Energy Independence And Lower Bills',
      Price: '₹ 0 for Kindle',
      Href: '//amzn.to/2EHyHs2'
    },
    {
      Name: 'Solar Energy',
      Author: 'Arno Smets, Klaus Jäger, Olindo Isabella, René van Swaaij, and Miro Zeman',
      Img: '//images-eu.ssl-images-amazon.com/images/I/51HFiMevaiL.jpg',
      Summary: 'The physics and engineering of photovoltaic conversion, technologies and systems',
      Price: 'Starts from ₹ 2,295 (₹ 0 for Kindle)',
      Href: '//amzn.to/2yuvoi2'
    },
  ]
}
