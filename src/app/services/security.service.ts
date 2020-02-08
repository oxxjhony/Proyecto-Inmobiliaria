import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  name:string='';
  //variable que indica si el usuario esta logeado
  userLogged:boolean=false;

  constructor() { }
  
  //usaremos este metodo en el navar del master page para verificar si el usuario 
  //esta logeado o no
  isUserLogged(){
    return {logged:this.userLogged,name:this.name};
  }

  loginUser(username:String,pass:String){
    let user=null;
     if(username=="admin@gmail.com" && pass=="12345"){
       user= {name:"administrator", age:20, email:username}
       this.userLogged=true;
       this.name="administrator";
       
     }
     return user;
  }
}
