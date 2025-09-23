import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoinDetail } from './coin-detail/coin-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoinDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crypto-tracker');
}
