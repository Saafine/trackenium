import {
  Component, Input,
  OnInit,
} from '@angular/core';
import { CoinSummaryModel } from '../../../models/coin.model';

@Component({
  selector: 'views-dashboard-coin-summary',
  styleUrls: ['./coin-summary.component.scss'],
  templateUrl: './coin-summary.component.html',
})
export class ViewsDashboardCoinSummaryComponent implements OnInit {
  @Input() public coins: CoinSummaryModel[];
  constructor() {}

  public ngOnInit() {

  }

}
