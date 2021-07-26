import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Int8Attribute } from 'three';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(60);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry( 25, 2, 16, 100, 7, 25);
const material = new THREE.PointsMaterial({ size : 0.005});
const torus = new THREE.Points(geometry, material);

scene.add(torus);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,55,15);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addstar() {
  const geometry = new THREE.SphereGeometry(0.65, 64, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(800));

  star.position.set(x, y, z);
  scene.add(star);
}


Array(200).fill().forEach(addstar);

// Background

const spaceTexture = new THREE.TextureLoader().load('../images/space.jpg');
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('../images/city.jpg');

const jeff = new THREE.Mesh(new THREE.SphereGeometry(10, 60, 1000,30,15,70,700), new THREE.MeshBasicMaterial({ map: jeffTexture }));

scene.add(jeff);

// Avatar2

const meteTexture = new THREE.TextureLoader().load('../images/ground.jpg');

const mete = new THREE.Mesh(new THREE.IcosahedronGeometry(8, 60, 30, 50,300), new THREE.MeshBasicMaterial({ map: meteTexture }));

scene.add(mete);

// Avatar 3

const planetxTexture = new THREE.TextureLoader().load('../images/purpple.jpg');

const planetx = new THREE.Mesh(new THREE.IcosahedronGeometry(20, 60, 1000,60,15,70,700), new THREE.MeshBasicMaterial({ map: planetxTexture }));

scene.add(planetx);

//Avatar 4

const planetzTexture = new THREE.TextureLoader().load('../images/mapamundi.png');
const cloudsTexture = new THREE.TextureLoader().load('space.jpg');

const planetz = new THREE.Mesh(
  new THREE.SphereGeometry(23,56,85),
  new THREE.MeshStandardMaterial({
    map: planetzTexture,
    cloudsMap: cloudsTexture,
  })
);

scene.add(planetz);


// Moon

const moonTexture = new THREE.TextureLoader().load('../images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('../images/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 180;
moon.position.setX(-8);

jeff.position.z = -5.5;
jeff.position.x = 1;
jeff.position.y = 1;

mete.position.z = -75;
mete.position.x = 50;

planetx.position.z = -105;
planetx.position.x = 110;

planetz.position.z = 200;
planetz.position.x = -58; 



// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  mete.rotation.y += 0.01;
  mete.rotation.z += 0.01;

  planetx.rotation.y += 0.01;
  planetx.rotation.z += 0.01;

  planetz.rotation.y += 0.02;
  planetz.rotation.z += 0.01;

 

  camera.position.z = t * -0.05;
  camera.position.x = t * -0.0020;
  camera.rotation.y = t * -0.0002;
  /**camera.rotation.x= tiempo * segundos */
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  mete.rotation.x += 0.002;

  jeff.rotation.x += 0.003;

  planetx.rotation.x += 0.002;

  planetz.rotation.x += 0.003;

  

  

  // controls.update();

  renderer.render(scene, camera);
}


  

animate();
