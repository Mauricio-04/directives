import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges {

  private _color:string = 'red';
  private _mensaje:string='Este campo es requerido';
  htmlElement:ElementRef<HTMLElement>;
 
  // @Input() mensaje:string = 'Este campo es necesario';

  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }
  constructor(private el : ElementRef<HTMLElement>) { 
   this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['mensaje']){
    // const mensaje = changes['mensaje'].currentValue;
    // this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if(changes['color']){
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    // console.log(changes);
    
  }
  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMensaje():void{
    this.htmlElement.nativeElement.innerText =  this._mensaje;
  }

}
