import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ChromeObject() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current, scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, .1, 100); camera.position.z = 5.2;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); renderer.setClearColor(0x000000, 0); mount.appendChild(renderer.domElement);
    const geometry = new THREE.TorusKnotGeometry(1.1, .34, 220, 28, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe7e7ec, metalness: .95, roughness: .08, clearcoat: 1, clearcoatRoughness: .08, envMapIntensity: 1.9 });
    const object = new THREE.Mesh(geometry, material); scene.add(object);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x09090c, 2.3)); const key = new THREE.DirectionalLight(0xffffff, 5); key.position.set(3, 4, 4); scene.add(key); const rim = new THREE.DirectionalLight(0xb8b8c8, 4); rim.position.set(-4, -1, 2); scene.add(rim);
    const pointer = { x: 0, y: 0 }; const onMove = (e) => { const r=mount.getBoundingClientRect(); pointer.x=((e.clientX-r.left)/r.width-.5)*2; pointer.y=((e.clientY-r.top)/r.height-.5)*2; };
    const resize=()=>{ const {width,height}=mount.getBoundingClientRect(); renderer.setSize(width,height); camera.aspect=width/height; camera.updateProjectionMatrix(); }; let frame; const animate=()=>{ object.rotation.x += .003; object.rotation.y += .004; object.rotation.x += (pointer.y*.18-object.rotation.x)*.018; object.position.x += (pointer.x*.25-object.position.x)*.03; renderer.render(scene,camera); frame=requestAnimationFrame(animate); }; resize(); animate(); window.addEventListener("resize",resize); mount.addEventListener("pointermove",onMove);
    return ()=>{ cancelAnimationFrame(frame); window.removeEventListener("resize",resize); mount.removeEventListener("pointermove",onMove); geometry.dispose(); material.dispose(); renderer.dispose(); mount.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} className="chrome-object" aria-hidden="true" />;
}
