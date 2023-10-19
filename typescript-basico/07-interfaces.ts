function show(obj: {category: string, product: string}){
    console.log(obj.category);
    console.log(obj.product);
}

show({category: "Categoria", product:"Produto"});

function show2({category, product}: {category: string, product: string}){
    console.log(category);
    console.log(product);
}

show({category: "Categoria", product:"Produto"});

interface ObjectValue {
    category: string;
    product?: string;
}

let obj: ObjectValue = {category: 'Categoria 1', product: 'Produto'};

class Product implements ObjectValue{
    category: string;
}

let product= new Product();

product.category = 'Categoria';