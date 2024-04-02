import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  skillslist: any = [
    { name: 'Html,css', value: 'Html,css' },
    { name: 'express js', value: 'express js' },
    { name: 'sass', value: 'sass' },
    { name: 'react js', value: 'react js' },
    { name: 'node js', value: 'node js' },
    { name: 'Es5', value: 'Es5' },
    { name: 'Veu js', value: 'Veu js' },
    { name: 'typescrip', value: 'typescrip' },
    { name: 'bootstrap5', value: 'bootstrap5' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      Associateid: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      ],
      projectid: [
        '',
        [
          Validators.required,
          ,
          Validators.minLength(12),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z0-9]*$'),
        ],
      ],
      feedback: ['', [Validators.required]],
      formFile: ['', [Validators.required]],

      shore: [''],
      location: [''],
      skillsArray: this.fb.array(
        [],
        [Validators.required, Validators.minLength(5)]
      ),
    });
  }
  // radio
  selectlocation: string[] = [];
  offshore: string[] = ['chennai', 'coimbatore', 'bangalore'];
  onshore: string[] = ['Non-Usa', 'USA'];

  radioselect(obj) {
    if (obj.target.value === 'offshore') {
      this.selectlocation = this.offshore;
    } else {
      this.selectlocation = this.onshore;
    }
  }
  // checkbox
  oncheckboxchange(event) {
    // get skills array
    let sk = this.userForm.get('skillsArray') as FormArray;
    // skill is checked
    if (event.target.checked) {
      sk.push(new FormControl(event.target.value));
    }
    // skill is uncecked
    else {
      let indexofformcontrolarray = 0;
      sk.controls.forEach((fc: FormControl) => {
        if (fc.value == event.target.value) {
          // remove from array
          sk.removeAt(indexofformcontrolarray);
          return;
        }
        indexofformcontrolarray++;
      });
    }
  }

  //getters
  get username() {
    return this.userForm.get('username');
  }
  get check() {
    return this.userForm.get('Associateid');
  }
  get projectid() {
    return this.userForm.get('projectid');
  }
  get formFile() {
    return this.userForm.get('formFile');
  }

  onFormsubmit() {
    console.log(this.userForm.value);
  }
  // reseting form
  resetform() {
    this.userForm.reset();
  }
  get feedback() {
    return this.userForm.get('feedback');
  }
  get checkbox() {
    return this.userForm.get('skillsArray') as FormArray;
  }
}
