const jwt = require("jsonwebtoken")


async function identifyUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token in invalid, Unauthorized access"
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        res.status(401).json({
            message: " User Not Authorized"
        })
    }

    req.user = decoded 

    next()
}

// forward the request to (req.user)

module.exports = identifyUser