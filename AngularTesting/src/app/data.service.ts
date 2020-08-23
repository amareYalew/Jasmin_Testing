import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  

  getPost() {
  return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
}

}
