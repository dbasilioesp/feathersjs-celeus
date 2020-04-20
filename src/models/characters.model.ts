// characters-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Users } from "../services/users/users.class";

export default function(app: Application) {
  const modelName = "characters";
  const mongooseClient = app.get("mongooseClient");

  const { Schema } = mongooseClient;

  const schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      figure: { type: String, required: false },
      owner: { type: Schema.Types.ObjectId, required: true, ref: "Users" }
    },
    {
      timestamps: true
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
}
