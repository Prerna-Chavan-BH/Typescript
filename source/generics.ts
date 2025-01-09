//this is making the types generic as now this function works with any type (number, string, boolean)
//<T> this type variable place holder
const echo = <T>(arg: T): T => arg

//////////////////////////////////

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null))

///////////////////////////////////

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: 'Dave' }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

////////////////////////////////////

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }                    //(!!arg this s double bang, which will put a 0 and flip it to 1 and it returns a boolean)
}

//////////////////////////////////////


interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here 
    return user
}

console.log(processUser({ id: 1, name: 'Dave' }))
//console.log(processUser({ name: 'Dave'}))

///////////////////////////////////////

//complex as the T type variable is succeeded by type variable K
const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Prerna Chavan",
        "username": "PC",
        "email": "prerna.chavan@gmail.com",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "67887878738",
        "website": "pc.org",
        "company": {
            "name": "Baker Hughes",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Kavya Pawar",
        "username": "kv12",
        "email": "kavyapawar@gmail.com",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "2332326635",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

///////////////////////////////////////

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

//this will only accept the string and not a number cuz it is defined for a string
const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
//store.state = 12

//heres hpw this issue is resolved
const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Dave', 42, true]
console.log(myState.state)