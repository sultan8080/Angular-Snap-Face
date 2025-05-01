import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-sanp',
  imports: [],
  templateUrl: './face-sanp.component.html',
  styleUrl: './face-sanp.component.css'
})
export class FaceSanpComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: String;
  userHasSnapped!: boolean;



    ngOnInit() {
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false
  }
  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

}

