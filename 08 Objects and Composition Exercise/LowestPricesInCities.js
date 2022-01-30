function productPrice(arr){
    let productInfo = [];

    for (const el of arr) {
        let [townName, productName, productPrice] = el.split(' | ');
        productPrice = Number(productPrice);

        if(productInfo.filter(x => x.productName === productName).length > 0){
            let obj = productInfo.find(x => x.productName === productName);

            if(obj.productPrice > productPrice){
                obj.productPrice = productPrice;
                obj.townName = townName;
            }
        }else{
            let obj = {productName, townName, productPrice};
            productInfo.push(obj);
        }
    }

    for (const product of productInfo) {
        console.log(`${product.productName} -> ${product.productPrice} (${product.townName})`);
    }
}