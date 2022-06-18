import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form! : FormGroup;

  constructor(private fomrBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fomrBuilder.group(
      {
        email: ""
      }
    )

    this.form.valueChanges.subscribe(() => {
      console.log(this.form.get("email")?.value);
    });
  }

  


}
