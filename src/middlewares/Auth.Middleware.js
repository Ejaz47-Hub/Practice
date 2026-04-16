import jwt from "jsonwebtoken"

const AuthMiddleware = async(req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({message:"Token Required"})
    }

    try {
         const decode = jwt.verify(token,process.env.JWT_SECRET)
         req.user = decode
         next()
    } catch (error) {
        return res.status(401).json({message:"Invalid Token"})
    }
}

export default AuthMiddleware