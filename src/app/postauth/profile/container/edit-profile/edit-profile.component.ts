import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/core/service/toaster.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  url: any = '';
  constructor(private toaster:ToasterService) { }

  ngOnInit(): void {
  }
  onSelectFile(event: any):any {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      console.log(event.target.files[0]);

      if (event.target.files[0].size > max_size) {
        this.toaster.showError('Maximum size allowed is ' + max_size / 1000 + 'Mb', "Max size exceeded")
            
        return false;
    }

    if (!allowed_types.includes(event.target.files[0].type)) {
      this.toaster.showError('Only Images are allowed ( JPG | PNG )',"Type error");
        return false;
    }

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event?.target?.result;
        console.log(this.url);
        let blobImg = this.DataURIToBlob(this.url);
        console.log("BLOB", blobImg);


      }
    }
  }
  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }
  public delete() {
    this.url = '';
  }

}
