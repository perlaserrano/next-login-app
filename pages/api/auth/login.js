import { Jwt } from "jsonwebtoken"
import { serialize} from "cookie"

export default function login(req,res) {
   const{email, password} =  req.body


   if(email === 'admin@local.local' && password === 'admin'){
    // const token = Jwt({
    //   exp:Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
    //     email:'admin@local.local',
    //     username:'perla'
    //  }, 'secret')


     const serialized = serialize('myToken', token,{
      httpOnly:true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path:'/'  
  
     })

     res.setHeder('Set-Cookie', serialized)
     return res.json('login succesfully')

   } 
   
 return res.status(401).json({error:'invalid email or password'})

}