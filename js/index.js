import { Container } from "./container.js";
import { UserService, ConfigurableService } from "./service.js";

const container = new Container();

container.register("UserService",UserService);
container.register("ConfigurableService",ConfigurableService);

const myService = container.resolve("ConfigurableService");
