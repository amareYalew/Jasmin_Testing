import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
   public counter
  constructor() { 
    this.counter=1
  }

  ngOnInit(): void {
  }


  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }

}
