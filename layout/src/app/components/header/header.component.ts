import {Component} from "@angular/core"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ["./header.component.scss"]
})

export class HeaderComponent {
  public data: Array<any> = ["About us", "Stores", "Services", "Special offers", "Gift card", "Credit"]
}
