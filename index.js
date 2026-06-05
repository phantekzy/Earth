import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.appendChild(renderer.domElement);
