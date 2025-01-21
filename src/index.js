import { Container } from "./container.js";
import { UserService, ConfigurableService } from "./service.js";

const container = new Container();

container.register("UserService",UserService);
container.register("ConfigurableService",ConfigurableService);

console.log(container.getBindings());

const myService = container.resolve("ConfigurableService");
console.log(myService); // ConfigurableService { userService: UserService {} }