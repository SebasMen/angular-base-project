import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = 'red';
  private _message: string = 'This field is required';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input() set valid(value: boolean) {
    if(value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
