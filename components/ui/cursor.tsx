"use client"
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const glowRef = useRef<HTMLDivElement | null>(null);
    const requestRef = useRef<number | null>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const glowPos = useRef({ x: 0, y: 0 });

    const [hover, setHover] = useState(false);

    // Smooth follow loop
    useEffect(() => {
        const animate = () => {
            // lerp for smoothness
            pos.current.x += (mouse.current.x - pos.current.x);
            pos.current.y += (mouse.current.y - pos.current.y);

            // Slower lerp for glow (more delayed)
            glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.15;
            glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.15;

            if (dotRef.current && ringRef.current && glowRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`; // tight on pointer
                ringRef.current.style.transform = `translate3d(${pos.current.x - 10}px, ${pos.current.y - 10}px, 0)`; // smooth trailing ring
                glowRef.current.style.transform = `translate3d(${glowPos.current.x - 150}px, ${glowPos.current.y - 150}px, 0)`; // glow center
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // Mousemove listener
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };


        window.addEventListener("mousemove", handleMove);



    }, []);

    return (
        <>
            {/* Diamond glow effect - behind everything */}
            <div
                ref={glowRef}
                aria-hidden
                className={`
        pointer-events-none fixed z-[0] top-0 left-0 
        w-[300px] h-[300px]
        transition-opacity duration-300 ease-out
        ${hover ? "opacity-75" : "opacity-50"}
    `}
                style={{
                    transform: "translate3d(-9999px,-9999px,0)",
                    background: `
            radial-gradient(
                ellipse 120px 120px at center,
                rgba(255, 255, 255, 0.25) 0%,
                rgba(255, 255, 255, 0.15) 10%,
                rgba(255, 255, 255, 0.08) 30%,
                rgba(255, 255, 255, 0.02) 60%,
                transparent 80%
            )
        `,
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    borderRadius: "20px",
                    filter: "blur(1px)",
                    mixBlendMode: "screen"
                }}
            />

            {/* trailing ring (soft glow) */}
            <div
                ref={ringRef}
                aria-hidden
                className={`
                    pointer-events-none fixed z-[9999] top-0 left-0
                    w-[20px] h-[20px] rounded-full
                    transition-all duration-200 ease-out
                    ${hover ? "scale-125 opacity-100" : "scale-100 opacity-80"}
                    ${hover ? "drop-shadow-[0_0_40px_rgba(34,211,238,0.45)]" : "drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"}
                    bg-[rgba(34,211,238,0.06)] ring-1 ring-cyan-400/40
                `}
                style={{ transform: "translate3d(-9999px,-9999px,0)" }}
            />

            {/* core dot */}
            <div
                ref={dotRef}
                aria-hidden
                className={`
                    pointer-events-none fixed z-[10000] top-0 left-0
                    w-3 h-3 rounded-full
                    bg-cyan-400/90
                    ${hover ? "scale-125" : "scale-100"}
                    transition-transform duration-150 ease-out
                    ${hover ? "shadow-[0_0_20px_rgba(34,211,238,0.85)]" : "shadow-[0_0_8px_rgba(34,211,238,0.75)]"}
                `}
                style={{ transform: "translate3d(-9999px,-9999px,0)" }}
            />

            {/* accessibility: hide animations if user prefers reduced motion */}
            <style jsx global>{`
                @media (prefers-reduced-motion: reduce) {
                    .pointer-events-none { display: none !important; }
                    html { cursor: auto !important; }
                }
            `}</style>
        </>
    );
}
