# Hide Index Files

Hide folder notes from the file explorer. Use with [folder-notes](https://github.com/LostPaul/obsidian-folder-notes) for the full experience.
![side by side comparison of file explorer without and with a plugin](./docs/comparison.png)

## Why not just `folder-notes`?

`folder-notes` uses direct DOM patching and vault's `on(event)` listeners that may misbehave and be out of sync with file explorer's DOM tree. That causes `folder-notes` to fail to hide some of the folder notes. This is especially prominent with [lazy-cached-vault-load](https://github.com/d7sd6u/obsidian-lazy-cached-vault-load). This plugin on the other hand patches tree items directly and works flawlessly.

## Other plugins

- [lazy-cached-vault-load](https://github.com/d7sd6u/obsidian-lazy-cached-vault-load) - Reduces startup time on mobile to 2-3 seconds, even with a vault containing 30k+ notes.
- [reveal-folded](https://github.com/d7sd6u/obsidian-reveal-folded) - Adds a command that reveals the current file in the file explorer while collapsing all other items.
- [auto-folder-note-paste](https://github.com/d7sd6u/obsidian-auto-folder-note-paste) - Ensures your attachments are placed inside your note when pasting or using drag-and-drop by converting your note into a folder note.
- [folders-graph](https://github.com/d7sd6u/obsidian-folders-graph) - Adds folders as nodes in graph views.
- [hide-index-files](https://github.com/d7sd6u/obsidian-hide-index-files) - Hides folder notes (index files) from the file explorer.
- [crosslink-advanced](https://github.com/d7sd6u/obsidian-crosslink-advanced) - Adds commands for managing [ftags](https://github.com/d7sd6u/obsidian-lazy-cached-vault-load?tab=readme-ov-file#wait-a-minute-what-are-folderindex-notes-what-are-ftags-what-do-you-mean-annexed)-oriented vaults: adding ftags, creating child notes, opening random unftagged file, etc.
- [virtual-dirs](https://github.com/d7sd6u/obsidian-virtual-dirs) - Adds 'virtual' folder files or folder indexes. You can open and search for them, but they do not take up space and 'materialize' whenever you need a real folder note.
- [viewer-ftags](https://github.com/d7sd6u/obsidian-viewer-ftags) - add ftags as chips on top of markdown/file editors/previews. And children as differently styled chips too!
- [git-annex-autofetch](https://github.com/d7sd6u/obsidian-git-annex-autofetch) - Allows you to open annexed files that are not locally present as if they were on your device (essentially, an NFS/overlay-fs hybrid in Obsidian).

## Contributing

Issues and patches are welcome. This plugin is designed to work with other plugins, and I will do my best to support this use case. However, I reserve the right to refuse support for any plugin at my discretion.
