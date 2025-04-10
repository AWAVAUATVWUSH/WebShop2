import CartProduct from "./CartProduct.js";

export default class CartMaster{


    #articleElem
    constructor(list, list2, articleElem){
        console.log(list2);
        this.#articleElem = articleElem;
        this.list = list;
        this.list2 = list2
        this.displayCartProducts();
    }
    
    displayCartProducts() {
        this.#articleElem.innerHTML = "";
        for (let index = 0; index < this.list2.length; index++) {
            new CartProduct(this.list[this.list2[index]].name,this.list[this.list2[index]].price,this.#articleElem, index);
            
        }

        document.querySelector("main").appendChild(this.#articleElem);

        
    }
}