const productName = 'Smarthphone';
const productPrice = 500;
const productBrand = 'Apple';

const getProductInfo = () => {
    const productName = 'TV';
    const productPrice = 150;
    const productBrand = 'LG'

    return `${productName} ${productPrice} ${productBrand}`
}

console.log(getProductInfo()); //TV 150 LG

console.log(`${productName} ${productPrice} ${productBrand}`);