import { Component, OnDestroy, OnInit } from '@angular/core';
import { authenticationService } from 'src/app/Core/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  name: any;

  constructor(private authenticationService: authenticationService) {}

  ngOnInit(): void {
    this.authenticationService.getNameUser().subscribe((data) => {
      this.name = data;
    });
  }

  ngOnDestroy(): void {}
}
