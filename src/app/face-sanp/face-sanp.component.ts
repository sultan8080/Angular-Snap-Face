import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-sanp',
  imports: [],
  templateUrl: './face-sanp.component.html',
  styleUrl: './face-sanp.component.css'
})
export class FaceSanpComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: String;
  userHasSnapped!: boolean;



    ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false
  }

  onSnap():void{
    if(this.userHasSnapped){
      this.snaps--;
      this.snapButtonText = 'Oh Snap';
      this.userHasSnapped = false;
    } else{
      this.snapButtonText = 'Oops Snap';
      this.snaps++;
      this.userHasSnapped = true;
    }
  }
}

