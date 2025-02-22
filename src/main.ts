import PluginWithSettings from "../obsidian-reusables/src/PluginWithSettings";
import { isIndexFile } from "../obsidian-reusables/src/indexFiles";
import { patchView } from "../obsidian-reusables/src/patchingUtils";

export default class Main extends PluginWithSettings({}) {
	override onload(): void {
		patchView(this.app, "file-explorer", (view) => {
			this.registerPatch(view, {
				onCreate(next) {
					return function (...args) {
						next.apply(this, args);
						if (isIndexFile(args[0])) {
							const item = this.fileItems[args[0].path];
							if (item) item.el.style.display = "none";
						}
					};
				},
			});
			view.fileItems = {};
			view.files.map = new WeakMap();
			view.load();
		});
	}
}
