//type narrowing using the typwof
function toNumber(val: number | string): number {
    if(typeof val === "string"){
        return parseInt(val, 10);
    }
    return val;
}

//type narrowing using the "in" keyword
declare function getStandardSessionToken (name: string, ttl: number) : string;
declare function getAdminSessionToken (name: string, accessLevel: string) : string;

type StandardUser = {
    name: string;
    sessionTTL : number;
};

type AdminUser = StandardUser & {
    isAdmin: true,
    access: "read-admin" | "write-admin" 
};

function loggin(user: StandardUser | AdminUser){
    if ('isAdmin' in user){
        return getAdminSessionToken(user.name, user.access);
    }
    return getStandardSessionToken(user.name, user.sessionTTL);
}


//Type predicates
type user = StandardUser | AdminUser;

const users: user[] = [
    {name: "Prerna", sessionTTL: 3},
    {name: "Kavya", sessionTTL: Infinity, isAdmin: true, access: "read-admin"},
    {name: "Sam", sessionTTL: Infinity, isAdmin: true, access: "write-admin"},
    {name: "Trisha", sessionTTL: 5}
];

//used to filter the users 
//user => !('Admin' in user) this function is a predicate, a function which returns a boolean value
const StandardUser = users.filter((user): user is StandardUser => {
    return !(user as AdminUser).isAdmin; 
});       


//Discriminated unions
type StandardUser2 = {
    type: "standard";
    name: string;
    sessionTTL: number;
}

type AdminUser2 = {
    type: "admin";
    name: string;
    access: "read-admin" | "write-admin";
}

type ProspectUser = {
    type: "prospect"
}

type User2 = StandardUser2 | AdminUser2 | ProspectUser;

function login2(user: User2){

    //adding an exhausted switch
    switch(user.type){
        case "standard":
            return getStandardSessionToken(user.name, user.sessionTTL);
        case "admin":
            return getAdminSessionToken(user.name, user.access);
        case "prospect":
            return null;
        default:
            const notPossible: never = user;
            return;
    }
}