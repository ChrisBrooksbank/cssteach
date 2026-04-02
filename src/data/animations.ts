import type { TutorialGroup, ReferenceSection } from './layout';

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

export const animationsReference: ReferenceSection[] = [
  {
    id: 'transition-properties',
    title: 'Transition Properties',
    cards: [
      {
        id: 'transition-property',
        property: 'transition-property',
        description:
          'Which CSS property to animate. Use a specific property (e.g. background) or all to animate everything that changes.',
        values: [
          { value: 'background', note: 'only background changes animate' },
          { value: 'transform', note: 'only transforms animate' },
          { value: 'all', note: 'every changing property animates' },
          { value: 'none', note: 'no transitions' },
        ],
        demoHtml: `<div class="box specific">specific</div>
<div class="box all">all</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;gap:12px;padding:12px;background:#f9fafb}
.box{padding:10px 16px;border-radius:8px;background:#6366f1;color:#fff;font-size:12px;font-weight:600;cursor:pointer;border:2px solid transparent}
.specific{transition:background 0.4s ease}
.all{transition:all 0.4s ease}
.box:hover{background:#ec4899;transform:translateY(-4px);border-color:#f59e0b}`,
      },
      {
        id: 'transition-duration',
        property: 'transition-duration',
        description:
          'How long the transition takes. Use seconds (s) or milliseconds (ms). Short = snappy; long = languid.',
        values: [
          { value: '0.1s', note: 'very fast — micro-interaction' },
          { value: '0.3s', note: 'standard UI speed' },
          { value: '1s', note: 'slow — feels deliberate' },
        ],
        demoHtml: `<div class="box fast">0.1s</div>
<div class="box mid">0.3s</div>
<div class="box slow">1s</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;gap:12px;padding:12px;background:#f9fafb}
.box{width:70px;height:70px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer}
.fast{transition:transform 0.1s ease}
.mid{transition:transform 0.3s ease}
.slow{transition:transform 1s ease}
.box:hover{transform:scale(1.25)}`,
      },
      {
        id: 'transition-timing-function',
        property: 'transition-timing-function',
        description:
          'The speed curve of the transition. Controls whether it starts fast, ends fast, or moves at a constant pace.',
        values: [
          { value: 'ease', note: 'slow start and end (default)' },
          { value: 'linear', note: 'constant speed throughout' },
          { value: 'ease-in', note: 'slow start, fast end' },
          { value: 'ease-out', note: 'fast start, slow end' },
          { value: 'ease-in-out', note: 'slow start and end' },
        ],
        demoHtml: `<div class="row"><div class="bar ease">ease</div></div>
<div class="row"><div class="bar linear">linear</div></div>
<div class="row"><div class="bar ein">ease-in</div></div>
<div class="row"><div class="bar eout">ease-out</div></div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:8px;background:#f9fafb}
.row{background:#e5e7eb;border-radius:6px;margin-bottom:4px;overflow:hidden}
.bar{display:inline-block;padding:4px 8px;background:#6366f1;color:#fff;font-size:10px;font-weight:700;border-radius:4px;white-space:nowrap;cursor:pointer}
.ease{transition:transform 1s ease;animation:slide 1.5s ease infinite alternate}
.linear{animation:slide 1.5s linear infinite alternate}
.ein{animation:slide 1.5s ease-in infinite alternate}
.eout{animation:slide 1.5s ease-out infinite alternate}
@keyframes slide{from{transform:translateX(0)}to{transform:translateX(180px)}}`,
      },
      {
        id: 'transition-delay',
        property: 'transition-delay',
        description:
          'Wait before the transition starts. Useful for staggering multiple transitions.',
        values: [
          { value: '0s', note: 'starts immediately (default)' },
          { value: '0.2s', note: 'short pause' },
          { value: '-0.1s', note: 'negative: starts mid-way through' },
        ],
        demoHtml: `<div class="group">
  <div class="box d0">0s</div>
  <div class="box d1">0.2s</div>
  <div class="box d2">0.4s</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:16px;background:#f9fafb}
.group{display:flex;gap:8px}
.box{width:60px;height:60px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;cursor:pointer;transition:transform 0.4s ease}
.d1{transition-delay:0.2s}
.d2{transition-delay:0.4s}
.group:hover .box{transform:translateY(-14px)}`,
      },
    ],
  },
  {
    id: 'transform-functions',
    title: 'Transform Functions',
    cards: [
      {
        id: 'translate',
        property: 'translate() / translateX() / translateY()',
        description:
          'Moves an element without changing its layout footprint. Other elements are unaffected.',
        values: [
          { value: 'translate(x, y)', note: 'move on both axes' },
          { value: 'translateX(20px)', note: 'move horizontally' },
          { value: 'translateY(-10px)', note: 'move up' },
          { value: 'translate(50%)', note: '50% of own width' },
        ],
        demoHtml: `<div class="scene">
  <div class="ghost"></div>
  <div class="box">hover</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:16px;background:#f9fafb}
.scene{position:relative;width:80px;height:80px}
.ghost{position:absolute;width:80px;height:80px;border:2px dashed #c7d2fe;border-radius:8px}
.box{position:absolute;width:80px;height:80px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer;transition:transform 0.4s ease}
.box:hover{transform:translate(20px,-20px)}`,
      },
      {
        id: 'rotate',
        property: 'rotate() / rotateX() / rotateY()',
        description:
          'Spins an element. Positive values go clockwise; negative go counter-clockwise.',
        values: [
          { value: 'rotate(45deg)', note: '45° clockwise' },
          { value: 'rotate(-90deg)', note: '90° counter-clockwise' },
          { value: 'rotateY(180deg)', note: 'flip on vertical axis (3D)' },
        ],
        demoHtml: `<div class="scene">
  <div class="box r2d">2D</div>
</div>
<div class="scene" style="perspective:200px">
  <div class="box r3d">3D</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;gap:20px;padding:16px;background:#f9fafb}
.scene{display:flex;align-items:center;justify-content:center;width:90px;height:90px}
.box{width:70px;height:70px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;cursor:pointer;transition:transform 0.5s ease}
.r2d:hover{transform:rotate(135deg)}
.r3d:hover{transform:rotateY(180deg)}`,
      },
      {
        id: 'scale',
        property: 'scale() / scaleX() / scaleY()',
        description:
          'Resizes an element visually. Values below 1 shrink; above 1 enlarge. Element keeps its layout space.',
        values: [
          { value: 'scale(1.2)', note: '20% larger' },
          { value: 'scale(0.8)', note: '20% smaller' },
          { value: 'scaleX(2)', note: 'double width only' },
        ],
        demoHtml: `<div class="row">
  <div class="box grow">grow</div>
  <div class="box shrink">shrink</div>
  <div class="box wide">wide</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:20px;background:#f9fafb}
.row{display:flex;gap:12px;align-items:center}
.box{width:68px;height:68px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;cursor:pointer;transition:transform 0.3s ease}
.grow:hover{transform:scale(1.3)}
.shrink:hover{transform:scale(0.7)}
.wide:hover{transform:scaleX(1.8)}`,
      },
      {
        id: 'skew',
        property: 'skew() / skewX() / skewY()',
        description:
          'Slants an element along one or both axes. Creates an italic-like tilt effect.',
        values: [
          { value: 'skewX(15deg)', note: 'tilt along X axis' },
          { value: 'skewY(10deg)', note: 'tilt along Y axis' },
          { value: 'skew(15deg, 5deg)', note: 'both axes' },
        ],
        demoHtml: `<div class="row">
  <div class="box sx">skewX</div>
  <div class="box sy">skewY</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:20px;background:#f9fafb}
.row{display:flex;gap:24px;align-items:center}
.box{width:80px;height:60px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer;transition:transform 0.4s ease}
.sx:hover{transform:skewX(20deg)}
.sy:hover{transform:skewY(15deg)}`,
      },
    ],
  },
  {
    id: 'timing-functions',
    title: 'Timing Function Gallery',
    cards: [
      {
        id: 'keyword-timings',
        property: 'ease / linear / ease-in / ease-out / ease-in-out',
        description:
          'Five built-in curves. Watch how each ball reaches the end — the speed difference is the timing function.',
        values: [
          { value: 'ease', note: 'default — natural deceleration' },
          { value: 'linear', note: 'constant speed, mechanical feel' },
          { value: 'ease-in', note: 'slow → fast (like falling)' },
          { value: 'ease-out', note: 'fast → slow (like catching)' },
          { value: 'ease-in-out', note: 'slow → fast → slow' },
        ],
        demoHtml: `<div class="track"><div class="dot ease"></div><span class="lbl">ease</span></div>
<div class="track"><div class="dot linear"></div><span class="lbl">linear</span></div>
<div class="track"><div class="dot ein"></div><span class="lbl">ease-in</span></div>
<div class="track"><div class="dot eout"></div><span class="lbl">ease-out</span></div>
<div class="track"><div class="dot eio"></div><span class="lbl">ease-in-out</span></div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:6px;background:#f9fafb}
.track{display:flex;align-items:center;height:18px;background:#e5e7eb;border-radius:20px;margin-bottom:3px;position:relative;overflow:hidden}
.lbl{position:absolute;right:6px;font-size:9px;color:#6b7280;font-weight:600;z-index:1}
.dot{width:16px;height:16px;border-radius:50%;background:#6366f1;flex-shrink:0}
.ease{animation:run 1.6s ease infinite alternate}
.linear{animation:run 1.6s linear infinite alternate}
.ein{animation:run 1.6s ease-in infinite alternate}
.eout{animation:run 1.6s ease-out infinite alternate}
.eio{animation:run 1.6s ease-in-out infinite alternate}
@keyframes run{from{transform:translateX(0)}to{transform:translateX(200px)}}`,
      },
      {
        id: 'cubic-bezier',
        property: 'cubic-bezier(x1, y1, x2, y2)',
        description:
          'Define a custom curve with two control points. Values above 1 create an overshoot (bouncy) effect.',
        values: [
          { value: 'cubic-bezier(0.25, 0.1, 0.25, 1)', note: 'equivalent to ease' },
          { value: 'cubic-bezier(0, 0, 1, 1)', note: 'equivalent to linear' },
          { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', note: 'overshoot / spring' },
          { value: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', note: 'elastic back-and-forth' },
        ],
        demoHtml: `<div class="track"><div class="dot ease">ease</div></div>
<div class="track"><div class="dot spring">spring</div></div>
<div class="track"><div class="dot elastic">elastic</div></div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:8px;background:#f9fafb}
.track{height:28px;background:#e5e7eb;border-radius:20px;margin-bottom:6px;display:flex;align-items:center;overflow:visible;position:relative}
.dot{width:60px;height:24px;border-radius:20px;background:#6366f1;color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;position:relative}
.ease{animation:run 1.5s cubic-bezier(0.25,0.1,0.25,1) infinite alternate}
.spring{animation:run 1.5s cubic-bezier(0.34,1.56,0.64,1) infinite alternate}
.elastic{animation:run 1.5s cubic-bezier(0.68,-0.55,0.27,1.55) infinite alternate}
@keyframes run{from{transform:translateX(0)}to{transform:translateX(160px)}}`,
      },
      {
        id: 'steps',
        property: 'steps(n, start|end)',
        description:
          'Divides the animation into n discrete jumps instead of a smooth curve. Great for sprite animations and typewriter effects.',
        values: [
          { value: 'steps(4)', note: '4 equal jumps' },
          { value: 'steps(1, end)', note: 'snap at the very end' },
          { value: 'step-start', note: 'jump immediately' },
          { value: 'step-end', note: 'jump at the end' },
        ],
        demoHtml: `<div class="track"><div class="dot s4">steps(4)</div></div>
<div class="track"><div class="dot s8">steps(8)</div></div>
<div class="track smooth"><div class="dot ease">smooth</div></div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:8px;background:#f9fafb}
.track{height:26px;background:#e5e7eb;border-radius:20px;margin-bottom:6px;display:flex;align-items:center;overflow:hidden}
.dot{width:62px;height:22px;border-radius:20px;background:#6366f1;color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center}
.s4{animation:run 1.6s steps(4) infinite alternate}
.s8{animation:run 1.6s steps(8) infinite alternate}
.ease{animation:run 1.6s ease infinite alternate}
@keyframes run{from{transform:translateX(0)}to{transform:translateX(150px)}}`,
      },
    ],
  },
  {
    id: 'animation-properties',
    title: 'Animation Properties',
    cards: [
      {
        id: 'animation-shorthand',
        property: 'animation (shorthand)',
        description:
          'Shorthand: name duration timing-function delay iteration-count direction fill-mode. Only name and duration are required.',
        values: [
          { value: 'spin 1s linear infinite', note: 'forever spinning' },
          { value: 'fade 0.5s ease-out 1 forwards', note: 'once, stays at end' },
          { value: 'pulse 0.8s ease-in-out 3', note: 'runs 3 times' },
        ],
        demoHtml: `<div class="box spin">spin</div>
<div class="box pulse">pulse</div>
<div class="box bounce">bounce</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;gap:16px;padding:16px;background:#f9fafb}
.box{width:64px;height:64px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
.spin{animation:spin 1.5s linear infinite}
.pulse{animation:pulse 1s ease-in-out infinite}
.bounce{animation:bounce 0.8s ease-in-out infinite}`,
      },
      {
        id: 'animation-fill-mode',
        property: 'animation-fill-mode',
        description:
          'What styles apply before and after the animation runs. forwards keeps the final state; backwards applies from-state during delay.',
        values: [
          { value: 'none', note: 'returns to original (default)' },
          { value: 'forwards', note: 'stays at last keyframe' },
          { value: 'backwards', note: 'holds first keyframe during delay' },
          { value: 'both', note: 'forwards + backwards combined' },
        ],
        demoHtml: `<p style="font:11px system-ui,sans-serif;color:#6b7280;margin:0 0 6px">After animation ends:</p>
<div class="row">
  <div class="box none">none</div>
  <div class="box fwd">forwards</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:12px;background:#f9fafb}
.row{display:flex;gap:12px}
@keyframes grow{from{transform:scale(1);background:#6366f1}to{transform:scale(1.3);background:#ec4899}}
.box{width:64px;height:64px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700}
.none{animation:grow 1s ease 0.5s 1 none}
.fwd{animation:grow 1s ease 0.5s 1 forwards}`,
      },
      {
        id: 'animation-direction',
        property: 'animation-direction',
        description:
          'Controls the playback order of keyframes. alternate ping-pongs the animation, reducing the jarring reset.',
        values: [
          { value: 'normal', note: 'always plays forward (default)' },
          { value: 'reverse', note: 'always plays backward' },
          { value: 'alternate', note: 'forward then backward (ping-pong)' },
          { value: 'alternate-reverse', note: 'backward then forward' },
        ],
        demoHtml: `<div class="row">
  <div class="box norm">normal</div>
  <div class="box alt">alternate</div>
  <div class="box rev">reverse</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:16px;background:#f9fafb}
.row{display:flex;gap:10px}
@keyframes slide{from{transform:translateX(0)}to{transform:translateX(36px)}}
.box{width:60px;height:60px;background:#6366f1;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;text-align:center}
.norm{animation:slide 1s linear infinite normal}
.alt{animation:slide 1s linear infinite alternate}
.rev{animation:slide 1s linear infinite reverse}`,
      },
    ],
  },
  {
    id: 'common-patterns',
    title: 'Common Animation Patterns',
    cards: [
      {
        id: 'fade-in',
        property: 'Fade In',
        description:
          'Gradually reveal an element. Combine opacity with translateY for a subtle lift-and-fade.',
        values: [
          { value: 'opacity: 0 → 1', note: 'basic fade' },
          { value: '+ translateY(8px → 0)', note: 'lift-and-fade (more polished)' },
        ],
        demoHtml: `<div class="box fade">Fade In</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;height:100px;background:#f9fafb;margin:0}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.box{padding:12px 24px;background:#6366f1;color:#fff;border-radius:8px;font-weight:700;animation:fadeIn 1s ease-out infinite alternate}`,
      },
      {
        id: 'loading-spinner',
        property: 'Loading Spinner',
        description:
          'A rotating border trick: a transparent border with one colored side, spinning with linear timing.',
        values: [
          { value: 'border-top-color', note: 'one side colored' },
          { value: 'rotate(360deg)', note: 'full spin' },
          { value: 'linear', note: 'constant speed (no ease)' },
        ],
        demoHtml: `<div class="spinner"></div>`,
        demoCss: `body{display:flex;align-items:center;justify-content:center;height:100px;margin:0;background:#f9fafb}
@keyframes spin{to{transform:rotate(360deg)}}
.spinner{width:40px;height:40px;border:4px solid #e5e7eb;border-top-color:#6366f1;border-radius:50%;animation:spin 0.7s linear infinite}`,
      },
      {
        id: 'pulse-glow',
        property: 'Pulse / Glow',
        description:
          'Draw attention to an element using a scale pulse or expanding box-shadow glow. Great for notifications.',
        values: [
          { value: 'scale(1) → scale(1.1)', note: 'size pulse' },
          { value: 'box-shadow spread', note: 'glow ripple' },
        ],
        demoHtml: `<div class="dot pulse"></div>
<div class="badge glow">NEW</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;display:flex;gap:24px;align-items:center;padding:20px;background:#f9fafb}
@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.2);opacity:0.7}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.5)}50%{box-shadow:0 0 0 10px rgba(99,102,241,0)}}
.dot{width:20px;height:20px;border-radius:50%;background:#6366f1;animation:pulse 1.2s ease-in-out infinite}
.badge{padding:6px 14px;background:#6366f1;color:#fff;border-radius:20px;font-size:12px;font-weight:700;animation:glow 1.5s ease-in-out infinite}`,
      },
      {
        id: 'stagger',
        property: 'Staggered Entrance',
        description:
          'Give multiple elements the same animation but increasing delays. Creates a cascading wave effect.',
        values: [
          { value: 'animation-delay: 0s, 0.1s, 0.2s…', note: 'incremental delays' },
          { value: 'animation-fill-mode: both', note: 'hold start state during delay' },
        ],
        demoHtml: `<div class="list">
  <div class="item i1">Item 1</div>
  <div class="item i2">Item 2</div>
  <div class="item i3">Item 3</div>
  <div class="item i4">Item 4</div>
</div>`,
        demoCss: `body{font-family:system-ui,sans-serif;padding:8px;background:#f9fafb}
@keyframes enter{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
.list{display:flex;flex-direction:column;gap:4px}
.item{padding:6px 12px;background:#6366f1;color:#fff;border-radius:6px;font-size:12px;font-weight:600;animation:enter 0.5s ease-out both infinite}
.i1{animation-delay:0s}.i2{animation-delay:0.15s}.i3{animation-delay:0.3s}.i4{animation-delay:0.45s}`,
      },
    ],
  },
];
