import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  postForm(formData){
    return this.http.post('', JSON.stringify(formData));
  }

}
