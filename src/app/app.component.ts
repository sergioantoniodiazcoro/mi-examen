import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: false, 
  templateUrl: './app.component.html' ,

  styleUrl: './app.component.css'
})

export class AppComponent  {

}