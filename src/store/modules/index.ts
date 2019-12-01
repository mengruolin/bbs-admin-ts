const contexts = require.context('.', true, /index\.ts$/);

const modules: any = {};

contexts.keys().forEach((key) => {
  if (key !== './index.ts' && key !== './global/index.ts') {

  const regArr: any[] | null = key.match(/\.\/(.*)\//);
  const moduleName: string = regArr![1];
  modules[moduleName] = contexts(key).default;

  }
});

export default modules;
