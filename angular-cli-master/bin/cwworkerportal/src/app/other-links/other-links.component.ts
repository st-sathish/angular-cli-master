import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-links',
  templateUrl: './other-links.component.html',
  styleUrls: ['./other-links.component.css']
})
export class OtherLinksComponent implements OnInit {
  public items =[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
