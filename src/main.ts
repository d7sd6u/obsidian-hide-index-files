import { FileExplorerView } from "obsidian-typings/src/obsidian/internals/InternalPlugins/FileExplorer/FileExplorerView";
import PluginWithSettings from "../obsidian-reusables/src/PluginWithSettings";
import { isIndexFile } from "../obsidian-reusables/src/indexFiles";
import {
	iterateAllInstancesOfView,
	patchView,
} from "../obsidian-reusables/src/patchingUtils";

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
				onRename(next) {
					return function (...args) {
						next.apply(this, args);
						const item = this.fileItems[args[0].path];
						if (item)
							if (isIndexFile(args[0])) {
								item.el.style.display = "none";
							} else {
								item.el.style.display = "";
							}
					};
				},
			});
			this.reloadFileExplorerView(view);
		});
	}
	private reloadFileExplorerView(view: FileExplorerView) {
		view.fileItems = {};
		view.files.map = new WeakMap();
		view.load();
	}
	override unload() {
		this.uninstallPatches();
		iterateAllInstancesOfView(this.app, "file-explorer", (view) => {
			this.reloadFileExplorerView(view);
		});
	}
}
