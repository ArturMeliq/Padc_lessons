import {Component} from "@angular/core"
import {IPerson} from "../tipes/type";

@Component({
  selector: 'people-change',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class PeopleChangeComponent {
  name!: string
  id: number = 3
  colors: Array<string> = ['red', 'aqua', 'salmon', 'blue', 'crimson', 'yellow', 'green', 'grey']
  itemColor: string = 'black'

  public people: Array<IPerson> = [
    {
      id: 1,
      name: "Karen",
      color: this.itemColor
    }, {
      id: 2,
      name: "Valod",
      color: this.itemColor
    }
  ]

  handleAddClick(e: MouseEvent) {
    if (this.name) {
      this.people.push({
        id: this.id,
        name: this.name,
        color: this.itemColor
      })
      this.id++;
      this.name = ''
    }
  }

  handleChangeColorClick(e: MouseEvent): string {
    const items: string[] = []
    if (items.length === this.colors.length) {
      this.itemColor = 'black'
      return this.itemColor;
    }
    let index = Math.floor(Math.random() * this.colors.length);
    while (items.includes(this.colors[index])) {
      index = Math.floor(Math.random() * this.colors.length);
    }
    items.push(this.colors[index]);

    this.itemColor = this.colors[index]
    this.people.find((item) => {
      // @ts-ignore
      if (+item.id === +e.target.id) {
        item.color =this.itemColor
      }
    })
    return this.itemColor;
  }

  handleDeleteClick(e: MouseEvent) {
    //@ts-ignore
    this.people = this.people.filter((item) => +item.id !== +e.target.id)
  }
}
