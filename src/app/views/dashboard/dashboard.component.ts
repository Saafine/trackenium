import {
  Component,
  OnInit,
} from '@angular/core';
import { CoinSummaryModel } from './coin-summary/coin-summary.component';

@Component({
  selector: 'views-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class ViewsDashboardComponent implements OnInit {
  public coins: CoinSummaryModel[] = [
    {
      name: 'Bitcoin',
      marketCap: '250 000 435',
      last30prices: [1, 2, 3]
    },
    {
      name: 'Ethereum',
      marketCap: '920 161',
      last30prices: [1, 2, 3]
    }
  ];

  constructor() {
  }

  public ngOnInit() {

  }

}
