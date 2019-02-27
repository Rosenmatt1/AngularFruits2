import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'fruit-loop',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    this.loadFruits()
  }

  fruits:{};

  loadFruits() {
    this.data.getFruits().subscribe(payload => {
      this.fruits = payload
      console.log(payload)
    })
  }

}
