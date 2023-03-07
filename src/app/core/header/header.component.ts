import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('sideNav') sideNav : any;
  // width= '0px'

  // openNav(){
  //   this.width="250px"

  // }

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

}
