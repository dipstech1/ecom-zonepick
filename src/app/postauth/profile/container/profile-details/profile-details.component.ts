import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../api/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profileDetails:any

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getLoggedInUserProfile().subscribe((r:any)=>{
      this.profileDetails = r[0];
      
    })
  }

}
