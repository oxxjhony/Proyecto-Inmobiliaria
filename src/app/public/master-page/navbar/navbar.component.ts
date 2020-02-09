import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.change();
  }



  change(){
    var nuv = document.getElementById('nuv');
    window.onscroll = function() {
    if (window.pageYOffset >50) {
      nuv.classList.add("white");
    } else {
      nuv.classList.remove("white");
    }
  }
    }

}
