import {Component} from "@angular/core";

@Component({
  selector: 'app-banner',
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})

export class BannerComponent {
  public bannerImageUrls:Array<string> = [
    "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/k/i/kitchenaid_960x400_en.jpg"
  ]
  public otherImageUrls:Array<string> = [
    "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/i/p/iphone-14_03.10_480x300_en.jpg",
    "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/l/e/lexon_480x300_en_2.jpg"
  ]
}
