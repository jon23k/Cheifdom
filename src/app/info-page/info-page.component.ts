import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {

(function() {

  var parallaxObj, scrollToThis, interval;

  parallaxObj = $('.parallax');
  scrollToThis = parallaxObj.height();

  function scroll() {

    parallaxObj.animate({
      scrollTop: scrollToThis
    }, 2000);
    
    if(scrollToThis === 0){
      scrollToThis = parallaxObj.height();
    }else{
      scrollToThis = 0;
    }
  }
  
  scroll();

  interval = setInterval(function() {
    scroll();
  }, 2000);
  
  $('body').on('mouseover', function(){
    clearInterval(interval);
  });

}());
  }

  navigateToInfo() : void {
    this.router.navigate(['/enter']).then(() => {
      window.location.reload();
    });
  }

}
