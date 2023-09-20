import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss']
})
export class AttributesDirectivesComponent implements OnInit {
  public value: boolean = false;
  public height: string = '20px'
  public background: string = ''
  public name: string = ''

  public list: Array<{name: string}> = [
    {name: 'Caio'},
    {name: 'Alex'},
    {name: 'Bruno'},
    {name: 'Thiago'}
  ]

  public date: Date = new Date();

  constructor() {

  }

  ngOnInit(): void {

    setInterval(() => {
      this.value = !this.value

      if(this.height == '20px') {
        this.height = '50px';
        this.background = 'lightblue'
      } else {
        this.height = '20px'
        this.background = 'yellow'
      }
    }, 2000)


  }

  public save() {
    this.list.push({name: this.name})
    this.name = ''
  }


}
