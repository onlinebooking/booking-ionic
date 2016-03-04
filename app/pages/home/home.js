import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ShopPage} from '../shop/shop';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
    
    constructor(nav, navParams, http) {
        this.shops = null;
        this.http = http;
        this.nav = nav;
        
        this.http.get('http://localhost:8000/api/shops/')
        .map(res => res.json())
        .subscribe(data => {
            this.shops = data;
        });
        
    }

    itemTapped(event, shop) {
        this.nav.push(ShopPage, {
            shop: shop
        })
    }
}
