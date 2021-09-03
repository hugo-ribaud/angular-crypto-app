import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  result: any;
  currencyCode: string;
  display: string;

  constructor(private http: HttpClient) {}

  // function to get crypto prices from the API 
  getPrices() {
    const fsymsList =
      "BTC,XRP,ETH,ADA,";
    return this.http
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
          fsymsList +
          "&tsyms=EUR"
      )
      .pipe(map((result) => (this.result = result)));
  }
}
