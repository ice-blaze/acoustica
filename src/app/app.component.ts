import { IMAGE_CONFIG } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly firstIndex = '';
  readonly secondIndex = '';
  readonly thirdIndex = '';

  readonly picsFilePaths = [
    'pics/DSC00221.jpg',
    'pics/DSC00678.jpg',
    'pics/DSC01700.jpg',
    'pics/DSC02184.jpg',
    'pics/DSC02202.jpg',
    'pics/DSC02320.jpg',
    'pics/DSC02408.jpg',
    'pics/DSC02547.jpg',
    'pics/DSC02620.jpg',
    'pics/DSC02732.jpg',
    'pics/DSC02773.jpg',
    'pics/DSC02973.jpg',
    'pics/DSC03073.jpg',
    'pics/DSC03078.jpg',
    'pics/DSC03134.jpg',
    'pics/DSC03155.jpg',
    'pics/DSC03519.jpg',
    'pics/DSC03556.jpg',
    'pics/DSC04112.jpg',
    'pics/DSC04114.jpg',
    'pics/DSC04118.jpg',
    'pics/DSC04235.jpg',
    'pics/DSC04304.jpg',
    'pics/DSC04579.jpg',
    'pics/DSC04654.jpg',
    'pics/DSC04694.jpg',
    'pics/DSC04899.jpg',
    'pics/DSC05468.jpg',
    'pics/DSC05649.jpg'
  ];
}
