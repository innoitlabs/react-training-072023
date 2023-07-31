export const changeTheme = (type) => ({
    type: 'changeTheme',
    payload:type
})

export const AddItemToCart = (data) => ({
    type: "addItem",
    payload: data
}); 

export const RemoveItemFromCart = (index) => ({
    type: "removeItem",
    payload: index
});