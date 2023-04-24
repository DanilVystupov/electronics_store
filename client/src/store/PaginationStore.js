import { makeAutoObservable } from "mobx";

export default class PaginationStore {

    constructor() {
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3
        makeAutoObservable(this);
    }

    setPage(page) {
        this._page = page;
    };

    get page() {
        return this._page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    };

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}
