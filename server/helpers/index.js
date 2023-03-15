const allowedOrigins = [process.env.VALID_ORIGIN_1, process.env.VALID_ORIGIN_2];

export const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

