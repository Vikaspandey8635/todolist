import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' MY ToDO-LIST ';
  mylist: any[]=[];
  addTask(item:any) {
  this.mylist.push({ id:this.mylist.length, name:item })
  }
  deletetask(id: number) {
    this.mylist = this.mylist.filter(item =>item.id!== id);
   
  }
}
