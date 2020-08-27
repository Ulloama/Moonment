import blue from '../assets/images/products/blue.jpg';
import green from '../assets/images/products/green.jpg';
import purple from '../assets/images/products/purple.jpg';
import orange from '../assets/images/products/orange.jpg';

function ProductStore(){ 
return [
    {   id: 'R1',
        name: 'Remera',
        brand: 'Nox',
        color: 'Azul',
        price: 1500,
        size: 'S, M, L, XL',
        img: blue,
        ini: 1,
        min: 1,
        stock: 10,
        description: 'La remera es una prenda básica de todos los días y muy versatil. La podés usar de entrecasa, en el trabajo debajo de la camisa, con unos jeans o bermudas para salir a comer un brunch un domingo y también para salir a la noche. Por eso necesitás una camiseta elegante, de la más alta calidad y que se adapte a vos. Hecho con el mejor algodón (100%). Diseñado y fabricado en Argentina.'
    }, 

    {   id: 'R2',
        name: 'Remera',
        brand: 'Nox',
        color: 'Verde',
        price: 1500,
        size: 'S, M, L, XL',
        img: green,
        ini: 1,
        min: 1,
        stock: 25,
        description: 'La remera es una prenda básica de todos los días y muy versatil. La podés usar de entrecasa, en el trabajo debajo de la camisa, con unos jeans o bermudas para salir a comer un brunch un domingo y también para salir a la noche. Por eso necesitás una camiseta elegante, de la más alta calidad y que se adapte a vos. Hecho con el mejor algodón (100%). Diseñado y fabricado en Argentina.'
    }, 

    {   id: 'R3',
        name: 'Remera',
        brand: 'Nox',
        color: 'Violeta',
        price: 1500,
        size: 'S, M, L, XL',
        img: purple,
        ini: 1,
        min: 1,
        stock: 55,
        description: 'La remera es una prenda básica de todos los días y muy versatil. La podés usar de entrecasa, en el trabajo debajo de la camisa, con unos jeans o bermudas para salir a comer un brunch un domingo y también para salir a la noche. Por eso necesitás una camiseta elegante, de la más alta calidad y que se adapte a vos. Hecho con el mejor algodón (100%). Diseñado y fabricado en Argentina.'
    }, 
    
    {   id: 'R4',
        name: 'Remera',
        brand: 'Nox',
        color: 'Naranja',
        price: 1500,
        size: 'S, M, L, XL',
        img: orange,
        ini: 1,
        min: 1,
        stock: 5,
        description: 'La remera es una prenda básica de todos los días y muy versatil. La podés usar de entrecasa, en el trabajo debajo de la camisa, con unos jeans o bermudas para salir a comer un brunch un domingo y también para salir a la noche. Por eso necesitás una camiseta elegante, de la más alta calidad y que se adapte a vos. Hecho con el mejor algodón (100%). Diseñado y fabricado en Argentina.'
    }, 
]};
export default ProductStore;