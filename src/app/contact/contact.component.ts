import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email/email.service';
import { ContactForm } from '../dto/contactForm';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form! : FormGroup;
  formDto! : ContactForm;
  alertStatus : boolean = false;
  alertMessage: string = "";


  constructor(private fomrBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.form = this.fomrBuilder.group(
      {
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        phone:new FormControl(''),
        comments:new FormControl('')
      }
      
    )
    
    // this.form.valueChanges.subscribe(() => {
    //   console.log(this.form.get("comments")?.value);
    // });
  }

  async submitContact(): Promise<void>{
    console.log(this.form.value);
    this.formDto = this.form.value;
    var result = (await this.emailService.sendMail(this.formDto))
    .subscribe(
      (data) => {
        console.log("API Response: ",data);
        if(data.success){
          this.alertMessage = "Thank you. I'll get back to you ASAP";
          this.alertStatus = true;
        }
      }
    )

    console.log(result);

    

    // if(result){
    //   alert("Success");
    // }
    // else{
    //   alert("Failed")
    // }
  }

  dismissAlert(sttus: boolean): void{
    this.alertStatus = sttus;
  }

  

}
