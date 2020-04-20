import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";

export class Users extends Service {
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }

  async create(data: object, params: any): Promise<any> {
    return super.create(data);
  }
}
