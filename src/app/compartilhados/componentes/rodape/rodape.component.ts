import { Component } from '@angular/core';
import { SubRodapeComponent } from './sub-rodape/sub-rodape.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rodape',
  imports: [SubRodapeComponent, RouterLink],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css',
})
export class RodapeComponent {}
