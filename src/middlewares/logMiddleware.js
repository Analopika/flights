function log(req, res, next) {
    const ip =
        req.headers['x-forwarded-for']?.split(',')[0] ||
        req.socket?.remoteAddress ||
        req.ip; 

    const logData = {
        method: req.method,
        url: req.originalUrl,
        ip: ip,
        userAgent: req.headers["user-agent"],
        timestamp: new Date().toISOString(),
    };
    req.logData = logData;
    next();
}

export default log;