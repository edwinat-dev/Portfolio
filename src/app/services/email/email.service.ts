import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ContactForm } from 'src/app/dto/contactForm';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = " https://cg2fh175l0.execute-api.ap-south-1.amazonaws.com/dev";

  async sendMail(contactForm: ContactForm): Promise<Observable<any>>{

    var requestHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-api-key' : 'pDUOeaTEBg5ugZSpQyy6C8tEzEIJ3OGx14SOy8Xp'
    });

    var body = {
      "firstName": contactForm.firstname,
      "lastName": contactForm.lastname,
      "email": contactForm.email,
      "phone": contactForm.phone,
      "comments": contactForm.comments
    };

    return this.http.post(this.baseUrl+"/contactform", body, {'headers':requestHeader});
  }
}
