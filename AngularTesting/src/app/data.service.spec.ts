import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing'

import { DataService } from './data.service';
import { ɵConsole } from '@angular/core';

describe('DataService', () => {
  let service: DataService;
  let httpMock:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DataService]
    });
    // service = TestBed.get(DataService); // optional 

    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
  httpMock.verify()
  })
  

  it('should retrieve posts from the API via GET', () => {
    const dummyPosts: any[] = [
      {userId: '1', id: 1, body: 'Hello World', title: 'Testing Angular'},
    { userId: '2', id: 2, body: 'Hello World2', title: 'Testing Angular2' }
    ];

    service.getPost().subscribe(posts => {
      expect(posts.length).toBe(2);  // checking the length 
      expect(posts).toEqual(dummyPosts); // compering post data to demy data
    })
    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`)  // checking our URL correct 
    
    expect(request.request.method).toBe('GET'); // checking our Method correct
    request.flush(dummyPosts); // Resolve the request by returning a bodu plus additional 
                               // HTTP information(such as response headers)if provided Both successful 
                  //an unsuccessful responses can be deliverd Via flash()
  });
});
