"use client"
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import AltairCardMotion from "./AltairCardMotion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Durata del preloader

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading || !canvasRef.current) return;

        // Configurazione Three.js
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 8;

        // Creazione delle onde fluide
        const waves = [];
        const waveCount = 7;
        
        for (let i = 0; i < waveCount; i++) {
            // Maggiore risoluzione per curve più fluide
            const waveGeometry = new THREE.PlaneGeometry(35, 0.4, 150, 10);
            
            const waveMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    opacity: { value: 0.8 - i * 0.1 },
                    waveHeight: { value: 0.15 + i * 0.03 },
                    waveSpeed: { value: 0.6 + i * 0.05 },
                    flowDirection: { value: 1.0 }, // 1.0 = da destra a sinistra
                    color1: { value: new THREE.Color(0x3498db) },
                    color2: { value: new THREE.Color(0x2980b9) }
                },
                vertexShader: `
                    uniform float time;
                    uniform float waveHeight;
                    uniform float waveSpeed;
                    uniform float flowDirection;
                    
                    varying vec2 vUv;
                    
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        
                        // Spostamento orizzontale per simulare il flusso da destra a sinistra
                        float xOffset = flowDirection * time * waveSpeed;
                        
                        // Onda principale che scorre orizzontalmente
                        float mainWave = sin((pos.x + xOffset) * 0.8) * waveHeight;
                        
                        // Onda secondaria più rapida
                        float secondaryWave = sin((pos.x + xOffset) * 1.6 + time * 0.2) * (waveHeight * 0.3);
                        
                        // Onda terziaria lenta
                        float tertiaryWave = cos((pos.x + xOffset) * 0.4 - time * 0.1) * (waveHeight * 0.15);
                        
                        // Combina le onde
                        pos.y += mainWave + secondaryWave + tertiaryWave;
                        
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float opacity;
                    uniform vec3 color1;
                    uniform vec3 color2;
                    
                    varying vec2 vUv;
                    
                    void main() {
                        // Gradiente orizzontale tra i due colori
                        vec3 color = mix(color1, color2, vUv.x);
                        
                        // Bordi più morbidi
                        float edgeSoftness = 0.05;
                        float alpha = opacity * smoothstep(0.0, edgeSoftness, vUv.y) * smoothstep(0.0, edgeSoftness, 1.0 - vUv.y);
                        
                        gl_FragColor = vec4(color, alpha);
                    }
                `,
                transparent: true,
                side: THREE.DoubleSide
            });
            
            const wave = new THREE.Mesh(waveGeometry, waveMaterial);
            wave.position.y = -2.5 + i * 0.7;
            wave.position.z = -i * 0.15;
            wave.rotation.z = Math.PI * 0.01 * (i % 2 === 0 ? 1 : -1); // Leggera rotazione alternata
            
            scene.add(wave);
            waves.push(wave);
        }

        // Effetto particelle per maggiore fluidità che si muovono da destra a sinistra
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const particlePositions = new Float32Array(particleCount * 3);
        const particleVelocities = new Float32Array(particleCount);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            particlePositions[i3] = (Math.random() - 0.2) * 20; // Più particelle sul lato destro
            particlePositions[i3 + 1] = (Math.random() - 0.6) * 10; // Più in basso
            particlePositions[i3 + 2] = (Math.random() - 0.5) * 5;
            
            // Velocità diverse per ogni particella
            particleVelocities[i] = 0.2 + Math.random() * 0.3;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x3498db,
            size: 0.05,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Gestione ridimensionamento finestra
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

        // Funzione di animazione
        const animate = (time) => {
            time *= 0.001; // Converti in secondi
            
            waves.forEach((wave, index) => {
                // Velocità di scorrimento crescente per ogni onda
                const waveSpeed = 0.6 + index * 0.05;
                wave.material.uniforms.time.value = time;
                wave.material.uniforms.waveSpeed.value = waveSpeed;
                
                // Movimento verticale molto leggero
                wave.position.y = -2.5 + index * 0.7 + Math.sin(time * 0.5 + index * 0.7) * 0.05;
            });
            
            // Animazione delle particelle che scorrono da destra a sinistra
            const positions = particlesGeometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                
                // Movimento da destra a sinistra
                positions[i3] -= particleVelocities[i] * 0.05;
                
                // Ripristina la posizione quando esce dallo schermo
                if (positions[i3] < -10) {
                    positions[i3] = 10;
                    positions[i3 + 1] = (Math.random() - 0.6) * 10;
                }
            }
            particlesGeometry.attributes.position.needsUpdate = true;
            
            // Movimento leggero della camera
            camera.position.y = Math.sin(time * 0.3) * 0.1;
            camera.lookAt(0, 0, 0);
            
            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate(0);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            
            // Pulizia delle risorse Three.js
            waves.forEach(wave => {
                wave.geometry.dispose();
                wave.material.dispose();
            });
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, [loading]);

    
    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            {/* Effetto onda migliorato */}
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-2 bg-gradient-to-r from-[#82bfca] via-[#489fb5] to-[#16697a] mb-3 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                        scaleX: [0, 1.2, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Logo container con effetto pulsante */}
            <motion.div 
                className="mt-8"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <AltairCardMotion />
            </motion.div>

            {/* Loading text con effetto fade */}
            <motion.div
                className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#16697a]"
                animate={{
                    opacity: [0, 1, 0],
                }}  
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Loading...
            </motion.div>
        </div>
    );
}