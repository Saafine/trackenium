import {
  Component,
  OnInit,
} from '@angular/core';
import { CoinSummaryModel } from '../../models/coin.model';

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
      last30prices: [1, 2, 3],
      rank: 1,
      lastMonthRank: 1,
      lastMonthPriceChange: 1.55,
      avgPrice: '10 203',
      trend: 0

    },
    {
      name: 'Ethereum',
      marketCap: '920 161',
      last30prices: [1, 2, 3],
      rank: 2,
      lastMonthRank: 2,
      lastMonthPriceChange: 0.19,
      avgPrice: '2 203',
      trend: 0
    }
  ];

  constructor() {
  }

  public ngOnInit() {

  }

}
