"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Creare particelle di sfondo
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        
        for (let i = 0; i < 5000; i++) {
            vertices.push(
                THREE.MathUtils.randFloatSpread(2000), // x
                THREE.MathUtils.randFloatSpread(2000), // y
                THREE.MathUtils.randFloatSpread(2000)  // z
            );
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // Caricare l'immagine SVG
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/FormeSVG/blue-4.svg', () => {
            const particles = new THREE.Points(
                geometry,
                new THREE.PointsMaterial({ map: texture, size: 3, transparent: true })
            );
            scene.add(particles);

            // Animazione
            const animate = () => {
                requestAnimationFrame(animate);
                particles.rotation.x += 0.0001;
                particles.rotation.y += 0.0001;
                renderer.render(scene, camera);
            };

            animate();
        });

        camera.position.z = 1000;

        // Gestione del resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
