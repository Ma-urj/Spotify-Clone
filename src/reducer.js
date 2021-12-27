export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove After Finished Developing...
    //token: "BQCmLi5k5OF2rIcqWHVHtxvHaweNSet5Tp15brwRYY65mbUn29zESJjGJRqa2ai8obDHGwaKPaYd39kjLZfJQETFfuWUhzH_xGk7iGorpFntpqmbaw6HZpsZAnarlcme2z4BhI_o9A4ZS3lbSRepXUZG07DkROon3z61BNSl"
};

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
            default:
                return state;
    }
}

export default reducer;