import { makeAutoObservable } from "mobx";

export default class BrandStore {

    constructor() {
        this._brands = [];
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setSelectedBrand = (brandItem) => {
        this._selectedBrand = brandItem;
    };

    get selectedBrand() {
        return this._selectedBrand;
    }

    setBrands(brands) {
        this._brands = brands
    }

    get brands() {
        return this._brands
    }
}
