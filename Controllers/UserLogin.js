import { signJWT } from "../Utils/jwt.js";

export const UserLogin = async (req, res) => {
  const { email,password } = req.body;

try{
    const jwtToken = signJWT({email:email,password:password});
    res.status(200).json({
      ok: true,
      token:jwtToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
    });
  }
};
