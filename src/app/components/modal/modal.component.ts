import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalSwitch:Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  openModal ():void {
    this.modalSwitch = true
  }
}
