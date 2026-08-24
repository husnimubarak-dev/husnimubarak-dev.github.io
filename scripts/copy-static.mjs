import { cp, mkdir, rm } from "node:fs/promises";

await rm("./dist", { recursive: true, force: true });
await mkdir("./dist", { recursive: true });

await cp("./src/index.html", "./dist/index.html");
await cp("./src/assets/images", "./dist/assets/images", { recursive: true });
await cp("./src/assets/documents", "./dist/assets/documents", { recursive: true });
await cp("./src/assets/js", "./dist/assets/js", { recursive: true });
