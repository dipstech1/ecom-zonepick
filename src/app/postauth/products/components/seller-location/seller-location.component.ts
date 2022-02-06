import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-seller-location',
  templateUrl: './seller-location.component.html',
  styleUrls: ['./seller-location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SellerLocationComponent implements OnInit {
  zoom = 12
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  mapOptions: google.maps.MapOptions = {
    center: { lat: 22.5074, lng: 88.3873 },
    zoom : 14
 }
 marker = {
    position: { lat: 22.5074, lng: 88.3873 },
 }
  constructor() { }

  ngOnInit(): void {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   }
    // })
  }

}
