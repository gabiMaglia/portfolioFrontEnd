import {
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  isLog = this.autService.islog();
  catchPhrase?: String;

  constructor(
    private getDataServices: DataRecoverService,
    private autService: AuthService
  ) { }

  ngOnInit(): void {
    this.getDataServices.getData().subscribe((data) => {
      this.catchPhrase = data.frontPhrase;
    });
  }
}
