import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clienteModel } from '../models/clienteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url_base: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  name:string='';
  //variable que indica si el usuario esta logeado
  userLogged:boolean=false;

  constructor(private http: HttpClient) { }
  
  //usaremos este metodo en el navar del master page para verificar si el usuario 
  //esta logeado o no
   isUserLogged(){
     return {logged:this.userLogged,name:this.name};
   }

   loginUser(email:String,password:String):Observable<clienteModel>{
      return this.http.post<clienteModel>(`${url_base}Users/login?include=user`,
      {
        email,
        password
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      })
    }


   crearUsuario(user:clienteModel): Observable<clienteModel> {
    return this.http.post<clienteModel>(`${url_base}Users`,user,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  saveLoginInfo(user:clienteModel){
    //user.isLogged=True;
    //this.userInfo.next(user);
    localStorage.setItem("activeUser",JSON.stringify(user));
  }
<<<<<<< HEAD
  
  registerUser(firstname:String,lastname:String,email:String,password:String,telefono:String,direccion:String){
    this.userLogged=true;

  }
=======


>>>>>>> security service and logged

}
 