import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details-info',
  templateUrl: './profile-details-info.component.html',
  styleUrls: ['./profile-details-info.component.scss']
})
export class ProfileDetailsInfoComponent implements OnInit {

  @Input() profileDetails:any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToEditProfile(){
    this.router.navigate(["user-profile/edit-profile"])
  }

}
