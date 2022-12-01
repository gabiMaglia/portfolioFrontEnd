import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { ModalComponent } from '../common/modal/modal.component';


@Component({
  selector: 'app-edit-pannel',
  templateUrl: './edit-pannel.component.html',
  styleUrls: ['./edit-pannel.component.css']
})
export class EditPannelComponent implements OnInit {
  
  modalSwitch = this.modal;
  isLog = this.authService.islog();
  modal?: ModalComponent
  @Input() title: String = ""


  @Input() schema: string = 'btn-outline-light' 
  
  constructor(private authService: AuthService  )  { }
  
  ngOnInit(): void {
  }
  
  openModal() {
   return ModalComponent.prototype.openModal()
  }
 
}
