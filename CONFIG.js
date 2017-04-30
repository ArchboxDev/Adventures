/*
    Don't touch these unless you know what you're doing.
    What you're looking for is probably further below.
*/

game.config.generation = {};
game.config.locale = {};

/*
    You're free to change all values below this line.
    Be sure to do it correctly.
*/

/*
    Overrides world generation to always set it to a specific type.
    Can be any valid world type.

    Default: "" (disabled)
*/
game.config.generation.typeOverride = "";

/*
    Locale the game should use.
    Should be the name of any file in the /locale/ dir, without the extension.
    
    Default: "en_UK"
*/
game.config.locale.default = "en_UK";

/*
    Locale the game should use if a translation wasn't found.
    Should be the most up-to-date locale file, with all translations.

    Default: "en_UK"
*/
game.config.locale.fallback = "en_UK";