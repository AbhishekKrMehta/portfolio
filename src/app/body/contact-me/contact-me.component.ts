import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @ViewChild('snackbar', { static: false }) snackbar: ElementRef;
  @ViewChild('closeDialog', { static: false }) closeDialog: ElementRef;
  snackbarVisible: boolean;
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]*$')],
      message: ['', Validators.required],
    });
  }

  // getters for formcontrols
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactDetails = {
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
      };
      this.firebaseService.saveContact(this.name.value, contactDetails);
      this.closeDialog.nativeElement.click();
      this.contactForm.reset();
      setTimeout(() => {
        this.showSnackbar();
      }, 1000);
    } else {
      // tslint:disable-next-line:max-line-length
      const formControls = Object.values(this.contactForm.controls);
      formControls.forEach(control => {
        control.markAsTouched();
      });
    }
  }

  showSnackbar() {
    this.snackbarVisible = true;
    setTimeout(() => { this.snackbarVisible = false; }, 4000);
  }
}
