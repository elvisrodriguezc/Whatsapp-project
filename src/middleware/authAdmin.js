const authAdmin = (req,res,next) =>{
if (req.user.rol) {
    res.status(401).json({
        status: 401,
        message: `You dont have clerance`,
    });
}
else if (req.user.rol !== 'admin') {
    res.status(401).json({
        status: 401,
        message: `You dont have clerance`,
    });
} else {
    next()
    }
}

module.exports = {
    authAdmin
}