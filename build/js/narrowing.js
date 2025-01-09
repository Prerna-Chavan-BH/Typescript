"use strict";
//type narrowing using the typwof
function toNumber(val) {
    if (typeof val === "string") {
        return parseInt(val, 10);
    }
    return val;
}
function loggin(user) {
    if ('isAdmin' in user) {
        return getAdminSessionToken(user.name, user.access);
    }
    return getStandardSessionToken(user.name, user.sessionTTL);
}
const users = [
    { name: "Prerna", sessionTTL: 3 },
    { name: "Kavya", sessionTTL: Infinity, isAdmin: true, access: "read-admin" },
    { name: "Sam", sessionTTL: Infinity, isAdmin: true, access: "write-admin" },
    { name: "Trisha", sessionTTL: 5 }
];
//used to filter the users 
//user => !('Admin' in user) this function is a predicate, a function which returns a boolean value
const StandardUser = users.filter((user) => {
    return !user.isAdmin;
});
function login2(user) {
    //adding an exhausted switch
    switch (user.type) {
        case "standard":
            return getStandardSessionToken(user.name, user.sessionTTL);
        case "admin":
            return getAdminSessionToken(user.name, user.access);
        case "prospect":
            return null;
        default:
            const notPossible = user;
            return;
    }
}
