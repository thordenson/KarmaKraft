export const initialState = {
    userObject: '',
    menuViewable: false,
    currentLocation: '',
    searchLocation: '',
    titleGuideInput: '',
    titleGuideResults: [],
    walkSearchResults: [],
    walkBeingViewed: '',
    poisBeingViewed: [],
    poiBeingViewed: '',
}

const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (payload) => ({type: UPDATE_USER_OBJECT, payload});
let updateUserObjectAction = (state, action) => {
    return ({ ...state, userObject: action.payload });
}
updateUserObject.toString = () => UPDATE_USER_OBJECT;

const REVERT_INITIAL_STATE = "REVERT_INITAL_STATE";
export let revertInitialState = () => ({type: REVERT_INITIAL_STATE});
let revertInitialStateAction = (state, action) => ({...state, ...initialState});
revertInitialState.toString = () => REVERT_INITIAL_STATE;

const RESET_EDITABLE_POIS = "RESET_EDITABLE_POIS";
export let resetEditablePois = () => ({type: RESET_EDITABLE_POIS});
let resetEditablePoisAction = (state, action) => {
    return ({ ...state, editablePois: [] });
}
resetEditablePois.toString = () => RESET_EDITABLE_POIS;

const UPDATE_POI_BEING_EDITIED = "UPDATE_POI_BEING_EDITIED";
export let updatePoiBeingEdited = (payload) => ({type: UPDATE_POI_BEING_EDITIED, payload});
let updatePoiBeingEditedAction = (state, action) => {
    return ({ ...state, poiBeingEdited: Object.assign({}, action.payload) });
}
updatePoiBeingEdited.toString = () => UPDATE_POI_BEING_EDITIED;

const UPDATE_SEARCH_LOCATION = "UPDATE_SEARCH_LOCATION";
export let updateSearchLocation = (payload) => ({type: UPDATE_SEARCH_LOCATION, payload});
let updateSearchLocationAction = (state, action) => {
    return ({ ...state, searchLocation: Object.assign({}, action.payload) });
}
updateSearchLocation.toString = () => UPDATE_SEARCH_LOCATION;

const UPDATE_POIS_BEING_VIEWED = "UPDATE_POIS_BEING_VIEWED";
export let updatePoisBeingViewed = (payload) => ({type: UPDATE_POIS_BEING_VIEWED, payload});
let updatePoisBeingViewedAction = (state, action) => {
    return ({ ...state, poisBeingViewed: action.payload });
}
updatePoisBeingViewed.toString = () => UPDATE_POIS_BEING_VIEWED;

const UPDATE_POI_BEING_VIEWED = "UPDATE_POI_BEING_VIEWED";
export let updatePoiBeingViewed = (payload) => ({type: UPDATE_POI_BEING_VIEWED, payload});
let updatePoiBeingViewedAction = (state, action) => {
    return ({ ...state, poiBeingViewed: action.payload });
}
updatePoiBeingViewed.toString = () => UPDATE_POI_BEING_VIEWED;

let reducerHandlers = {
    [updateUserObject]: updateUserObjectAction,
    [updateMenuViewable]: updateMenuViewableAction,
    [updatePoiBeingEdited]: updatePoiBeingEditedAction,
    [updateProfileBeingViewed]: updateProfileBeingViewedAction,
    [updateCurrentLocation]: updateCurrentLocationAction,
    [updateSearchLocation]: updateSearchLocationAction,
    [updatePoisBeingViewed]: updatePoisBeingViewedAction,
    [updatePoiBeingViewed]: updatePoiBeingViewedAction,
};

export default reducerHandlers;