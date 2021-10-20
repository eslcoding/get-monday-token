const KEY = 'loggedInUser';

export const storeUserToSession = user => {
    sessionStorage.setItem(KEY, JSON.stringify(user));
}

export const getUserFromSession = _ => {
    return JSON.parse(sessionStorage.getItem(KEY));
}

