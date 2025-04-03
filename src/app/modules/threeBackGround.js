"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        // 1. Inizializzazione scene Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true
        });
        
        // 2. Configurazione renderer responsive
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Evita pixel ratio troppo alti
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        mountRef.current.appendChild(renderer.domElement);

        // 3. Creazione particelle
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        
        for (let i = 0; i < 2000; i++) { // Ridotto il numero di particelle
            vertices.push(
                THREE.MathUtils.randFloatSpread(1000), // x
                THREE.MathUtils.randFloatSpread(1000), // y
                THREE.MathUtils.randFloatSpread(1000)  // z
            );
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // 4. Caricamento texture con gestione errori
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            '/FormeSVG/blue-4.svg',
            (texture) => {
                const particles = new THREE.Points(
                    geometry,
                    new THREE.PointsMaterial({ 
                        map: texture, 
                        size: 2, // Dimensione ridotta
                        transparent: true,
                        opacity: 0.8
                    })
                );
                scene.add(particles);

                // 5. Animazione
                const animate = () => {
                    requestAnimationFrame(animate);
                    particles.rotation.x += 0.0005;
                    particles.rotation.y += 0.0005;
                    renderer.render(scene, camera);
                };

                animate();
            },
            undefined, // Progress callback
            (error) => {
                console.error('Error loading texture:', error);
                // Fallback a material senza texture
                const particles = new THREE.Points(
                    geometry,
                    new THREE.PointsMaterial({ 
                        color: 0x3498db,
                        size: 1.5,
                        transparent: true,
                        opacity: 0.6
                    })
                );
                scene.add(particles);
            }
        );

        camera.position.z = 500; // Distanza ridotta

        // 6. Gestione resize ottimizzata
        const handleResize = () => {
            const width = Math.min(window.innerWidth, document.documentElement.clientWidth);
            const height = Math.min(window.innerHeight, document.documentElement.clientHeight);
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        // Debounce per migliorare le performance
        let resizeTimeout;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 100);
        });

        resizeObserver.observe(document.body);

        // 7. Pulizia
        return () => {
            resizeObserver.disconnect();
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
        />
    );
}