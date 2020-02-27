import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get("http://localhost:3000/Produit");
  }

  deleteTasks(id){ 
    return this.http.delete("http://localhost:3000/Produit"+id);
  }
}
