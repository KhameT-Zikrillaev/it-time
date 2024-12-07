import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load("particles-js", "/particles.json", function () {
                console.log("Particles.js config loaded");
            });
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",         
                backgroundColor: "#ffffff",
                top: 0,
                 zIndex: 0
            }}
        ></div>
    );
};

export default ParticlesBackground;
