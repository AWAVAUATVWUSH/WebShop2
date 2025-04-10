import { PRODUCTSLIST } from "./PRODUCTSLIST.js";
import CartMaster from "./CartMaster.js";
import ProductMaster from "./ProductMaster.js";

export default class Controller{
    constructor(){
        new ProductMaster();
        new CartMaster();
    }
}