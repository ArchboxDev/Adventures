/*
    Locale names are in IETF format.
*/

class _Locale {
    constructor(_toset, _fallback) {
        this.current = {};
        this.fallback = {};

        this._toset = _toset;
        this._fallback = _fallback;

        this.locales = {};

        this.translations = {};
    }

    LoadLocales() {
        const locales = fs.readdirSync("./locale");
        for (let _loc of locales)
            this.locales[_loc.split(".")[0]] = require(`./locale/${_loc}`);
    }

    ClearTranslations() {
        for (let k in this.translations) delete this.translations[k];
    }

    GetLocale(_locName) {
        return this.locales[_locName] || false;
    }

    SetLocale(_loc) {
        _loc = this.GetLocale(_loc) || _loc;

        this.ClearTranslations();

        this.current = _loc;

        for (let k in this.fallback) {
             this.translations[k] = this.fallback[k];
        }

        console.log(`Set fallback locale to ${this.fallback.locale.name} [${this.fallback.locale.code}]`);

        for (let k in this.current) {
            this.translations[k] = this.current[k];
        }

        console.log(`Set locale to ${_loc.locale.name} [${_loc.locale.code}]`);
    }

    Init() {
        this.LoadLocales();

        this.current = this.GetLocale(this._toset);
        delete this._toset;

        this.fallback = this.GetLocale(this._fallback);
        delete this._fallback;

        this.SetLocale(this.current);
    }

    get translation() {
        return this.translations;
    }
}

global.locale = new _Locale(game.config.locale.default, game.config.locale.fallback);
//global.locale = new _Locale("en_UK", "en_UK");

locale.Init();