// src/integrations/astro-logo-animation.js
export default function() {
    return {
      name: 'astro-logo-animation',
      hooks: {
        'astro:config:setup': ({ injectScript }) => {
          // This script will be injected into every page
          injectScript('page', `
            document.addEventListener('DOMContentLoaded', function() {
              const initializeLogoAnimation = function() {
                const stop1 = document.getElementById("stop1");
                const stop2 = document.getElementById("stop2");
                
                if (!stop1 || !stop2) {
                  console.error("Could not find gradient stops");
                  return;
                }
                
                const colors = [
                  [0, 255, 127],    // springgreen
                  [64, 224, 208],   // turquoise
                  [255, 0, 255],    // magenta
                  [255, 165, 0],    // orange
                ];
  
                let index = 0;
                let step = 0;
                const steps = 100;
                let currentColor1 = colors[0];
                let currentColor2 = colors[1];
  
                function lerpColor(start, end, t) {
                  return [
                    Math.round(start[0] + (end[0] - start[0]) * t),
                    Math.round(start[1] + (end[1] - start[1]) * t),
                    Math.round(start[2] + (end[2] - start[2]) * t),
                  ];
                }
  
                function animateGradient() {
                  const nextColor1 = colors[(index + 1) % colors.length];
                  const nextColor2 = colors[(index + 2) % colors.length];
                  const t = step / steps;
  
                  const interpolated1 = lerpColor(currentColor1, nextColor1, t);
                  const interpolated2 = lerpColor(currentColor2, nextColor2, t);
  
                  stop1.setAttribute("stop-color", "rgb(" + interpolated1.join(",") + ")");
                  stop2.setAttribute("stop-color", "rgb(" + interpolated2.join(",") + ")");
  
                  step++;
                  if (step > steps) {
                    step = 0;
                    index = (index + 1) % colors.length;
                    currentColor1 = nextColor1;
                    currentColor2 = nextColor2;
                  }
  
                  requestAnimationFrame(animateGradient);
                }
  
                // Start animation
                animateGradient();
              };
              
              // Execute after a short delay to make sure SVG is in the DOM
              setTimeout(initializeLogoAnimation, 100);
            });
          `);
        }
      }
    };
  }