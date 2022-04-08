import { Component, OnInit } from '@angular/core';
import { UserItemService } from '../api/useritem.service';

@Component({
  selector: 'app-useritems',
  templateUrl: './useritems.component.html',
  styleUrls: ['./useritems.component.scss']
})
export class UseritemsComponent implements OnInit {

  constructor(private userItemService:UserItemService) { }

  ngOnInit(): void {
    this.getUserProductList();
  }

  getUserProductList(){
    this.userItemService.getAllTransactions().subscribe((res:any) => {
      console.log(res);
      
    })
  }

}
