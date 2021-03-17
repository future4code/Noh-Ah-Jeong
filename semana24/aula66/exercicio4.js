const printElements = (array, index = array.length - 1) => {
    if (index >= 0) {
        printElements(array, index - 1)
        
        console.log(array[index])
    }
}