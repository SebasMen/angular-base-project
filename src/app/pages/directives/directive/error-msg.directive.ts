import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() message: string = 'This field is required';

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['message']) {
      const newMessage = changes['message'].currentValue;
      this.htmlElement.nativeElement.innerText = newMessage;
    }

    if(changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }

    console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

}
