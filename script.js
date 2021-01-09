/******************************* Cart: Przyciski do wyboru metody dostawy ********************************/

cart = {
    lists: document.querySelectorAll('#shipping_method li'),
    select: document.querySelector('#shipping_method')
}

if (cart.lists) {
    // afterbegin or beforebegin
    cart.select.insertAdjacentHTML('afterbegin', '<div><p>Wybierz metodę płatności</p><select id="cart-shipping"><option value=""></option><option value="pobranie">Pobranie</option><option value="przedplata">Przedpłata</option></select></div>');
    select = document.getElementById('cart-shipping');

    for(let listElement of cart.lists) {
        listElement.style.display = 'none';

        select.addEventListener("change", () => {
            switch (select.value) {
                case 'przedplata':
                    (select.value === 'przedplata' && listElement.childNodes[3].innerHTML.includes('przedpłata')) ? listElement.style.display = 'block' : listElement.style.display = 'none';
                    if(listElement.childNodes[3].innerHTML.includes('osobisty')) listElement.style.display = 'block';
                    break;

                case 'pobranie':
                    (select.value === 'pobranie' && listElement.childNodes[3].innerHTML.includes('pobranie')) ? listElement.style.display = 'block' :  listElement.style.display = 'none';
                    if(listElement.childNodes[3].innerHTML.includes('osobisty')) listElement.style.display = 'block';  
                    break;
                default:  
                    listElement.style.display = 'none';
            }
        });
    }
         
}