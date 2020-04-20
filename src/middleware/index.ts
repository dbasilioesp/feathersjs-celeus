import { Application } from "../declarations";
import CharacterModel from "../models/characters.model";
import Service from "feathers-mongoose";
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
  app.use("/todos", {
    async get(id, params: any) {
      const users = app.service("users");
      const result = await users.create({ email: "llla@lla.com" });
      console.log(result);
      return result;
    }
  });
}
