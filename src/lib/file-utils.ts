import * as fs from "fs";

export function isDirectory(path: string): boolean {
  return fs.statSync(path).isDirectory();
}

export function generateRandomFilename(length: number): string {
  let filename: string = "";
  const validChar: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    // eslint-disable-next-line no-restricted-properties
    filename += validChar.charAt(Math.floor(Math.random() * validChar.length));
  }

  return filename;
}

export function fileDoesNotExistOrIsDirectory(path: string): boolean {
  try {
    return isDirectory(path);
  } catch (error) {
    return true;
  }
}
