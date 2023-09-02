import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','IronMan','She Hulk','Thor']
  public deletedHero?:string
  removeLastHero():void{
    this.deletedHero=this.heroNames.pop()

    
  }



}