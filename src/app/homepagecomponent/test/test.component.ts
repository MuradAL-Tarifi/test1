import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  // firstname = new FormControl('');

  fname: string = '';
  lname: string = '';
  AnyNumber: string = '';
  state: boolean = false;
  inputstate: boolean = false;

  constructor() {}
  ngOnInit(): void {}
  Ok() {
    if (this.state == false) {
      alert('Please Enter Any String');
    } else {
      if (this.AnyNumber.length > 10) {
        this.inputstate = true;
      } else {
        alert('Ur String  less Than 10');
      }
    }
  }
  Reset() {
    this.fname = '';
    this.lname = '';
    this.AnyNumber = '';
    this.state = false;
    this.inputstate = false;
  }
  change() {
    this.state = true;
  }

  // getAll() {
  //   alert(this.firstname.value);
  // }
}
