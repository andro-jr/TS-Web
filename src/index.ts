import { User } from "./models/User";

const user = new User({ id: 8, name: "Bari Bahadur" });

user.on("save", () => {
  console.log("User was saved!", user);
});

user.fetch();

user.save();
