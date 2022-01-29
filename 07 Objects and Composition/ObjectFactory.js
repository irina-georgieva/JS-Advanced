function factory(library, orders){

    const result = [];

    for(let order of orders){
        const currentOrder = Object.assign({}, order.template);
        for(let part of order.parts){
            currentOrder[part] = library[part];
        }

        result.push(currentOrder);
    }

    return result;
}