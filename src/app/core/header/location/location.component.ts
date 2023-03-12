import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @ViewChild('deliver') deliver!: ElementRef;
  collapsed: boolean= true;
  testing(){
    if(this.deliver.nativeElement.ariaExpanded){
      this.collapsed= !this.collapsed;
    }

  }

}
