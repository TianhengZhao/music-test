import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../applications/Recommend/store/index";
import { reducer as singersReducer } from "../applications/Singers/store/index";
import { reducer as rankReducer } from "../applications/Rank/store";
import { reducer as albumReducer } from "../applications/Album/store";



export default combineReducers ({
    recommend: recommendReducer,
    singers: singersReducer,
    rank: rankReducer,
    album: albumReducer
})