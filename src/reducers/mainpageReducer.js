export default function mainpageReducer(state, action) {
    if(state === undefined) {
        return [];
    }

    if(action.type === "getAllInventories") {
        return [...action.data];
    }

    if(action.type === 'deleteInventory') {
        const data = action.data;
        const index = state.findIndex((e) => e._id === data._id);
        state.splice(index, 1);
        return [...state];
    }
}