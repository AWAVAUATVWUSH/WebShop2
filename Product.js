export default class Product{
    #parentElement
    #name
    #image
    #price
    #index

    #selfElement
    #nameElement
    #imageElement
    #priceElement
    #addToCartButtonElement

    constructor(parentElement, name, image, price, index){
        this.#parentElement = parentElement;
        this.#name = name;
        this.#image = image;
        this.#price = price;
        this.#index = index;

        this.#selfElement = document.createElement('div');
        this.#selfElement.classList.add("product")

        this.#nameElement = document.createElement('div');
        this.#nameElement.classList.add("productName");

        this.#imageElement = document.createElement('div');
        this.#imageElement.classList.add("productImage");

        this.#priceElement = document.createElement('div');
        this.#priceElement.classList.add("productPrice");

        this.#addToCartButtonElement = document.createElement('button');
        this.#addToCartButtonElement.classList.add("addToCartButton");

        this.display();
        this.add_addToCart_event_dispatcher();
    }

    display(){
        this.#parentElement.appendChild(this.#selfElement);
        this.#selfElement.appendChild(this.#nameElement);
        this.#selfElement.appendChild(this.#imageElement);
        this.#selfElement.appendChild(this.#priceElement);
        this.#selfElement.appendChild(this.#addToCartButtonElement);

        this.#nameElement.innerHTML = `<h2>${this.#name}</h2>`;
        this.#imageElement.innerHTML = `<img src="${this.#image}" alt="none">`
        this.#priceElement.innerHTML = `<p>${this.#price}</p>`;
        this.#addToCartButtonElement.innerHTML = `<p>Add To Cart</p>`;
    }

    add_addToCart_event_dispatcher(){
        this.#addToCartButtonElement.addEventListener('mousedown', ()=>{
            const myEvent = new CustomEvent('addToCart',{
                detail:{
                    index: this.#index
                }
            })
            document.dispatchEvent(myEvent);
        })
    }
}