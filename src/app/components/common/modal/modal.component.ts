import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: String = ""
  @Input() form:any = ""
  
  modalSwitch:Boolean = false;
  
  constructor() { 
   
  }
  
  ngOnInit(): void {
  }
  openModal ():void {
    this.modalSwitch = true
  }

  closeModal ():void {
    this.modalSwitch = false
  }
}
