export class Container {
  constructor() {
    this.bindings = {};
  }
  
  register(key, value) {
    try  {
      if (this.bindings[key]) {
        throw new Error(`Type ${key} is already bound.`);
      } else {
        this.bindings[key] = value;
      }
    } catch (error) {
      console.error(error);
    }
  }

  resolve(key) {
    const implementation = this.bindings[key];
    if (!implementation) {
      throw new Error(`No binding found for key: ${key}.`);
    }

    if (typeof(implementation) === 'function') {
      const dependencies = implementation.dependencies || [];

      const resolvedDependencies = dependencies.map((dependency) => {
        return this.resolve(dependency);
      });

      console.log(`Resolving ${key} with dependencies: ${dependencies}`);
      return new implementation(...resolvedDependencies);
    } else {
      return implementation;
    }
  }
  
  getBindings() {
    return this.bindings;
  }
}