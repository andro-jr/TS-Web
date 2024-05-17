import { User } from "./models/User";

const user = new User({ name: "Prabin", age: 44 });

console.log(user.get("age"));

user.set({ age: 55 });

console.log(user.get("age"));
