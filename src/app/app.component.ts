import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BCK } from './colori';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('fontsize') fontsize: ElementRef;
  larghezza: string;
  flag: boolean = false;
  mioStileArray: string[] = ['uno', 'due', 'tre'];
  mioStileOggetto: {
    uno: boolean;
    due: boolean;
    tre: boolean;
    quattro: boolean;
  } = { uno: true, due: true, tre: true, quattro: true };
  public colore: string = '';
  public background_color: string = 'white';
  constructor() {}
  public getColoreCasuale(): void {
    var cifraEsa = '0123456789ABCDEF'.split('');
    var colore_app: string = '#';
    for (var i = 0; i < 6; i++) {
      colore_app += cifraEsa[Math.floor(Math.random() * 16)];
    }
    this.colore = colore_app;
  }
  public getSize(inc: number): void {
    let font_dim: number = parseInt(this.fontsize.nativeElement.value);
    if (inc > 0) {
      if (font_dim < 65) font_dim += inc;
    } else {
      if (font_dim > 12) {
        font_dim += inc;
      }
    }
    this.fontsize.nativeElement.value = font_dim + 'px';
    font_dim = font_dim * 3;
    this.larghezza = font_dim + 'px';
  }
  public getBCK() {
    let font_dim = Number(this.fontsize.nativeElement.value.substr(0, 2));
    font_dim = font_dim * 3;
    this.larghezza = String(font_dim) + 'px';
    this.background_color = BCK[1 + Math.floor(Math.random() * 8)];
  }
  ngOnInit(): void {
    this.flag = true;
  }
  ngAfterViewInit() {
    this.fontsize.nativeElement.value = '18px';
  }
}
