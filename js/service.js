export class UserService {
  static dependencies = [];

  constructor() {}
}

export class ConfigurableService {
  static dependencies = ["UserService"];

  // the constructor will receive the UserService instance as a parameter. it depends on it.
  constructor(userService) {
    this.userService = userService;
  }
}