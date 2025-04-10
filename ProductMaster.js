import { PRODUCTSLIST } from "./PRODUCTSLIST.js";
import Product from "./Product.js";

export default class ProductMaster{
    #productsInCart
    #articleElement
    #asideElement
    constructor(productsInCart){
        this.#productsInCart = productsInCart;
        this.#articleElement = document.createElement('article');
        this.#asideElement = document.createElement('aside');

    }

    display(){
        this.#articleElement.innerHTML = "";
        for(let i = 0; i<productsInCart.length; ++i){
            new Product(articleElement, PRODUCTSLIST[productsInCart[i]].name, PRODUCTSLIST[productsInCart[i]].image, PRODUCTSLIST[productsInCart[i]].price, i);
        }
        document.querySelector("main").appendChild(this.#articleElement);
        document.querySelector("main").appendChild(this.#asideElement);
    }
}