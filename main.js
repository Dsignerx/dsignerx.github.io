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

const pointLight = new THREE.PointLight(0x00d1ff);
pointLight.position.set(5,55,15);

const pointLight2 = new THREE.PointLight(0xff0000);
pointLight.position.set(15,150,55);

const pointLight3 = new THREE.PointLight(0x070707);
pointLight.position.set(65,35,15);

const pointLight4 = new THREE.PointLight(0x3200fe);
pointLight4.position.set(95,55,55);



const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight, pointLight2, pointLight3,pointLight4);

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
    .map(() => THREE.MathUtils.randFloatSpread(700));

  star.position.set(x, y, z);
  scene.add(star);
}


Array(200).fill().forEach(addstar);

// Background

const spaceTexture = new THREE.TextureLoader().load('/lubo.jpg');
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('/planetaz.jpg');

const jeff = new THREE.Mesh(new THREE.SphereGeometry(10, 60, 1000,30,15,70,700), new THREE.MeshBasicMaterial({ map: jeffTexture }));

scene.add(jeff);

// Avatar2

const meteTexture = new THREE.TextureLoader().load('/planetax.jpg');

const mete = new THREE.Mesh(new THREE.IcosahedronGeometry(8, 60, 30, 50,300), new THREE.MeshBasicMaterial({ map: meteTexture }));

scene.add(mete);

// Avatar 3

const planetxTexture = new THREE.TextureLoader().load('/city.jpg');

const planetx = new THREE.Mesh(new THREE.IcosahedronGeometry(6, 6, 20,6), new THREE.MeshBasicMaterial({ map: planetxTexture }));

scene.add(planetx);

//Avatar 4

const planetzTexture = new THREE.TextureLoader().load('/mapamundi.png');
const cloudsTexture = new THREE.TextureLoader().load('/space.jpg');

const planetz = new THREE.Mesh(
  new THREE.SphereGeometry(23,56,85),
  new THREE.MeshStandardMaterial({
    map: planetzTexture,
    cloudsMap: cloudsTexture,
  })
);

scene.add(planetz);

// Avatar5

const obsTexture = new THREE.TextureLoader().load('/ground.jpg');

const obs = new THREE.Mesh(new THREE.TorusKnotGeometry(2, 2, 10, 10), new THREE.MeshBasicMaterial({ map: obsTexture }));

scene.add(obs);

//avatar6

const pedTextured = new THREE.TextureLoader().load('ground.jpg');

const ped = new THREE.Mesh(new THREE.TorusKnotGeometry(2, 2, 13,10), new THREE.MeshBasicMaterial({ map: obsTexture
}));

scene.add(ped);



// Moon

const moonTexture = new THREE.TextureLoader().load('/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('/normal.jpg');

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

planetx.position.z = -100;
planetx.position.x = 100;
planetx.position.y = 5

/**jeff.position.z = -5.5;
jeff.position.x = 1;
jeff.position.y = 1;
planetx.position.z = -105;
planetx.position.x = 110;
**/

planetz.position.z = 200;
planetz.position.x = -58; 

obs.position.z = 57;
obs.position.x = -40;

ped.position.z = 95;
ped.position.x = -28




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

  obs.rotation.y += 0.01;
  obs.rotation.z += 0.01;
  obs.rotation.x += 0.02;

  ped.rotation.y += 0.01;
  ped.rotation.x += 0.01;
  ped.rotation.z += 0.02;

 

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

  obs.rotation.x += 0.003;
  obs.rotation.y += 0.001;

  ped.rotation.x += 0.003;
  ped.rotation.z += 0.001;

  

  

  // controls.update();

  renderer.render(scene, camera);
}


  

animate();
