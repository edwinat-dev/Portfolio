import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from '../services/email/email.service';
import { ContactForm } from '../dto/contactForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form! : FormGroup;
  formDto! : ContactForm


  constructor(private fomrBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.form = this.fomrBuilder.group(
      {
        firstname: "",
        lastname: "",
        email:"",
        phone:"",
        comments:""
      }
    )

    // this.form.valueChanges.subscribe(() => {
    //   console.log(this.form.get("comments")?.value);
    // });
  }

  submitContact(): void{
    console.log(this.form.value);
    this.formDto = this.form.value;
    this.emailService.sendMail(this.formDto);
  }

}
