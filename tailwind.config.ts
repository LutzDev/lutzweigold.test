import type { Config } from 'tailwindcss';
import safelist from './tailwind/safelist';
import theme from './tailwind/theme';

export default <Partial<Config>>{
  theme,
  safelist,
};
