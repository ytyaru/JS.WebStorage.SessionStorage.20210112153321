export default class SessionStorageTest {
    #key = 'some-key';
    #value = new Date();
    constructor(key=null, value=null) {
        console.log(sessionStorage);
        this.#key = key || this.#key;
        this.#value = value || this.Value || this.#value;
    }
    get Keys() { return this.#GetKeys(); }
    get Key() { return this.#key; }
    get Value() { return sessionStorage.getItem(this.#key); }
    set Value(value) { if(value) { sessionStorage.setItem(this.#key, value); } }
    * #GetKeys() {
        for (let i=0; i<sessionStorage.length; i++) {
            yield sessionStorage.key(i);
        }
    }
    get(key) { return sessionStorage.getItem(key); }
    set(key, value) { if (key && value) { sessionStorage.setItem(key, value); } }
    remove(key) { sessionStorage.removeItem(key); }
    clear() { sessionStorage.clear(); }
}

