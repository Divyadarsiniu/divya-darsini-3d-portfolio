'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function FloatingObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set up Three.js Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold the geometries
    const group = new THREE.Group();
    scene.add(group);

    // Outer Geometry: Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x71717a, // zinc-500
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Outer Vertices Dots
    const pointsMat = new THREE.PointsMaterial({
      color: 0xa1a1aa, // zinc-400
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const pointsMesh = new THREE.Points(outerGeo, pointsMat);
    group.add(pointsMesh);

    // Inner Geometry: Core Octahedron
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x27272a, // zinc-800
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Center focal node
    const coreGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x18181b, // zinc-900
      transparent: true,
      opacity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Smooth rotation
        group.rotation.y += 0.0035;
        group.rotation.x += 0.0018;

        // Smooth mouse damping
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        group.rotation.z = mouseX * 0.3;
        group.position.x = mouseX * 0.4;
        group.position.y = mouseY * 0.4;

        // Counter-rotation of core
        innerMesh.rotation.y -= 0.005;
        innerMesh.rotation.z += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose resources
      outerGeo.dispose();
      outerMat.dispose();
      pointsMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Lightweight SVG geometric fallback
    return (
      <div className="w-full h-full flex items-center justify-center p-8 select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 text-zinc-400 dark:text-zinc-600 animate-pulse stroke-current fill-none stroke-[1.2]"
          aria-hidden="true"
        >
          <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" />
          <polygon points="100,45 150,75 150,125 100,155 50,125 50,75" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="14" fill="currentColor" fillOpacity="0.1" />
          <line x1="100" y1="20" x2="100" y2="180" strokeDasharray="2 2" />
          <line x1="30" y1="60" x2="170" y2="140" strokeDasharray="2 2" />
          <line x1="30" y1="140" x2="170" y2="60" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center relative touch-none pointer-events-auto"
      aria-label="Interactive 3D mathematical geometric polyhedral representation"
      role="img"
    />
  );
}
