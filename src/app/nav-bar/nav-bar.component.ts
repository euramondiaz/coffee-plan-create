import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  opened = false;
  innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 767 && this.opened === true){
      this.opened = false;
    }
  }

  toggleMenu(){
    this.opened = !this.opened;
  }
}
