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

    ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onAddSnap():void{
    this.snaps++;
  }
}

