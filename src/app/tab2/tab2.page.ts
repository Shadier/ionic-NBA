import { Component, ViewChild, Renderer } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public image : any;
  base64Image:any;
  canvasElement: any;
  elemento: number = 0.8

  
  brightnessValue = 0.8;
  options: CameraOptions = {
    quality: 100,
    destinationType: this._camera.DestinationType.FILE_URI,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE
  }

  constructor(
    private _camera: Camera,
    private _renderer: Renderer,
    private _brightness: Brightness
  ) {
    this.takePhoto()
  }
  
  
  change(event: any) {
    console.log(event);
    this._brightness.setBrightness(event.detail.value);
  }

  takePhoto() {
      this.image = []
      var image = new Image();
      //let ctx = this.canvasElement.getContext('2d');

      const options : CameraOptions = {
          quality: 50, // picture quality
          
          destinationType: this._camera.DestinationType.DATA_URL,
          encodingType: this._camera.EncodingType.JPEG,
          mediaType: this._camera.MediaType.PICTURE
      }
      this._camera.getPicture(options) .then((imageData) => {
          this.base64Image = "data:image/jpeg;base64," + imageData;
          image.src=this.base64Image;
              this.image.push(this.base64Image);
              this.image.reverse();
          // ctx.drawImage(image, 0, 0, image.width,image.height,     // source rectangle
          //   0, 0,  this.canvasElement.width, this.canvasElement.height);

          }, (err) => {
          console.log(err);
      });
  }

}
