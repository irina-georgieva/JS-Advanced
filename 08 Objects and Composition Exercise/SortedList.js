function createSortedList(){
    let sortedList = [];

    return obj = {
        add(element){
            sortedList.push(element);
            sortedList.sort((a,b) => a - b);
        },
        remove(index){
            if(index >= 0 && index <= sortedList.length){
            sortedList.splice(index, 1);
            sortedList.sort((a,b) => a - b);
            }
        },
        get(index){
            if(index >= 0 && index <= sortedList.length){
                return sortedList[index];
            }
        },
        get size(){
            return sortedList.length;
        },
    }
};

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);