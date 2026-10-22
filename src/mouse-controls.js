// Mouse events report every button transition. Pointer events only report the
// first press / final release, so they cannot own a two-button FPS gesture.
export class MouseControls {
 constructor({begin,release,look,cancel=()=>{},active=()=>true}){Object.assign(this,{begin,release,look,cancel,active});this.left=false;this.right=false;this.last=null;}
 down(e){if(!this.active())return;this.last={x:e.clientX,y:e.clientY};if(e.button===0)this.left=true;if(e.button===2&&!this.right){this.right=true;this.begin();}}
 move(e,locked=false){if(!this.active())return;const left=(e.buttons&1)!==0;if(locked||left){const dx=locked?e.movementX:(this.last?e.clientX-this.last.x:0),dy=locked?e.movementY:(this.last?e.clientY-this.last.y:0);this.look(dx||0,dy||0);}this.left=left;this.last={x:e.clientX,y:e.clientY};}
 up(e){if(e.button===0)this.left=false;if(e.button===2&&this.right){this.right=false;this.release();}this.last={x:e.clientX,y:e.clientY};}
 reset(){this.left=this.right=false;this.last=null;this.cancel();}
}
