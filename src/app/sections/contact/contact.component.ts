import { Component } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  sendEmail() {

    const form = document.querySelector('form');

    emailjs.sendForm('service_36ksycj', 'template_qwpt96l', form as HTMLFormElement, '110_J_WqWYJMehga_')
      .then((result) => {
        alert('Correo enviado correctamente!');
        form?.reset();  // Limpia el formulario
      }, (error) => {
        alert('Error al enviar el correo: ' + error.text);
      });

  }
    

}
