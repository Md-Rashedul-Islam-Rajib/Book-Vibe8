const getStoredWishListInfo = () => {
    const storedWishListInfo = localStorage.getItem('wish-list-info');
    if(storedWishListInfo){
        return JSON.parse(storedWishListInfo);
    }
    return [];
}
const saveWishListInfo = (id) => {
    const savedWishListInfo = getStoredWishListInfo();
    const exists = savedWishListInfo.find((wishListId)=> wishListId ===id);
    if(!exists){
        savedWishListInfo.push(id);
        localStorage.setItem('wish-list-info', JSON.stringify(savedWishListInfo));
    }
}
export {getStoredWishListInfo,saveWishListInfo}