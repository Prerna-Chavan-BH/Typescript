class Coder {

    secondLang!: string

    constructor(
        //public, private, protected are added as a visibilty modifiers
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const loop = new Coder('Prerna', 'Chavan', 22)
console.log(loop.getAge())
// console.log(loop.age)                //this wont be accessed as it is set to private so accessible only in the class
// console.log(loop.lang)               //this wont be accessed as it is set to protected so accessible only in the class

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)
/////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist1 implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist1('Jimmy', 'guitar')
console.log(Page.play('strums'))
//////////////////////////////////////

//Here the statics will directly reply to a class and not a specific object
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count             //++ is put before so that the first id should be 1 and not zero
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)
//////////////////////////////////
//Getter and Setter
//implementing a interface to the class
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }
    //getter
    public get data(): string[] {
        return this.dataState
    }
    //setter
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            // return this.dataState = value        //setter cant specifically return any value it can only return a empty value hence this line will throw err 
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']              //setter is being set here
console.log(MyBands.data)                               //getter
// MyBands.data = ['Van Halen', 5150] // must be string data