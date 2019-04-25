import { Component, OnInit } from '@angular/core';

/// AGREGAR AUTOSERVICE 
import  {AuthService} from "../../servicios/auth.service";

///SE AGREGA 
import{Router}  from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;


  constructor(private authService:AuthService , public router:Router ) { } 

  ngOnInit() {
  }

   onSummitlogin ()

  {
this.authService.login(this.email , this.password).then(res=>{ 

this.router.navigate(['/home'])
 

}).catch(err =>alert('Los datos son incorrectos o no existe el usuario'))
console.log('vuelva a intentarlo')

//AGREGADO

}
}


