const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    VIDEO_URL: process.env.VIDEO_URL,
    LOOP_COUNT: process.env.LOOP_COUNT,
    SLEEP_MS: process.env.SLEEP_MS,
};
