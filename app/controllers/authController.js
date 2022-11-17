const authController = {
    login: async (req, res) => {
        try{
            const {password} = req.body;
            if(password == null){
                console.log("password vide");
                return response.status(400).json("Empty password");
            }
            if(password !== process.env.admin_password){
                console.log("password différent de l'admin");
                return response.status(400).json("Incorrect password");
            }
            const token = jwt.sign(
                {role: 'admin'} ,
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1h" },
                (err, token) => {
                  if (err) {
                    response.status(400).json({err})
                  }
                  response.json({ token });
                }
              );
              
            console.log(token);
            return token

        } catch (e){
            console.error(e);
        }
    },

    authorization: async(req, res, next) => {
        const validToken = jwt.verify(request.token, process.env.ACCESS_TOKEN_SECRET, (error, results) => {
            if(error){
                console.error(error);
                return response.status(500);
            }
        console.log(results);
        });
        if(!validToken){
            login();
        }
        next();

    }
}

export default authController;