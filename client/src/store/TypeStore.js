import { makeAutoObservable } from "mobx";

export default class TypeStore {

    constructor() {
        this._types = [];
        this._selectedType = {};
        makeAutoObservable(this);
    }

    setSelectedType = (typeItem) => {
        this._selectedType = typeItem;
    };

    get selectedType() {
        return this._selectedType;
    }

    setTypes = (types) => {
        this._types = types;
    };

    get types() {
        return this._types;
    }
}
