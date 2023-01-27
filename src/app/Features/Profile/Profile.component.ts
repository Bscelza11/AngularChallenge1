import { Component, OnDestroy } from '@angular/core';
import { authenticationService } from 'src/app/Core/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnDestroy {
  name: any;

  constructor(private authenticationService: authenticationService) {
    this.authenticationService.getNameUser().subscribe((data) => {
      debugger;
      this.name = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {}
}
