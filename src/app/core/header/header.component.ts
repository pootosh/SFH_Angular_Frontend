import { Component, OnInit, ViewChild } from '@angular/core';
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
  searchControl: FormControl

  stateGroupOptions = [
    {names: 'Aditya', letter: 'Singh'},
    {names: 'Aman', letter: 'Vishen'}
  ]

  constructor(){
    this.serachForm = new FormGroup({
      'search': new FormControl(null)
    })

    this.searchControl =  new FormControl(null)

  }

  ngOnInit(){

  }

  openSideBar(){
    this.sideBarWidth= '100%'
  }
  closeNav(){
    this.sideBarWidth= '0px'
  }

}
