export const setToken = token =>
({
    type: setToken.toString(),
    payload: token
})

export const setUserImage = image =>
({
    type: setUserImage.toString(),
    payload: image
})

export const setUser = user =>
({
    type: setUser.toString(),
    payload: user
})

export const clearToken = () =>
    ({
        type: clearToken.toString(),
    })


setToken.toString = () => 'SET_TOKEN';
setUserImage.toString = () => 'SET_USER_IMAGE';
setUser.toString = () => 'SET_USER';
clearImmediate.toString = () => 'CLEAR_TOKEN';
