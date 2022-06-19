import { Injectable } from '@angular/core';
import { ContactForm } from 'src/app/dto/contactForm';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendMail(contactForm: ContactForm): void{
    console.log("From Service: ", contactForm)
  }
}
