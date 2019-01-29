import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface Ad {
  name: string,
  description: string,
  url: string,
  img_src?: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  WikilogoUrl = 'https://en.wikipedia.org/static/images/project-logos/enwiki.png'
  Ads: Ad[] = [
    {
      name: 'Solar energy',
      description: 'Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis.',
      url: 'https://en.wikipedia.org/wiki/Solar_energy',
      img_src: this.WikilogoUrl
    },
    {
      name: 'Renewable energy',
      description: 'Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat. Renewable energy often provides energy in four important areas: electricity generation, air and water heating/cooling, transportation, and rural (off-grid) energy services.',
      url: 'https://en.wikipedia.org/wiki/Renewable_energy',
      img_src: this.WikilogoUrl
    },
    {
      name: 'Sustainable energy',
      description: 'Sustainable energy is energy that is consumed at insignificant rates compared to its supply and with manageable collateral effects, especially environmental effects. Another common definition of sustainable energy is an energy system that serves the needs of the present without compromising the ability of future generations to meet their energy needs. Not all renewable energy is sustainable. While renewable energy is defined as energy sources that are naturally replenished on a human timescale, sustainable energy must not compromise the system in which it is adopted to the point of being unable to provide for future need. The organizing principle for sustainability is sustainable development, which includes the four interconnected domains: ecology, economics, politics and culture. Sustainability science is the study of sustainable development and environmental science.',
      url: 'https://en.wikipedia.org/wiki/Sustainable_energy',
      img_src: this.WikilogoUrl
    },
  ]
}
