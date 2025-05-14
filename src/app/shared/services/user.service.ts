import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, Credentials, LoggedInUser} from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `/api/users`
const API_URL_AUTH = `/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  user$ = signal<LoggedInUser | null>(null)
  router = inject(Router);

  constructor() {
    const access_token = localStorage.getItem('access_token')
    if(access_token){
      const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser
      this.user$.set({
        username: decodedTokenSubject.username,
        email: decodedTokenSubject.email,
        roles: decodedTokenSubject.roles
      })
    }
    effect(() => {
      if (this.user$()){
        console.log('User Logged In', this.user$()?.username)
      }else {
        console.log('No user Logged In')
      }
    })
  }

  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }

  check_dublicate_email(email: string) {
    console.log('API URL:', API_URL);

    return this.http.get<{status: boolean, data:User}>(
      `${API_URL}/check_duplicate_email/${email}`
      
    )
  }

  loginUser(credentials: Credentials){
    return this.http.post<{status: boolean, data: string}> 
    ( `${API_URL_AUTH}/login`, credentials

    )

  }

  logoutUser(){
    this.user$.set(null)
    localStorage.removeItem('access_token')
    this.router.navigate(['login'])
  }

  isTokenExpired():boolean{
    const token = localStorage.getItem('access_token')
    if(!token) return true ;

    try{
      const decoded = jwtDecode(token)
      const exp = decoded.exp;
      const now = Math.floor(Date.now()/1000)
      if (exp) {
        return exp < now
      }else{
        return true
      } 
    } catch(err) {
      return true
    }
  }

  redirectToGoogleLogin(){
    const clientId = '571833137993-9sf8sh9pj3pi73np72bst5uoe1tn86tp.apps.googleusercontent.com'
    const redirect_Uri = 'http://localhost:3001/api/auth/google/callback'
    const scope = 'email profile'
    const responseType = 'code'
    const accessType = 'offline'

    const url = ` https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirect_Uri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`

    window.location.href = url;
  }
}

// https://accounts.google.com/o/oauth2/auth?client_id=571833137993-9sf8sh9pj3pi73np72bst5uoe1tn86tp.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline