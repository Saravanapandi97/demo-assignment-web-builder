import grapesjs from "grapesjs";
import loadCarousel from "./CarouselBlocks";
import loadCarouselBlocks from "./CarouselComponent";

export default grapesjs.plugins.add("carousel", (editor, opts = {}) => {
  let options = {
    label: "carousel",
    name: "carousel",
    category: "Custom",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadCarouselBlocks(editor, options);
  loadCarousel(editor, opts);
});
