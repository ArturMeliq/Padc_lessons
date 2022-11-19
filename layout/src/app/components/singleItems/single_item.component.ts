import {Component} from "@angular/core";


@Component({
  selector: 'app-single_item',
  templateUrl: './single_item.component.html',
  styleUrls: ["./single_item.component.scss"]
})
export class Single_itemComponent {

  public items: Array<any> = [
    {
      "title": "Bosch MMB65G5M",
      "p": "60,500",
      "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/7/6701410.jpg"
    },
    {
      "title": "Bosch MMB65G5M",
      "p": "60,500",
      "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/7/9/797301.jpg"
    },
    {
      "title": "Bosch MMB65G5M",
      "p": "60,500",
      "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/5/3/537510-1_1.jpg"
    },
    {
      "title": "Bosch MMB65G5M",
      "p": "60,500",
      "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4318571.jpg"
    }
  ]

}
