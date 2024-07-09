
import { defineConfig } from "vite";

export default defineConfig({
    assetsInclude: ["**/*.gltf"],
    base: "/nav3/",
    publicDir: "static/",
    server: {
        host: true,
    },
 
});
