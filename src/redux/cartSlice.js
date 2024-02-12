import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    childrenCount: 3,
    selectedParty: "",
    selectedDecorations: [],
    gift: 0,
    basePrice: 0,
    decorPrice: 0,
    giftsPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        setInitialState: (state) => {
            Object.assign(state, initialState);
        },

        setSelectedParty: (state, action) => {
            state.selectedParty = action.payload;
            state.basePrice = state.childrenCount;
        },

        toggleDecoration: (state, action) => {
            const { itemID, itemPrice } = action.payload;
            const index = state.selectedDecorations.findIndex(item => item.id === itemID);
            if (index === -1) {
                state.selectedDecorations.push({ id: itemID, price: itemPrice, count: 1 });
            } else {
                state.selectedDecorations.splice(index, 1);
            };
            state.decorPrice = state.selectedDecorations.reduce((sum, item) => sum + Number(item.price) * Number(item.count), 0);
        },

        setCountDecoration: (state, action) => {
            const { itemID, newValue } = action.payload;
            const index = state.selectedDecorations.findIndex(item => item.id === itemID);
            if (index !== -1) state.selectedDecorations[index].count = newValue;
            state.decorPrice = state.selectedDecorations.reduce((sum, item) => sum + Number(item.price) * Number(item.count), 0);
        },


        setGift: (state, action) => {
            state.gift = action.payload;
            state.giftsPrice = state.gift * state.childrenCount;
        },

        changeChildrenCount: (state, action) => {
            const { operation } = action.payload;
            switch (operation) {
                case 'minus':
                    if (state.childrenCount > 3) {
                        state.childrenCount--;
                        state.giftsPrice = state.gift * state.childrenCount;
                    };
                    break;
                case "plus":
                    if (state.childrenCount < 25) {
                        state.childrenCount++;
                        state.giftsPrice = state.gift * state.childrenCount;
                    };
                    break;
                default:
                    break;
            };
        },

        setBasePrice: (state, action) => {
            state.basePrice = action.payload;
        },

    },
});

export const {
    setSelectedParty,
    toggleDecoration,
    setGift,
    changeChildrenCount,
    setBasePrice,
    setCountDecoration,
    setInitialState,
} = cartSlice.actions;

export default cartSlice.reducer;
