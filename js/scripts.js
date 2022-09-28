function createLi(element) {
    let productCard = document.createElement("li");
    productCard.classList.add("product");
    
    let productImg = document.createElement("img");

    if(element.image == undefined) {
        productImg.src = "./img/products/no-img.svg";
    } else {
        productImg.src = element.image;
    }

    productImg.alt = element.imageDescription;
    productImg.title = element.imageDescription;
    productImg.classList.add("product-img");
    

    let productMain = document.createElement("main");
    productMain.classList.add("product-main");

    let productTitle = document.createElement("h1")
    productTitle.classList.add("product-title");
    productTitle.innerText = element.title;
  
    let productCategory = document.createElement("h5")
    productCategory.classList.add("product-category");
    productCategory.innerText = element.category;
    

    let productPrice = document.createElement("strong");
    productPrice.classList.add("product-price")
    productPrice.innerText = element.price.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'});
    
    

    productMain.append(productTitle, productCategory, productPrice);
    productCard.append(productImg, productMain);
    return productCard;
}

function createUl(products) {    
    const mainFruits = document.querySelector(".fruits");
    const mainDrinks = document.querySelector(".drinks");
    const mainHygiene = document.querySelector(".hygiene");
    
    let ulFruits = document.createElement("ul");
    let ulDrinks = document.createElement("ul");
    let ulHygiene = document.createElement("ul");
    
    products.forEach(element => {
        if(element.category == "Frutas") {
            ulFruits.append(createLi(element));
        } else if (element.category == "Bebidas") {
            ulDrinks.append(createLi(element));
        } else {
            ulHygiene.append(createLi(element));
        }
    });
    
    mainFruits.append(ulFruits);
    mainDrinks.append(ulDrinks);
    mainHygiene.append(ulHygiene);
}

createUl(products);
