import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {


  sideBarWidth= '0';
  sideBarMarginLeft= '0'
  collapse:boolean= true;
  myControl: string = 'AdityaserachForm'
  serachForm: FormGroup;
  options= [1,2,3,4];
  searchControl: FormControl;
  @ViewChild('searchBar') searchBar: ElementRef;

  stateGroupOptions = [
    {names: 'Aditya', letter: 'Singh'},
    {names: 'Aman', letter: 'Vishen'}
  ]

  constructor(){
    this.serachForm = new FormGroup({
      'search': new FormControl(null)
    })

    this.searchControl =  new FormControl(null)
    this.searchBar = new ElementRef('')

  }

  ngOnInit(){

  }

  openSideBar(){
    this.sideBarWidth= '100%'
  }
  closeNav(){
    this.sideBarWidth= '0px'
  }
  searchEnter(){
    console.log(this.searchBar.nativeElement.value)
  }

}
