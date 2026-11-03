// The GitHub Pages project site path matches the Mission 2 repository name.
export default {
  base: '/Venture-Workspace-3D-Product-Image-/',
  build: { rollupOptions: { external: (id) => id === 'three' || id === 'fflate' || id.startsWith('three/addons/') } },
};
