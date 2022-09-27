// @ts-check
import { defineConfig, PostCommandPlugin, Styling, Framework } from "agrippa";

export default defineConfig({
  options: {
    baseDir: "src/components",
    styling: Styling.SCSS,
    typescript: true,
    framework: Framework.REACT,
  },
  plugins: [new PostCommandPlugin("code -r <componentPath>")],
});
