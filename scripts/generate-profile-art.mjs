import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PALETTE = {
  canvas: '#0d1117',
  surface: '#161b22',
  line: '#30363d',
  muted: '#8b949e',
  text: '#e6edf3',
  strong: '#f0f6fc',
  accent: '#e3b341',
};

const projects = [
  {
    name: 'CHUKA HOSTELS / LIVE',
    description: 'Housing access built around weak networks, low-cost phones, and real M-Pesa settlement.',
    stack: 'NEXT.JS · REACT · TYPESCRIPT · SUPABASE · M-PESA',
  },
  {
    name: 'INSPECTION TRACKER / LIVE',
    description: 'Offline-first operations with ordered sync, role handovers, audit history, and 248 tests.',
    stack: 'REACT · VITE · SUPABASE · WORKBOX · VITEST',
  },
  {
    name: 'BEST WESTERN PLUS MERIDIAN / LIVE',
    description: 'A responsive, accessible hotel experience built without hiding behind a framework.',
    stack: 'SEMANTIC HTML · CSS · VANILLA JAVASCRIPT',
  },
];

const lab = {
  name: 'UNISUBMIT / LAB',
  description: 'Explainable collaborator matching, hybrid search, duplicate detection, and measured recommender quality.',
  stack: 'SPRING BOOT · JAVA · POSTGRESQL · PGVECTOR · SPECTER2 · PYTHON',
};

const pixelFont = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
};

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function wrapText(value, maxCharacters) {
  const words = value.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharacters) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function renderPixels(config) {
  const phrase = 'BRIAN MBUYA';
  const { pixelCell, pixelGap, letterGap, pixelX, pixelY } = config;
  const letterWidth = pixelCell * 5 + pixelGap * 4;
  const spaceWidth = letterWidth * 0.48;
  let cursorX = pixelX;
  let pixelIndex = 0;
  const pixels = [];

  for (const character of phrase) {
    if (character === ' ') {
      cursorX += spaceWidth + letterGap;
      continue;
    }
    const glyph = pixelFont[character];
    for (let row = 0; row < glyph.length; row += 1) {
      for (let column = 0; column < glyph[row].length; column += 1) {
        if (glyph[row][column] !== '1') continue;
        const x = cursorX + column * (pixelCell + pixelGap);
        const y = pixelY + row * (pixelCell + pixelGap);
        const assembleDelay = 80 + ((pixelIndex * 37 + row * 53 + column * 29) % 920);
        const scanDelay = -Math.round((x / config.width) * 7600);
        pixels.push(`<rect class="pixel" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${pixelCell}" height="${pixelCell}" rx="${config.mobile ? 0.8 : 1.2}" style="animation-delay:${assembleDelay}ms,${scanDelay}ms"/>`);
        pixelIndex += 1;
      }
    }
    cursorX += letterWidth + letterGap;
  }

  return pixels.join('');
}

