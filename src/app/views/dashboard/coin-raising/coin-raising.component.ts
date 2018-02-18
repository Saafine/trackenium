import {
  Component, Input,
  OnInit,
} from '@angular/core';
import { CoinSummaryModel } from '../../../models/coin.model';

@Component({
  selector: 'views-dashboard-coin-raising',
  styleUrls: ['./coin-raising.component.scss'],
  templateUrl: './coin-raising.component.html',
})
export class ViewsDashboardCoinRaisingComponent implements OnInit {
  @Input() public coins: CoinSummaryModel[];
  constructor() {}

  public ngOnInit() {

  }

}
