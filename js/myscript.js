let mycart = document.getElementById("cart")
document.get

window.addEventListener("click", (event)=>{
    console.log(event);

    if(event.target.classList.contains('button-buy')){
        addItems(event.target)
    }

    if(event.target.classList.contains('delete-item')){
        deleteItems(event.target)
    }
})

function addItems(element){
    console.log('додавання товару');
    let li = document.createElement('li');
    li.innerHTML = element.dataset.img + element.dataset.name + ' ' + element.dataset.price + '<div class="delete-item">X</div>';
    mycart.appendChild(li);
    addCartToForm(element.dataset.id)
    M.toast({html: "Товар додано до кошика"})
}

function deleteItems(element){
    console.log('видалення товару')
    element.parentNode.remove()
}

let inputCart = document.getElementById('cartFF');

function addCartToForm(id){
    inputCart.value += id + ", ";
}


