import { describe, it } from "vitest";
import dishImages from "../dishImages";

describe("Find remaining duplicates", () => {
  it("list all", () => {
    const imageToKeys: Record<string, string[]> = {};
    for (const [key, path] of Object.entries(dishImages)) {
      if (path === "/placeholder.svg") continue;
      if (!imageToKeys[path]) imageToKeys[path] = [];
      imageToKeys[path].push(key);
    }
    
    const duplicates = Object.entries(imageToKeys)
      .filter(([, keys]) => keys.length > 1)
      .sort((a, b) => b[1].length - a[1].length);
    
    console.log(`Duplicate groups: ${duplicates.length}`);
    // For each group, show which keys need NEW images (keep first, regenerate rest)
    const needNew: string[] = [];
    for (const [path, keys] of duplicates) {
      // Keep first key as-is, rest need new images
      for (let i = 1; i < keys.length; i++) {
        needNew.push(keys[i]);
      }
      console.log(`${path}: KEEP "${keys[0]}", NEW: ${keys.slice(1).join(", ")}`);
    }
    console.log(`\nTotal needing new images: ${needNew.length}`);
    console.log(JSON.stringify(needNew));
  });
});

