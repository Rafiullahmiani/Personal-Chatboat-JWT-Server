import jwt from "jsonwebtoken";

export const signJWT = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
      expiresIn: "15m", // recommended to add expiry
    });
    console.log("Generated token:", token);
    return token;
  } catch (err) {
    console.error("JWT Sign Error:", err.message);
    return null;
  }
};

export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    return decoded; // return full payload, not just true
  } catch (err) {
    console.error("JWT Verify Error:", err.message);
    return null;
  }
};
