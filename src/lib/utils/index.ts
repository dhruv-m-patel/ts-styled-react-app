import handlers from 'shortstop-handlers';

export function betterRequire(basePath: string) {
  const baseRequire = handlers.require(basePath);
  return function hashRequire(v: any) {
    const [moduleName, func] = v.split('#');
    const module = baseRequire(moduleName);
    if (func) {
      if (module[func]) {
        return module[func];
      }
      return baseRequire(v);
    }
    return module;
  };
}

export function readConfiguration(configFactory: any) {
  return new Promise((resolve, reject) => {
    configFactory.create((err: Error, config: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(config);
    });
  });
}
