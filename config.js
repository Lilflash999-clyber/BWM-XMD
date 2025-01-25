const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXW+qSBj+L3MrPXwKaNJkgSIIVVFR0c25GGHAERgQBpQ2/vcTbZt2kz1nu1xNgHnmmefjfQWkwDVyUQeGr6CscAspui1pVyIwBHoTx6gCDIgghWAI5uOAOl7Ho/08vpy71Wirjvo9WK24XbKY+/qihPNosE7zdPsIrgwom32Gwz8Ajjqrh+1J31RUe7/2t5e5MZLN/tlciPuzc9xjFFjyyXT3JHkE1xsixBUmiVkeUI4qmLmo8yCuvkdfsht3uXYdZR/7aNsuL4YQt57CcnkjHIpgfjj7Vl8IU4+XvkdfmJXP8sLbcLNI00TnUJPjyqsGpChqaUOMHe715iVJkGVs3+jXOCEoGkeIUEy7b+uueQOWHdSXp+3SN+Hi2aBS3NlP6WDGaaKqC5ki494Jm5WgfY/42jW60D5Ps17m4VKY+Zsk5iuBd0Ift+z4sj7miqcsnYb8g7hXfWQl/T+6JwaZz+B8su3pE7fhG2tiepYzw5pH+iYSQl7NZG7Uzqg9/h59neP3PIWLbKOr3tSb6i+N+jSvsv3JurhseFYDiiYLhKyF+Ukf0qb6E8tDu0ceOqj+KRClUyEbzqrRg+ypnJFL1mnr9XkZC1GANdxExzgwxA0bDDLzydgvvRXNGtbtXzTbPkFj1jq5M+gHav9wfrzfKEXdOAJD/sqACiW4phWkuCD3d5zAABi1SxRWiN7lBUURcO0USkLIW+2lPswrGL50/Exqp2w09mcyOYtpAr3JjnsEDCirIkR1jSIb17Sougmqa5igGgz//skAgi70zbjbcSLPgBhXNV2RpswKGH24+vERhmHRELrsSGjcFqgCQ+7zNaIUk6S+6dgQWIUH3CLjAGkNhjHManRlQIRaHKIbHuB9/6IL29XSOZW6tcF8omU4uVE+FOTtFySoCCpy/BBGovQgRSJ8UGU1fEA8jKKBJOzDAQQMwO+due35rYVqb+PwBetn2gu/9nY6cecDwYA2Hp3vNrxpjyoUgSGtGsSAPQzTpvSLFJE/4I6n41Fg86p1tL1u10XsIBTz1UR4HmlfcN88BcPXzzllFNENzx+JkmxrDmBAfo8gvt1cECWFkzhOHfCCOOSVv+of55uSsCx/EERvwO+q37ZEiEKc1WAIDK/r1c+FZXq45p/PlqWNE81INPDp0kfc3+LkCnE5MM0MGU2XxHIslSPKn6EXRAobjd2lHq8p2y6rBRc+/gsIGIKaLI4dCvt6JF9WnTYnaS3m7HaSdaxzkqf9Jj9Bwpn2CaGNu9kILCKa4Blhe5ZQdN6kL3yljh2pkvlK6QlccJT7u3s3PtLy9TBU2FAZqelSwNNTWk5rP2qP65k81tKLmcVFLDujHcqtJxi2mXryfEkKWj7zFH3CvmTy9MSVim6NtTJv7WK1EZynnYLnb0W8D4LsfQDje0Ve37MVY3SfZwTePPpPd77mnLsyX0DeR+TvZteSEjle6E6QVHVh90jPXeyj0DryImLFpZEmAb+PFe7ERTa4Xn8yoMwgjYsqB0OA770BDMhgTbXPpvo4RzWFeQmGvCIqqiCqisKAvNPKckkh/Sg40G6Pi3fg+guQmj87/AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

