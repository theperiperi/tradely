import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const NeonBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a complex mesh (e.g., a torus knot)
    const geometry = new THREE.TorusKnotGeometry(10, 3, 20, 6);
    
    // Create wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: 0x22FF89,
      transparent: true,
      opacity: 0.7,
    });
    const neonMesh = new THREE.LineSegments(edges, material);
    scene.add(neonMesh);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      neonMesh.rotation.x += 0.001;
      neonMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default NeonBackground; 