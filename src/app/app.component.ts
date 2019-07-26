import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selected_phones: { name: string; id: number; selected: boolean; }[];
  name:string;
  searchText:string = "";
  selected_count:number = 0;

  phones = [
    {
      name:'Iphone',
      id:1,
      selected:false
    },
    {
      name:'Samsung',
      id:2,
      selected:false
    },
    {
      name:'Sony',
      id:3,
      selected:false
    },
    {
      name:'Blackberry',
      id:4,
      selected:false
    },
    {
      name:'HTC',
      id:5,
      selected:false
    },
    {
      name:'Nokia',
      id:6,
      selected:true
    },
    {
      name:'Siemens',
      id:7,
      selected:false
    }
  ]

  getSelected(){
    this.selected_phones =  this.phones.filter( s => {
      return s.selected;
    });
    this.selected_count = this.selected_phones.length;
  }

  clearSelection(){
    this.searchText = "";
    this.phones =  this.phones.filter( g => {
      g.selected = false;
      return true;
    });
    this.getSelected();
  }

  deletePhone(id:number){
    this.searchText = "";
    this.phones =  this.phones.filter( g => {
      if(g.id == id)
        g.selected = false;

      return true;
    });
    this.getSelected();
  }

  clearFilter(){
    this.searchText = "";
  }

  constructor() {
    this.name = `Angular! v${VERSION.full}`;
    this.getSelected();
  }
}
