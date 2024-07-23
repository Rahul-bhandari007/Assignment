import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule,MatInputModule,
    MatIconModule,MatFormFieldModule,MatCardModule,
  ],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})

export class ForgotComponent implements OnInit {
 
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
forgot!:FormGroup;



constructor(private fb: FormBuilder) {
  this.forgot = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
}

ngOnInit(): void {}

onSubmit(): void {
  if (this.forgot.valid) {
    const email = this.forgot.value.email;
    console.log('Email:', email);
    // Add your logic to handle form submission here
  }
}
}











//   constructor(private router: Router) { this.email.statusChanges, this.email.valueChanges}
//   ngOnInit(): void { }
  
//   updateErrorMessage() {
//     if (this.email.hasError('required')) {
//       this.errorMessage = 'You must enter a value';
//     } else if (this.email.hasError('email')) {
//       this.errorMessage = 'Not a valid email';
//     } else {
//       this.errorMessage = '';
//     }
//   }

//  onSubmit(){
// this.router.navigate(['']);
//  };

// }




