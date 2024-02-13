import {
  getProjectRoot,
  resolvePathInStorybookCache,
} from '@storybook/core/dist/modules/core-common/index';
import { getVirtualModules } from '@storybook/builder-webpack5';
import type { Options } from '@storybook/core/dist/modules/types/index';

export const configureBabelLoader = async (baseConfig: any, options: Options) => {
  const { virtualModules } = await getVirtualModules(options);

  const babelOptions = await options.presets.apply('babel', {}, options);
  const typescriptOptions = await options.presets.apply('typescript', {}, options);

  baseConfig.module.rules = [
    ...baseConfig.module.rules,
    {
      test: typescriptOptions.skipCompiler ? /\.((c|m)?jsx?)$/ : /\.((c|m)?(j|t)sx?)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: resolvePathInStorybookCache('babel'),
            ...babelOptions,
          },
        },
      ],
      include: [getProjectRoot()],
      exclude: [/node_modules/, ...Object.keys(virtualModules)],
    },
  ];
};