import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIFunctionsService<T>{

  constructor(public http : HttpClient ,@Inject(String) public url : string) { }
  get():Observable<T>{
    return this.http.get<T>(this.url);
  }
  getById(id):Observable<T>{
    return this.http.get<T>(this.url+`/${id}`);
  }
  delete(id):Observable<T>{
    return this.http.delete<T>(this.url+`/${id}`);
  }
  post(model):Observable<T>{
    return this.http.post<T>(this.url,model);
  }
  put(model,id):Observable<T>{
    return this.http.put<T>(this.url+`/${id}`,model);
  }
}
