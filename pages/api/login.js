const users = [
  {
    username: "iam",
    password: "supersecret",
  },
];

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;

      if (!username) throw Error("Username must not be empty");
      if (!password) throw Error("Password must not be empty");

      const user = users.find((user) => user.username === username);
      if (!user) throw Error("User not registered");

      const valid = user.password === password;
      if (!valid) throw Error("Invalid Password");

      res.status(200);
      return res.json({
        username: user.username,
      });
    } catch (error) {
      res.status(400);
      res.json({
        status: 400,
        message: error.message,
      });
    }
  } else {
    res.status(405);
    res.json({
      status: 405,
      message: "Request method not allowed",
    });
  }
};
