const getStoredBookInfo =() =>{
    const storedBookInfo = localStorage.getItem('book-info');
    if(storedBookInfo){
        return JSON.parse(storedBookInfo)
    }
    return [];
}
const saveBookInfo = (id) => {
    const savedBookInfo = getStoredBookInfo();
    const exists = savedBookInfo.find((bookId)=> bookId ===id);
    if(!exists){
        savedBookInfo.push(id);
        localStorage.setItem('book-info',JSON.stringify(savedBookInfo))
    }
}
export{saveBookInfo, getStoredBookInfo}