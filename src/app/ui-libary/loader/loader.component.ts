import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  loading!:boolean 
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor(private loaderService: LoaderService){}

  ngOnInit() {
    this.loaderService.isLoading.subscribe(r => {
      this.loading = r;
      console.log("this.loading ", this.loading);
      
    })
  }

}
