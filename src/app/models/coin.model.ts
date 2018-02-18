export interface CoinSummaryModel {
  name: string;
  marketCap: string;
  last30prices: number[];
  rank: number;
  lastMonthRank: number;
  lastMonthPriceChange: number;
  avgPrice: string;
  trend: number; // -1 -> downward, 0 -> no change, 1 -> upward trend
}