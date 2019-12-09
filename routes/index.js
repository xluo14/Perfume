const rootRoutes = require("./root");
const userRoutes = require("./users");
const perfumeRoutes = require("./perfumes");
const commentRoutes = require("./comments")

const constructorMethod = app => {
  app.use("/", rootRoutes);
  app.use("/users",userRoutes);
  app.use("/perfumes",perfumeRoutes);
  app.use("/comments",commentRoutes);

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;