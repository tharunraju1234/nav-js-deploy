
import { defineConfig } from "vite";

export default defineConfig({
    assetsInclude: ["**/*.gltf"],
    base: "/nav-js-deploy/",
    publicDir: "static/",
    server: {
        host: true,
    },
 
});
