// Initializes the `uploads` service on path `/uploads`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import hooks from "./uploads.hooks";
const blobService = require("feathers-blob");
const fs = require("fs-blob-store");

const blobStorage = fs("./uploads");

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    uploads: ServiceAddons<any>;
  }
}

export default function(app: Application) {
  // Initialize our service with any options it requires
  app.use("/uploads", blobService({ Model: blobStorage }));

  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
}
