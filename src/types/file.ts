export type FileCollection = { [path: string]: string };

export type FileTreeItem = string | [string, ...FileTreeItem[]];

export interface IFileTreeNode {
  [key: string]: IFileTreeNode | null;
}
