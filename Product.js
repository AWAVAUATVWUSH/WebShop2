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
    #cardBodyElement
    #addToCartButtonElement

    constructor(parentElement, name, image, price, index){
        this.#parentElement = parentElement;
        this.#name = name;
        this.#image = image;
        this.#price = price;
        this.#index = index;

        this.#selfElement = document.createElement('div');
        this.#selfElement.classList.add("card");
        this.#selfElement.style.width = "200px";

        this.#imageElement = document.createElement('img');
        this.#imageElement.classList.add("card-img-top");
        this.#imageElement.src = `${this.#image}`;
        this.#imageElement.alt = "IMG GOES HERE";

        this.#cardBodyElement = document.createElement('div');
        this.#imageElement.classList.add("card-body");

        this.#nameElement = document.createElement('h4');
        this.#nameElement.classList.add("card-title");

        this.#priceElement = document.createElement('p');
        this.#priceElement.classList.add("card-text");

        this.#addToCartButtonElement = document.createElement('a');
        this.#addToCartButtonElement.classList.add("btn", "btn-primary");
        this.#addToCartButtonElement.href = "#";

        this.display();
        this.add_addToCart_event_dispatcher();
    }

    display(){
        this.#parentElement.appendChild(this.#selfElement);
        this.#selfElement.appendChild(this.#imageElement);
        this.#selfElement.appendChild(this.#cardBodyElement);
        this.#cardBodyElement.appendChild(this.#nameElement);
        this.#cardBodyElement.appendChild(this.#priceElement);
        this.#cardBodyElement.appendChild(this.#addToCartButtonElement);

        this.#nameElement.innerHTML = this.#name;
        this.#priceElement.innerHTML = `${this.#price}Ft`;
        this.#addToCartButtonElement.innerHTML = "Add To Cart";
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