if (!global.game)
    throw new Error("Game not defined. This isn't the game.js file or you messed up.");

const worlds = {};
const _worlds = fs.readdirSync("./world/worlds");

let world_count = 0;

for (let _w of _worlds) {
    world_count = world_count+1;
    worlds[_w.split(".")[0]] = require(`./world/worlds/${_w}`);
}

class _World {
    constructor() {
        this.type = {};
    }

    Begin() {
        game.msg(`World${this.type.name}Start`);
    }

    Generate() {
        game.msg("WorldGenerating");
        this.Begin();
    }

    Create() {
        game.msg("WorldCreating");

        const override = game.config.generation.typeOverride;
        if (override) {
            this.type = worlds[override];
        } else {
            let _s = Math.floor(Math.random()*world_count);
            let _l = 0;

            for (let _w in worlds) {
                 if (_l===_s)  {
                    this.type = worlds[_w];
                    break;
                 }
                _l = _l+1;
            }
        }

        //console.log(`Selected world type: ${this.type.name}`);

        this.Generate();
    }
}

global.world = new _World();