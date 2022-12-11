import {Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators, Form } from '@angular/forms';
import { debounceTime} from 'rxjs/operators'

@Component ({
  selector: 'app-detalleCancion-form',
  templateUrl: './detalleCancion-form.component.html',
  styleUrls: ['./detalleCancion-form.component.css']

})

export class DetalleCancionFormComponent implements OnInit {

  form: FormGroup = null!;

  constructor( private formBuilder: FormBuilder  ){

    this.buildForm();


  }

  ngOnInit() {

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      artista: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      album: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      estilo: new FormControl('', [Validators.required]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }
  }
}

