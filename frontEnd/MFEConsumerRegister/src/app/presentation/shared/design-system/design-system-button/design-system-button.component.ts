import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-system-button',
  templateUrl: './design-system-button.component.html',
  styleUrls: ['./design-system-button.component.scss']
})
export class DesignSystemButtonComponent  implements OnInit{
  @Input()
  public label: string = '';

  @Input()
  public type: string = '';

  @Input()
  public size: 'sm' | 'l' | 'xl' = 'l';

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
      this.setBTNElementSize(this.size);
  }

  public setBTNElementSize(size: 'sm' | 'l' | 'xl') {
    this.removeAllBTNSizeClass();
    this.elementRef.nativeElement.classList.add(size);
  }

  private removeAllBTNSizeClass() {
    this.elementRef.nativeElement.classList.toggle('sm');
    this.elementRef.nativeElement.classList.toggle('l');
    this.elementRef.nativeElement.classList.toggle('xl');
  }
}
