import { PRODUCTSLIST } from "./PRODUCTSLIST.js";
import CartMaster from "./CartMaster.js";
import ProductMaster from "./ProductMaster.js";

export default class Controller{
    #productsInCart = [0,1];
    #articleElement;
    constructor(){
         this.#articleElement = document.createElement("article");

        new ProductMaster(this.#productsInCart);

        document.querySelector("#kezdolapgomg").addEventListener('mousedown', ()=>{
            document.querySelector("main").innerHTML = "";
            new ProductMaster(this.#productsInCart);
        })

        document.querySelector("#kosargomb").addEventListener('mousedown', ()=>{
            document.querySelector("main").innerHTML = "";
            
            new CartMaster(PRODUCTSLIST, this.#productsInCart, this.#articleElement);
        })

        this.add_addToCart_event_listener();
        this.add_delete_event_listener();
    }

    add_addToCart_event_listener(){
        document.addEventListener('addToCart', (event)=>{
            this.#productsInCart.push(event.detail.index);
        })
    }

    add_delete_event_listener(){
        window.addEventListener('delete', (event)=>{
            this.#productsInCart.splice(event.detail, 1);
            this.#articleElement.innerHTML = '';
            new CartMaster(PRODUCTSLIST, this.#productsInCart, this.#articleElement);
        })
    }
}