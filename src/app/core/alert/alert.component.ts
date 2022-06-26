import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges {

  @Input() status : boolean = false;
  @Input() alertMessage : string = "";
  @Output() newItemEvent = new EventEmitter<boolean>();
  alert! : any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.status)
    {
      this.alert?.classList.remove("hide");
      this.alert?.classList.remove("none");
      this.alert?.classList.add("show");
      this.status = false;
      this.newItemEvent.emit(this.status)
    }
  }

  ngOnInit(): void {
    this.alert = document.getElementById("alert");
  }

  dismissAlert(): void{
    this.alert?.classList.remove("show");
    this.alert?.classList.remove("none");
    this.alert?.classList.add("hide");
    this.status = false;
  }

}
