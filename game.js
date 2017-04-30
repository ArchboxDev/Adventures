const config = {};

global.game = {};
game.config = {};

const _requires = require("./requires.json");
for (let _mod in _requires.PreInitGlobals) try{global[_mod] = require(_requires.PreInitGlobals[_mod])}catch(e){console.log(`Ignoring error while requiring ${_mod}: ${e}`)};
for (let _mod of _requires.PreInit) try{require(_mod)}catch(e){console.log(`Ignoring error while requiring ${_mod}: ${e}`)};

class _Game {
    constructor() {
        this.config = game.config;

        this.world = {};
    }

    Initialize() {
        console.log();
        this.msg("GameInit");
        console.log();

        this.world = world.Create();
    }

    msg(_msg) {
        if (locale.translation[_msg]) {
            console.log(locale.translation[_msg])
        } else {
            console.log(_msg);
        }
    }
}

global.game = new _Game();

game.Initialize();