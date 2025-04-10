import { PRODUCTSLIST } from "./PRODUCTSLIST.js";
import Product from "./Product.js";

export default class ProductMaster{
    #productsInCart = [];
    #articleElement;
    #asideElement;
    constructor(productsInCart){
        this.#productsInCart = productsInCart;
        this.#articleElement = document.createElement('article');
        this.#asideElement = document.createElement('aside');
        this.display();
    }

    display(){
        this.#articleElement.innerHTML = "";
        for(let i = 0; i<PRODUCTSLIST.length; ++i){
            new Product(this.#articleElement, PRODUCTSLIST[i].name, PRODUCTSLIST[i].image, PRODUCTSLIST[i].price, i);
        }
        document.querySelector("main").appendChild(this.#articleElement);
        document.querySelector("main").appendChild(this.#asideElement);
    }
}