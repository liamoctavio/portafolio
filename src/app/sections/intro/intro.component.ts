import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit {

  ngOnInit() {
    const options = {
      strings: ['Desarrollador Web', 'Ingeniero de Software', 'Freelancer'], // Palabras a mostrar
      typeSpeed: 100, // Velocidad de escritura
      backSpeed: 100, // Velocidad de borrado
      loop: true // Repetir el ciclo
    }; 

    new Typed('#typed-text', options); // Conecta Typed.js al span con ID 'typed-text'
      
  }

}
