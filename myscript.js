
var menuBtn = document.getElementById("drop-down");
var sideNav = document.querySelector(".menu.mobile");

class Nav{
      constructor(navBtn,nav){
                  //      nav
            this.nav = nav;
            this.originalHeight = this.nav.offsetHeight;
            this.currentHeight = 0;
            this.nav.style.height = '0px';
                  //    nav button
            this.navBtn = navBtn;
            this.navBtn.addEventListener('click',(e)=>{ this.handleNavBtnClick(e)})
                  // running animation
            this.AnimRunning = null;
                  //    nav bools
            this.isNavOpen = false;
      }

      handleNavBtnClick(e){
            if(this.AnimRunning){
                  this.AnimRunning.pause() //if an nimation is already running, pause it
                  this.AnimRunning = null  
                  this.isNavOpen = !this.isNavOpen
            }

            this.isNavOpen? this.close() : this.open()
      }

      close(){
            //nav
            this.getNewCurrentHeight() //this prevents the nav from always starting from fully closed or open if its inbetween it just
                                       //continues from its current height
            const animClose = [
                  {height : `${this.currentHeight}px`},
                  {height : `0px`}
            ]
              
            const animCloseTiming = {
                  fill: 'forwards',
                  duration: 400,
                  iterations: 1,
            }

            this.AnimRunning = this.nav.animate(animClose,animCloseTiming)
            this.AnimRunning.onfinish = () => {
                  this.isNavOpen = false;
                  this.AnimRunning = null
            }
      }

      open(){
            this.getNewCurrentHeight() //this prevents the nav from always starting from fully closed or open if its inbetween
            console.log(this.currentHeight,this.originalHeight)
            const animOpen = [
                  {height : `${this.currentHeight}px`},
                  {height : `${this.originalHeight}px`}
            ]
              
            const animOpenTiming = {
                  fill: 'forwards',
                  duration: 400,
                  iterations: 1,
            }

            this.AnimRunning = this.nav.animate(animOpen,animOpenTiming)
            this.AnimRunning.onfinish = () => {
                  this.isNavOpen = true;
                  this.AnimRunning = null
            }
      }

      getNewCurrentHeight(){
            this.currentHeight = this.nav.offsetHeight
            console.log('new current height is',this.currentHeight)
      }
}

const mobileNav = new Nav(menuBtn,sideNav)

   