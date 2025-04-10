


export default class CartProduct {

#parentElem;
#index;
#name
#price
#selfElement

    constructor(name,price,parentElem,index) {
        this.#parentElem = parentElem;
        this.#name = name;
        this.#index = index;
        this.#price = price;
        this.display();
        this.#selfElement = this.#parentElem.querySelector(".text:last-child .torles");
        console.log(this.#selfElement);
        this.delete();
    }


    display() {
        let html = `
                <p class="text">${this.#name}
                ${this.#price}
                    <button class="torles">🗑️</button>
                </p>
        `;
        this.#parentElem.insertAdjacentHTML("beforeend", html);
    }

    delete() {
        this.#selfElement.addEventListener("click", ()=> {
            console.log(this.#index);
            const e = new CustomEvent("delete", {detail: this.#index});
            window.dispatchEvent(e);
        });
    }



}