//model to list the items
export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) { } //this is empty cuz the constructor created is private and theres no need to pass in anythiing as suh if thats done it only will double up the things

    //getter
    get id(): string {
        return this._id
    }

    //setter
    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}