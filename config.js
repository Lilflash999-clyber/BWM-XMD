const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUW3OiSBj9L/0qM1wFtSpVK4iCKCp4wWzNQwMNtFwDDYgp//sWJqnkYWc2y1MX0KdPn8v3CrIcV8hAHZi8gqLEDSSoX5KuQGAC5DoIUAko4EMCwQQY+mbjBPHuKGs3EetsmhDXN25tdu0QPW1axrWdkF5rsdo+gTsFitpNsPcHQDdAy/leXpLNZS0nQqwX7Eudl8ck9SrxcDXOVcQaTjtPsukTuPeIEJc4C9UiQikqYWKgbgtx+T36J9Mo5o1itdLZccdBTjB9yurnolml9jzbETOea6Tg4FwTvkd/vS1mnHkOIv9ldTM73Tab1BEk7aZ5PmzTrRHzGJm+mie7N/oVDjPk6z7KCCbdt3VXZlpSe12+y/fDxUyDjMmPjq2557OEmftb6xocNYeodqCF3yO+FZtVylaRslgp6aWDhUaW8Xkn7fkSynrriAMmLDjJ56bMV+Lb8iMr8f/R/bBgT3laEJfeMPNZFbLHcr3QXgTMWs9ZfS5klVaGeCqekvh79MMoVvkb7ZiH9VVePytLsT51jKHhVOkMaT68SHwhHbxtw+mf9CGpyz+xnKrXl1Jy4oYsV3UdnukBqZ47uxnkW6e1qjkboY06LvbwiJ1dE2lqthZutzDaKniMFyHncrtgsLjQ8lE/W0MmMxf1AYdPjxvFqNN9MGHvFChRiCtSQoLzrH8nSBSAfmMjr0TkoS6g2bzq9G4120aXpTCq9Wh6RuNdy+7kl6UHdyv95IpJUT/n4ROgQFHmHqoq5Gu4InnZrVFVwRBVYPL3Lwpk6ErefOtP41kKBLisyCGriySH/oepHx+h5+V1Ruwu85R+gUowYT5fI0JwFla9jHUGSy/CDVIiSCowCWBSoTsFfNRgD/V4YHeKjdGu8S0NneTDkM1sm5fCnnKUZ2+/uALyBGHo/RAQdH8IQ4/5MR6Ogx/eOEAeYjgYjIaAAvi9Mv2e3zp4Pq7jrZlxJyjTJx6PtLWy2Ug3fTDXHy68SY9K5IMJKWtEARd6cV3s8xhlf8AVVC1FfKyKW8uURvHY1wp6FS6Szgi/4L5ZCiavn2NKyf0ez9obvGGfVUCB9JFA3N+c4wWJERhmNGY5fsKN/qp+tr2SsCh+Zoj0wO+q91t8RCBOqn4YrDR/MGBMda0FI6ldLKZxOFXCKfh06SPtb3EyuKAYq2qClLoLAzEQijlhW7h1fIn2dcOWgyOhG7u0GO/pX0DABAyMXbW6kci4NM9WaLM7TgklutoXtayMQ/7o7uGLd2zHh8slqKT4plzp/UwMtNZSmIJ/Pmjzfa2t2ot4jGU5jYPbcLm59NX4SMvXw1p04ESnZfFclTahpo5HogH5QChTcSA47gxyteqz69Pq1hyvlzr3q/DkNpvL7HhqTcNc1FZUnwJhvLguI0OYLqzY9C/Ttx4+5kDyPn/xoyKv79kKMHqMswz2Hv2nO19zztypLyDvE/I3WZJtkomBJS+dsKxybZANDMv1vcWF5RHN20ocOqwbSMwL42vgfv9FgSKBJMjLFEwAfvQGUCCBFZl+NnWPU1QRmBZgwkr8iOdH3JCnQNpNi8ImkHwUHEz7RxlY4P4PN6M/rPsHAAA=",
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

