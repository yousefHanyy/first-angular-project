// !old
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class DisableAfterClick {
  constructor(
    private el: ElementRef,
    private render2: Renderer2,
  ) {}

  @HostListener('click')
  disableButton() {
    this.render2.setProperty(this.el.nativeElement, 'innerText', 'Processing...');
    this.render2.setAttribute(this.el.nativeElement, 'disabled', 'true');
    setTimeout(() => {
      this.render2.setProperty(this.el.nativeElement, 'innerText', 'Register');
      this.render2.removeAttribute(this.el.nativeElement, 'disabled');
    }, 3000);
  }
  // !
  // export class DisableAfterClick implements OnChanges {
  //   constructor(
  //     private el: ElementRef,
  //     private render2: Renderer2,
  //   ) {}

  // ngOnChanges(changes:SimpleChages):void{
  //  * 'method i want to call just before ngOnInit since on initialization ngOnChanges is called before ngOnInit but after that ngOnChanges is called every change'
  // }
  //   @HostListener('click')
  //   disableButton() {
  //     this.render2.setProperty(this.el.nativeElement, 'innerText', 'Processing...');
  //     this.render2.setAttribute(this.el.nativeElement, 'disabled', 'true');
  //     setTimeout(() => {
  //       this.render2.setProperty(this.el.nativeElement, 'innerText', 'Register');
  //       this.render2.removeAttribute(this.el.nativeElement, 'disabled');
  //     }, 3000);
  //   }
}
