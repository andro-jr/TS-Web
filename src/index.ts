import { User } from "./models/User";

const user = new User({ name: "Prabin" });

user.on("change", () => {
  console.log("User was changed!");
});

user.set({ name: "New Name" });
