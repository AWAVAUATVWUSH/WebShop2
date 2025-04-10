import CartProduct from "./CartProduct.js";

export default class CartMaster{


    #articleElem
    constructor(list, list2, articleElem){
        this.articleElem = articleElem;
        this.list = list;
        this.displayCartProducts();
    }




    displayCartProducts() {
        this.#articleElem.innerHTML = "";
        for (let index = 0; index < this.list.length; index++) {
            new CartProduct(this.list[list2[index]].name,this.list[list2[index]].price,this.#articleElem, index);
            
        }
    }
}