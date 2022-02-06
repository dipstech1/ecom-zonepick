import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../core/service/scriptload.service';

@Component({
  selector: 'app-postauth-shell',
  templateUrl: './postauth-shell.component.html',
  styleUrls: ['./postauth-shell.component.scss']
})
export class PostauthShellComponent implements OnInit {

  constructor(private scriptLoaderService:ScriptLoaderService) { }

  ngOnInit(): void {
    // this.scriptLoaderService.loadScript()
  }

}
