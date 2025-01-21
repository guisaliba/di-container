export class UserService {
  static dependencies = [];

  constructor() {
    console.log('UserService initialized');
  }
}

export class ConfigurableService {
  static dependencies = ["UserService"];

  // the constructor will receive the UserService instance as a parameter. it depends on it.
  constructor(userService) {
    this.userService = userService;
    console.log('ConfigurableService initialized with UserService');
  }
}