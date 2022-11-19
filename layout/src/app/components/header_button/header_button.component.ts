import {Component} from "@angular/core";

@Component({
  selector: 'app-header-button',
  templateUrl: './header_button.component.html',
  styleUrls: ['./header_button.component.scss']
})

export class HeaderButtonComponent {
  public data: Array<string> = ["CATALOG", "TV, Audio, Video",
    "Computers, Notebooks, Tablets", "Phones and Communication",
    "Household Appliances", "Kitchen Appliances", "Air conditioning equipment"]
  public imagesDataUrl: Array<string> = [
    "https://www.zigzag.am/pub/media/categories/miele.svg",
    "https://www.zigzag.am/pub/media/categories/bosch.svg",
    "https://www.zigzag.am/pub/media/categories/k-array.svg"
  ]
  public air: Array<string> = [
    "Air Conditioners",
    "Fans",
    "Heating equipments",
    "Аir purifiers, Humidifiers"
  ]
  public airDara: Array<string> = [
    "Split systems",
    "Convector Heaters",
    "Fan Heaters",
    "Electric Fireplaces",
    "Infrared Heaters",
    "Infrared and convector heaters"
  ]

}
