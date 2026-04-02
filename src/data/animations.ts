import type { TutorialGroup } from './layout';

export const animationsTutorials: TutorialGroup[] = [
  {
    id: 'transitions',
    title: 'Transitions',
    lessons: [
      {
        id: 'transition-basics',
        title: 'Transition Basics',
        description:
          'Animate property changes smoothly. Four parts: which property, how long, timing curve, and delay.',
        concepts: [
          'transition-property',
          'transition-duration',
          'transition-timing-function',
          'transition-delay',
        ],
        initialHtml: `<button class="btn">Hover me</button>
<button class="btn slow">Slow ease-in</button>
<button class="btn bouncy">Bouncy</button>`,
        initialCss: `body { font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; padding: 16px; }

/* transition: property duration timing-function delay */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background: #6366f1;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* Slower with ease-in: starts slow, ends fast */
.slow {
  transition: background 0.6s ease-in;
}

/* cubic-bezier for custom "bounce" feel */
.bouncy {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bouncy:hover {
  transform: scale(1.15);
}

/* Try:
   transition-duration: 1s
   timing: ease | ease-in | ease-out | ease-in-out | linear
   transition: all 0.3s ease (animate every property) */`,
      },
      {
        id: 'transition-multiple',
        title: 'Multiple Transitions',
        description:
          'Transition several properties at once — each can have its own duration and timing.',
        concepts: ['transition shorthand', 'multiple transitions', 'transition: all'],
        initialHtml: `<div class="card">
  <h3 class="title">Hover this card</h3>
  <p class="text">Background, shadow, and text color all transition independently.</p>
</div>`,
        initialCss: `body { font-family: system-ui, sans-serif; padding: 24px; }

.card {
  background: #f4f4f5;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  /* comma-separate multiple transitions */
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;
}

.card:hover {
  background: #6366f1;
  box-shadow: 0 8px 24px rgba(99,102,241,0.35);
  transform: translateY(-4px);
}

.title {
  margin: 0 0 8px;
  font-size: 18px;
  color: #111827;
  transition: color 0.3s ease;
}

.text {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  transition: color 0.3s ease;
}

.card:hover .title,
.card:hover .text {
  color: #fff;
}

/* Try:
   Remove a transition — notice the jump
   Change durations so shadow is slower than movement */`,
      },
    ],
  },
  {
    id: 'transforms',
    title: '2D & 3D Transforms',
    lessons: [
      {
        id: '2d-transforms',
        title: '2D Transforms',
        description:
          'Move, rotate, scale, and skew elements without affecting layout. Transforms compose — you can chain them.',
        concepts: ['translate()', 'rotate()', 'scale()', 'skew()', 'transform-origin'],
        initialHtml: `<div class="box translate">translate</div>
<div class="box rotate">rotate</div>
<div class="box scale">scale</div>
<div class="box skew">skew</div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 24px;
  background: #f9fafb;
}

.box {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* move right 20px, down 10px */
.translate:hover { transform: translate(20px, -10px); }

/* spin 45° clockwise */
.rotate:hover { transform: rotate(45deg); }

/* grow to 130% */
.scale:hover { transform: scale(1.3); }

/* slant along X axis */
.skew:hover { transform: skewX(15deg); }

/* Try:
   Combine: transform: rotate(45deg) scale(1.2)
   transform-origin: top left (changes pivot point)
   translateX() / translateY() for single axis */`,
      },
      {
        id: '3d-transforms',
        title: '3D Transforms',
        description:
          'Add depth with 3D transforms. perspective on the parent sets how dramatic the 3D effect looks.',
        concepts: ['perspective', 'rotateX()', 'rotateY()', 'rotateZ()', 'transform-style'],
        initialHtml: `<div class="scene">
  <div class="card flip-x">rotateX</div>
</div>
<div class="scene">
  <div class="card flip-y">rotateY</div>
</div>
<div class="scene">
  <div class="card flip-z">rotateZ</div>
</div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  gap: 24px;
  padding: 32px;
  background: #f9fafb;
}

/* perspective: how far the "camera" is — lower = more dramatic */
.scene {
  perspective: 400px;
}

.card {
  width: 90px;
  height: 90px;
  background: #6366f1;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.5s ease;
}

/* tilt top toward viewer */
.flip-x:hover { transform: rotateX(40deg); }

/* spin around Y axis */
.flip-y:hover { transform: rotateY(60deg); }

/* flat spin (same as 2D rotate) */
.flip-z:hover { transform: rotateZ(45deg); }

/* Try:
   perspective: 200px (dramatic) vs 800px (subtle)
   rotateY(180deg) for a full card flip
   Add transform-style: preserve-3d to .scene */`,
      },
    ],
  },
  {
    id: 'keyframes',
    title: 'Keyframe Animations',
    lessons: [
      {
        id: 'keyframes-basics',
        title: '@keyframes Basics',
        description:
          'Define animation steps with @keyframes, then attach them with the animation property.',
        concepts: [
          '@keyframes',
          'animation-name',
          'animation-duration',
          'animation-iteration-count',
        ],
        initialHtml: `<div class="box pulse">pulse</div>
<div class="box spin">spin</div>
<div class="box bounce">bounce</div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  gap: 24px;
  padding: 32px;
  background: #f9fafb;
}

.box {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
}

/* Define the animation steps */
@keyframes pulse {
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.15); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

/* Attach with animation: name duration timing iteration */
.pulse  { animation: pulse 1.2s ease-in-out infinite; }
.spin   { animation: spin 1.5s linear infinite; }
.bounce { animation: bounce 0.8s ease-in-out infinite; }

/* Try:
   animation-iteration-count: 3 (run 3 times then stop)
   animation-direction: alternate (ping-pong)
   animation-play-state: paused */`,
      },
      {
        id: 'animation-properties',
        title: 'Animation Properties',
        description:
          'Control fill mode, direction, delay, and play state for precise animation behaviour.',
        concepts: [
          'animation-fill-mode',
          'animation-direction',
          'animation-delay',
          'animation-play-state',
        ],
        initialHtml: `<div class="bar"></div>
<div class="bar delay"></div>
<div class="bar reverse"></div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: #f9fafb;
}

@keyframes slide {
  from { transform: translateX(0); background: #6366f1; }
  to   { transform: translateX(160px); background: #ec4899; }
}

.bar {
  width: 80px;
  height: 36px;
  border-radius: 6px;
  background: #6366f1;
  /* forwards: stays at final keyframe when done */
  animation: slide 1.2s ease-in-out 1 forwards;
}

/* animation-delay: waits before starting */
.delay {
  animation-delay: 0.6s;
  /* backwards: shows from-state during delay */
  animation-fill-mode: backwards;
}

/* animation-direction: alternate plays forward then backward */
.reverse {
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

/* Try:
   animation-fill-mode: none | forwards | backwards | both
   animation-play-state: paused on hover
   Hover selector: .bar:hover { animation-play-state: paused; } */`,
      },
    ],
  },
  {
    id: 'combining-and-accessibility',
    title: 'Combining & Accessibility',
    lessons: [
      {
        id: 'combining-transforms-animations',
        title: 'Combining Transforms & Animations',
        description:
          'Stack multiple transforms inside @keyframes and layer several animations on one element.',
        concepts: ['multiple transforms', 'multiple animations', 'transform-origin in keyframes'],
        initialHtml: `<div class="orbit-scene">
  <div class="planet"></div>
</div>
<div class="loader">
  <div class="dot"></div>
  <div class="dot d2"></div>
  <div class="dot d3"></div>
</div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px;
  background: #0f172a;
}

/* Orbit: combine rotation + translation in one keyframe */
@keyframes orbit {
  from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
}

.orbit-scene {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planet {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #6366f1;
  box-shadow: 0 0 12px #6366f1;
  animation: orbit 2s linear infinite;
}

/* Staggered dots: same animation, different delays */
@keyframes blink {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1); opacity: 1; }
}

.loader { display: flex; gap: 8px; }

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ec4899;
  animation: blink 1.4s ease-in-out infinite;
}

.d2 { animation-delay: 0.2s; }
.d3 { animation-delay: 0.4s; }

/* Try:
   Change orbit radius via translateX value
   Give each dot a different color
   Add a second animation to .planet: pulse from the keyframes lesson */`,
      },
      {
        id: 'reduced-motion',
        title: 'prefers-reduced-motion',
        description:
          'Some users need animations disabled. Use the prefers-reduced-motion media query to respect that preference.',
        concepts: ['prefers-reduced-motion', 'accessibility', 'motion media query'],
        initialHtml: `<div class="spinner"></div>
<p class="msg">Simulating "reduce motion" — edit the CSS comment below to see the accessible version.</p>
<div class="banner">New feature!</div>`,
        initialCss: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: #f9fafb;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes slide-in {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e5e7eb;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.banner {
  background: #6366f1;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  animation: slide-in 0.5s ease-out both;
}

.msg {
  font-size: 13px;
  color: #6b7280;
  text-align: center;
  max-width: 300px;
  margin: 0;
}

/* Respect user's motion preference.
   Uncomment this block to see the accessible version:

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    border: 4px solid #6366f1;
  }
  .banner {
    animation: none;
  }
}
*/

/* Try:
   Uncomment the media query above
   Use prefers-reduced-motion: no-preference to target animated-ok users
   animation-duration: 0.001ms is another common reset pattern */`,
      },
    ],
  },
];
