// Decorator to persist the decorators of the properties
function persistDecorators(decorators: PropertyDecorator[]): PropertyDecorator {
  return (target, propertyKey) => {
    for (const decorator of decorators) {
      decorator(target, propertyKey);
    }
  };
}

// PickType function
function PickType<T, K extends keyof T>(
  type: new () => T,
  keys: K[]
): new () => Pick<T, K> {
  const pickedType = class {
    constructor() {
      const instance = new type();

      for (const key of keys) {
        const propertyDescriptor = Object.getOwnPropertyDescriptor(
          type.prototype,
          key
        );
        if (propertyDescriptor) {
          const { value, writable, enumerable, configurable } =
            propertyDescriptor;
          Object.defineProperty(this, key, {
            value,
            writable,
            enumerable,
            configurable,
          });
        }
      }
    }
  };

  // Copy decorators from the original class
  const originalDecorators = Reflect.getMetadataKeys(type.prototype);
  for (const key of originalDecorators) {
    const decorators = Reflect.getMetadata(key, type.prototype);
    if (decorators) {
      Reflect.defineMetadata(key, decorators, pickedType.prototype);
    }
  }

  // Copy property decorators from the original class
  for (const key of keys) {
    const propertyDecorators = Reflect.getMetadataKeys(type.prototype, key);
    for (const decoratorKey of propertyDecorators) {
      const decorators = Reflect.getMetadata(decoratorKey, type.prototype, key);
      if (decorators) {
        const persistedDecorators = decorators.map(
          (decorator: PropertyDecorator) => persistDecorators(decorator)
        );
        Reflect.defineMetadata(
          decoratorKey,
          persistedDecorators,
          pickedType.prototype,
          key
        );
      }
    }
  }

  return pickedType;
}
