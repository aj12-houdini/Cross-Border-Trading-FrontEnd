import { Component } from '@angular/core';
import {GetdummyService} from "./getdummy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testhttpclient';
  email = "aayushjuyal12@gmail.com";
  newdata = "";

  constructor(private getDummyService: GetdummyService) {
  }
  showData(){
    this.getDummyService.getData().subscribe((resdata) => this.newdata = resdata.username)
  }

}
