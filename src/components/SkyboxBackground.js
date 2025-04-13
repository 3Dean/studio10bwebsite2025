// SkyboxBackground.js - A Three.js component for panoramic skybox with OrbitControls
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class SkyboxBackground {
  constructor(containerId, skyboxUrl) {
    this.containerId = containerId;
    this.skyboxUrl = skyboxUrl;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;

    // Get container
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with ID "${this.containerId}" not found.`);
      return;
    }

    // Set up scene
    this.scene = new THREE.Scene();
    
    // Create camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 0.1;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Style and append renderer
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.zIndex = '-1';
    container.appendChild(this.renderer.domElement);
    
    // Set up OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Add smooth damping effect
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5; // Slower rotation for better experience
    this.controls.enableZoom = false; // Disable zooming
    this.controls.enablePan = false; // Disable panning
    this.controls.autoRotate = true; // Auto-rotate the skybox
    this.controls.autoRotateSpeed = 0.5; // Slow auto-rotation speed

    // Load skybox texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      this.skyboxUrl,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        this.scene.background = texture;
      },
      undefined,
      (error) => {
        console.error('Error loading skybox texture:', error);
        // Fallback to a color
        this.scene.background = new THREE.Color(0x000033);
      }
    );
    
    // Set up window resize handler
    window.addEventListener('resize', this.handleResize.bind(this));
    
    // Start animation loop
    this.animate();
    
    this.isInitialized = true;
  }
  
  handleResize() {
    const container = document.getElementById(this.containerId);
    if (!container || !this.camera || !this.renderer) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  animate() {
    if (!this.renderer || !this.scene || !this.camera) return;
    
    requestAnimationFrame(this.animate.bind(this));
    
    // Update controls
    if (this.controls) {
      this.controls.update();
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  // Method to cleanly dispose of Three.js objects when not needed
  dispose() {
    if (!this.isInitialized) return;
    
    window.removeEventListener('resize', this.handleResize.bind(this));
    
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
      this.renderer = null;
    }
    
    // Clear any other Three.js objects to prevent memory leaks
    this.scene = null;
    this.camera = null;
    this.isInitialized = false;
  }
}