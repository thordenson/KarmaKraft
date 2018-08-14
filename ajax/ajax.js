import {APIHost} from '../environment/config';

export let createAccount = (user) =>
    fetch(APIHost = '/users', {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())

export let signIn = (user) =>
    fetch(APIHost + '/signin', {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())

export let getProfileThumbnailImage = (token) =>
    fetch('/profile', {
        body: JSON.stringify(token),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())

export let getUserProfile = (token) => {
    console.log(token);
        return (
    fetch(APIHost + '/my-profile', {
        method: 'GET',
        headers: {
        authorization: token,
            'content-type': 'application/json'
        }
    })
    .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())
    )
}