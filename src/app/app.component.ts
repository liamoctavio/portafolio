import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: false, // Solo anima la primera vez que se ve el elemento
      easing: 'ease-in-out', // Efecto de animación
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        AOS.refresh(); // Refresca AOS después de cada cambio de ruta
      }
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    AOS.refresh(); // Refresca AOS en cada desplazamiento
  }
  
  title = 'my-portafolio2';
}


