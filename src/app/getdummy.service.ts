import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userdata} from "./userdata";
import {Userdetail} from "./userdetail";

@Injectable({
  providedIn: 'root'
})
export class GetdummyService {
  url = "http://localhost:8091/api/0.1/getdummy"
  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get<Userdetail>(this.url)
  }

}
