import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';


@Page({
  templateUrl: 'build/pages/shop/shop.html'
})
export class ShopPage {

    static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
    
    constructor(nav, navParams, http) {
        this.shops = null;
        this.http = http;

        this.selectedShop = navParams.get('shop');
        
        
    }
}
