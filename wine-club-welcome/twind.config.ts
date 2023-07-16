import { defineConfig } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
import presetTailwindForms from "https://esm.sh/@twind/preset-tailwind-forms@1.1.2";
import presetTypography from "https://esm.sh/@twind/preset-typography@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind(), presetAutoprefix(), presetTailwindForms(), presetTypography()],
  }),
  selfURL: import.meta.url,
};