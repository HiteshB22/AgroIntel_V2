export const errorhandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success : false,
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? {} : err.stack
    });
}