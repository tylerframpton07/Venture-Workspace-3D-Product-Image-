# Venture 3D Studio — Mission 2

A browser based product modeling workspace, preloaded with the Quick Fold Board concept as editable mesh geometry. The original image is kept as a visual reference; the model is a procedural approximation, not an automatic image reconstruction. Its proportions are approximate.

## Run locally

Open `index.html` from a local web server. With Node.js and Vite available, run `npm install` and `npm run dev` in this folder. The production build is created with `npm run build`.

The viewport and GLB export load Three.js and its examples modules from jsDelivr. A network connection is needed for those modules. The app itself uses no paid service or API key.

## Use the studio

1. Drag in the canvas to orbit, scroll to zoom, or use the camera presets along its bottom edge.
2. Select a component in the scene list or click it in the model. Choose Move, Rotate, or Resize in the canvas toolbar, or type values in the inspector.
3. Change the selected part's color and material, add a component, or start from one of the editable templates.
4. Add concept images with **Add reference images**. Apply a surface decal with **Image decal**.
5. **Save project** stores an editable snapshot in this browser. Use **Export project** to make a portable JSON backup; **Import project** restores a project JSON file.
6. **Confirm model** validates the scene and downloads `Venture_3D_Confirmed_Handoff.zip`. It includes `model.glb`, `model-manifest.json`, `project.json`, `preview.png`, and `README.txt`.

Browser storage is local to this device and browser. Keep the JSON backup or handoff ZIP if you need to move the project or recover it after clearing browser data.

## GitHub Pages

`vite.config.js` sets the project base path to `/Venture-Workspace-3D-Product-Image-/`. The included Pages workflow builds and deploys this repository to its GitHub Pages project site whenever `main` is updated. Enable GitHub Pages with **GitHub Actions** as the source in repository settings.

## Contents

- `public/models/quick_fold_board.glb` — editable starting model geometry
- `src/main.js` — viewport, selection, tools, saving, project export, and confirmed handoff creation
- `styles.css` — responsive studio interface
- `vite.config.js` — GitHub Pages base path

## Current limitations

- Model generation is an authored procedural approximation; one image cannot establish exact hidden geometry or dimensions.
- The editor stores browser project snapshots as named parts and editable values. GLB is the portable mesh handoff.
- Three.js modules are CDN loaded, so the interactive editor needs network access in the browser. Core project backups and source files are local.
- The app has not been published because the requested GitHub repository could not be reached from this environment.
