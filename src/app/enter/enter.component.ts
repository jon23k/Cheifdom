import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-enter',
  moduleId: 'enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

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
    this.router.navigate(['/info']).then(() => {
      window.location.reload();
    });
  }

}
