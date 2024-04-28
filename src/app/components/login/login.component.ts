import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}
  
  login(username: string, password: string){
    if (username === 'admin' && password === '123') {
      this.router.navigate(['/home']);
    } else {
      // Autenticación fallida, mostrar mensaje de error
      alert('Usuario o contraseña incorrectos');
    }
  }
}