function renderArtboard(config) {
  let globalGlyph = 0;
  let lineIndex = 0;
  const content = [];
  const rails = [];
  const left = config.contentX;
  let y = config.contentTop;

  function glyphLine(text, className, x = left, customY = y) {
    const characters = [...text];
    const glyphs = characters.map((character) => {
      const delay = Math.min(4700, 920 + globalGlyph * 2.05 + lineIndex * 18);
      globalGlyph += 1;
      const rendered = character === ' ' ? '&#160;' : escapeXml(character);
      return `<tspan class="glyph" style="animation-delay:${delay.toFixed(0)}ms">${rendered}</tspan>`;
    }).join('');
    content.push(`<text class="line ${className}" x="${x}" y="${customY}" xml:space="preserve">${glyphs}</text>`);
    lineIndex += 1;
  }

  function wrappedLines(text, className, maxCharacters, lineHeight) {
    for (const line of wrapText(text, maxCharacters)) {
      glyphLine(line, className);
      y += lineHeight;
    }
  }

  function section(label) {
    const railY = y - 13;
    const railDelay = Math.min(4300, 700 + railY * 2.2);
    rails.push(`<path class="rail" pathLength="1" d="M ${config.railX} ${railY} H ${config.width - config.railX}" style="animation-delay:${railDelay.toFixed(0)}ms"/>`);
    glyphLine(label, 'section');
    y += config.sectionAfter;
  }

  function entry(item) {
    glyphLine(item.name, 'project');
    y += config.projectAfter;
    wrappedLines(item.description, 'body', config.bodyMax, config.bodyLine);
    y += config.stackBefore;
    wrappedLines(item.stack, 'stack', config.stackMax, config.stackLine);
    y += config.entryAfter;
  }

  glyphLine('I BUILD USEFUL THINGS AND MAKE SYSTEMS BETTER.', 'manifesto');
  y += config.manifestoLine;
  wrappedLines('SERIOUS PROBLEMS · GOOD TEAMS · WORK THAT MATTERS', 'metadata', config.metaMax, config.metaLine);
  y += config.introAfter;

  section('01 / LIVE SYSTEMS');
  for (const project of projects) entry(project);

  section('02 / DEEPER WORK');
  entry(lab);

  section('03 / PRINCIPLE');
  glyphLine('LEAVE IT BETTER THAN I FOUND IT.', 'principle');
  y += config.principleAfter;
  wrappedLines('EVERY GLYPH IN THIS FRAME IS GENERATED. THE LINKS BELOW REMAIN LIVE.', 'metadata', config.metaMax, config.metaLine);

  const height = Math.ceil(y + config.bottomPadding);
  const pixelMarkup = renderPixels({ ...config, height });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${config.width} ${height}" role="img" aria-labelledby="title description">
  <title id="title">Brian Mbuya kinetic profile</title>
  <desc id="description">An animated source document where Brian Mbuya's name assembles from pixels, every character decodes into place, and an amber read-head continuously scans the completed profile.</desc>
  <style>
    svg{background:${PALETTE.canvas};text-rendering:geometricPrecision;shape-rendering:geometricPrecision}
    .pixel{fill:${PALETTE.strong};opacity:1;animation:assemble 520ms cubic-bezier(.22,1,.36,1) both,pixel-scan 7.6s linear infinite}
    @keyframes assemble{0%{opacity:0}45%{opacity:.18}100%{opacity:1}}
    @keyframes pixel-scan{0%,82%,100%{fill:${PALETTE.strong}}88%,92%{fill:${PALETTE.accent}}}
    .line{font-family:ui-monospace,SFMono-Regular,"Cascadia Code",Menlo,Consolas,monospace}
    .glyph{opacity:1;animation:decode 640ms cubic-bezier(.22,1,.36,1) both}
    @keyframes decode{0%,28%{opacity:.04}48%{opacity:.82}62%{opacity:.2}100%{opacity:1}}
    .manifesto{fill:${PALETTE.strong};font-size:${config.manifestoSize}px;font-weight:700;letter-spacing:${config.mobile ? 0.1 : 0.35}px}
    .metadata{fill:${PALETTE.muted};font-size:${config.metaSize}px;letter-spacing:${config.mobile ? 0.45 : 0.75}px}
    .section{fill:${PALETTE.accent};font-size:${config.sectionSize}px;font-weight:700;letter-spacing:${config.mobile ? 0.55 : 0.9}px}
    .project{fill:${PALETTE.strong};font-size:${config.projectSize}px;font-weight:700;letter-spacing:.15px}
    .body{fill:${PALETTE.text};font-size:${config.bodySize}px}
    .stack{fill:${PALETTE.muted};font-size:${config.stackSize}px;letter-spacing:.2px}
    .principle{fill:${PALETTE.accent};font-size:${config.principleSize}px;font-weight:750;letter-spacing:${config.mobile ? 0.15 : 0.4}px}
    .rail{fill:none;stroke:${PALETTE.line};stroke-width:1;stroke-dasharray:1;stroke-dashoffset:1;animation:draw-rail 760ms cubic-bezier(.22,1,.36,1) both}
    @keyframes draw-rail{to{stroke-dashoffset:0}}
    .read-head{animation:read ${config.scanSeconds}s linear infinite}
    @keyframes read{from{transform:translateY(${config.scanStart}px)}to{transform:translateY(${height + 40}px)}}
    .head-line{stroke:${PALETTE.line};stroke-width:.7;opacity:.58}
    .head-signal{stroke:${PALETTE.accent};stroke-width:1.25;stroke-linecap:round}
    .spine{stroke:${PALETTE.line};stroke-width:1;stroke-dasharray:2 7}
    .spine-signal{stroke:${PALETTE.accent};stroke-width:2;stroke-linecap:round;stroke-dasharray:18 ${height};animation:spine-run ${config.scanSeconds}s linear infinite}
    @keyframes spine-run{from{stroke-dashoffset:0}to{stroke-dashoffset:-${height}}}
    @media (prefers-reduced-motion:reduce){.pixel,.glyph,.rail,.read-head,.spine-signal{animation:none}.rail{stroke-dashoffset:0}.read-head{display:none}}
  </style>
  <rect width="${config.width}" height="${height}" rx="${config.mobile ? 10 : 14}" fill="${PALETTE.canvas}"/>
  <g>${pixelMarkup}</g>
  <text class="line metadata" x="${config.pixelX}" y="${config.identityY}">GENERATED IDENTITY / BRIAN-MBUYA / REV 01</text>
  <line class="spine" x1="${config.spineX}" y1="${config.contentTop - 42}" x2="${config.spineX}" y2="${height - config.bottomPadding + 18}"/>
  <line class="spine-signal" x1="${config.spineX}" y1="${config.contentTop - 42}" x2="${config.spineX}" y2="${height - config.bottomPadding + 18}"/>
  <g>${rails.join('')}</g>
  <g>${content.join('')}</g>
  <g class="read-head">
    <line class="head-line" x1="${config.railX}" y1="0" x2="${config.width - config.railX}" y2="0"/>
    <line class="head-signal" x1="${config.railX}" y1="0" x2="${config.railX + config.signalWidth}" y2="0"/>
  </g>
</svg>\n`;
}

const desktop = renderArtboard({
  mobile: false,
  width: 920,
  pixelCell: 10,
  pixelGap: 2,
  letterGap: 7,
  pixelX: 54,
  pixelY: 42,
  identityY: 154,
  contentX: 86,
  contentTop: 214,
  railX: 42,
  spineX: 57,
  signalWidth: 138,
  scanStart: 178,
  scanSeconds: 11.5,
  bodyMax: 88,
  stackMax: 96,
  metaMax: 82,
  manifestoSize: 19,
  metaSize: 12,
  sectionSize: 14,
  projectSize: 17,
  bodySize: 15,
  stackSize: 12,
  principleSize: 21,
  manifestoLine: 31,
  metaLine: 19,
  introAfter: 48,
  sectionAfter: 35,
  projectAfter: 28,
  bodyLine: 23,
  stackBefore: 3,
  stackLine: 18,
  entryAfter: 34,
  principleAfter: 35,
  bottomPadding: 52,
});

const mobile = renderArtboard({
  mobile: true,
  width: 480,
  pixelCell: 5.2,
  pixelGap: 1.25,
  letterGap: 4.5,
  pixelX: 24,
  pixelY: 30,
  identityY: 104,
  contentX: 48,
  contentTop: 158,
  railX: 22,
  spineX: 30,
  signalWidth: 82,
  scanStart: 128,
  scanSeconds: 13,
  bodyMax: 42,
  stackMax: 44,
  metaMax: 41,
  manifestoSize: 15,
  metaSize: 10.5,
  sectionSize: 12.5,
  projectSize: 15,
  bodySize: 14,
  stackSize: 10.5,
  principleSize: 16.5,
  manifestoLine: 28,
  metaLine: 18,
  introAfter: 45,
  sectionAfter: 33,
  projectAfter: 27,
  bodyLine: 22,
  stackBefore: 4,
  stackLine: 18,
  entryAfter: 35,
  principleAfter: 34,
  bottomPadding: 48,
});

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const assets = join(root, 'assets');
await mkdir(assets, { recursive: true });
await Promise.all([
  writeFile(join(assets, 'profile.svg'), desktop, 'utf8'),
  writeFile(join(assets, 'profile-mobile.svg'), mobile, 'utf8'),
]);

console.log(`Generated assets/profile.svg (${Buffer.byteLength(desktop)} bytes)`);
console.log(`Generated assets/profile-mobile.svg (${Buffer.byteLength(mobile)} bytes)`);
