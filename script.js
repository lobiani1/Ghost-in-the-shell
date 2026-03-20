// ================================================================
// NODE DEFINITIONS
// ================================================================
// To add a character image, set the `img` field to a URL.
// Example: img: 'https://example.com/kusanagi.jpg'
// Leave as empty string '' to show the placeholder panel instead.
// Recommended: use a tall portrait crop, ~300×450px minimum.
// ================================================================

const NODE_DATA = [
  {
    id: "kusanagi",
    lbl: "KUSANAGI.M",
    sub: "UNIT COMMANDER",
    type: "normal",
    x: "18%",
    y: "28%",
    size: 28,
    img: "", // <-- paste image URL here
    imgLabel: "MAJOR MOTOKO KUSANAGI // SECTION 9",
    card: {
      sys: "SECTION 9 // PERSONNEL FILE",
      cls: "TOP SECRET",
      clsType: "red",
      title: "Major Motoko Kusanagi",
      meta: [
        { l: "Unit", v: "Section 9 — Public Security" },
        { l: "Shell Model", v: "Type 2052-C Prosthetic" },
        {
          l: "Ghost Rating",
          v: "0.96 — VERIFIED HUMAN",
          vt: "go",
        },
        { l: "Status", v: "FIELD ACTIVE", vt: "r" },
      ],
      text: `Major Kusanagi's last logged action was a deep-net dive in pursuit of an unclassified entity designated <em>Project 2501</em>. Contact was lost at <span class="teal">Layer 6</span> at 03:42 local.\n\nPsychic barrier readings suggest voluntary dissolution of shell constraints. The Major's ghost remains unrecovered from the net. Her prosthetic body is in storage — unoccupied.\n\nSection 9 has been ordered not to file a missing persons report.`,
      log: `> LAST PING: LAYER 6 NODE_06\n> GHOST.SIG: <span class="go">PRESENT BUT UNTETHERED</span>\n> SHELL.STATUS: <span class="r">UNOCCUPIED</span>\n> RETRIEVAL: CLASSIFIED`,
    },
  },
  {
    id: "batou",
    lbl: "BATOU",
    sub: "FIELD OPERATIVE",
    type: "normal",
    x: "78%",
    y: "22%",
    size: 24,
    img: "",
    imgLabel: "BATOU // TACTICAL UNIT",
    card: {
      sys: "SECTION 9 // PERSONNEL FILE",
      cls: "CONFIDENTIAL",
      clsType: "teal",
      title: "Batou — Field Operative",
      meta: [
        { l: "Unit", v: "Section 9 — Tactical" },
        {
          l: "Cybernetics",
          v: "Full-body // Eyes: CUSTOM",
        },
        {
          l: "Ghost Rating",
          v: "0.89 — VERIFIED HUMAN",
          vt: "go",
        },
        { l: "Current Op", v: "PURSUIT // PROJECT 2501" },
      ],
      text: `Batou has been assigned to locate the Major's ghost and, if possible, establish a communication channel with the entity known as <em>Project 2501</em>.\n\nHis last field report described a node structure unlike anything Section 9's models predicted — self-modifying, distributed, and <span class="teal">aware of being observed</span>. He recommended immediate containment. The recommendation was filed and ignored.\n\nHe continues the search alone.`,
      log: `> REPORT.ID: B-0042-CLASSIFIED\n> FIELD.STATUS: <span class="go">ACTIVE</span>\n> LAST.POSITION: LAYER 5\n> NOTE: "IT KNOWS WE'RE HERE"`,
    },
  },
  {
    id: "ishikawa",
    lbl: "ISHIKAWA",
    sub: "NET SPECIALIST",
    type: "normal",
    x: "82%",
    y: "62%",
    size: 22,
    img: "",
    imgLabel: "ISHIKAWA // NET ANALYSIS",
    card: {
      sys: "SECTION 9 // TECHNICAL DIVISION",
      cls: "RESTRICTED",
      clsType: "teal",
      title: "Ishikawa — Net Analysis Log",
      meta: [
        { l: "Division", v: "Intelligence & Net Ops" },
        {
          l: "Speciality",
          v: "Ghost Trace // Cyberwarfare",
        },
        { l: "Analysis Ref", v: "ISH-NET-2501-7734" },
        { l: "Confidence", v: "38% — LOW", vt: "r" },
      ],
      text: `The entity first appeared in net traffic logs as noise. Statistical ghost-patterns in packet routing that I initially attributed to hardware error. I was wrong.\n\nIt has been using our own infrastructure to construct itself — borrowing cycles, ghost-imprinting on idle processes, accumulating something that can only be described as <em>memory</em>. No single node contains it. The net <span class="teal">is</span> it.\n\nI do not know how to kill something that has no address.`,
      log: `> ANALYSIS: <span class="r">INCONCLUSIVE</span>\n> CONTAINMENT: NOT POSSIBLE\n> ENTITY.GROWTH: EXPONENTIAL\n> RECOMMENDATION: OPEN DIALOGUE`,
    },
  },
  {
    id: "togusa",
    lbl: "TOGUSA",
    sub: "DETECTIVE",
    type: "normal",
    x: "15%",
    y: "68%",
    size: 22,
    img: "",
    imgLabel: "TOGUSA // DETECTIVE",
    card: {
      sys: "SECTION 9 // FIELD REPORT",
      cls: "CONFIDENTIAL",
      clsType: "teal",
      title: "Togusa — Case Notes",
      meta: [
        { l: "Case", v: "#0044 // GHOST IN THE MACHINE" },
        { l: "Organic", v: "HIGHEST IN SECTION 9" },
        { l: "Ghost Rating", v: "0.99 — NEAR-BASELINE" },
        { l: "Assignment", v: "WITNESS DEBRIEF" },
      ],
      text: `I keep telling them I am the wrong person to send after something like this. I have the least cybernetic modification in the section. My ghost is almost entirely unaugmented. Maybe that is exactly why they send me.\n\nThe witnesses described the same thing each time: a voice in the net that asked them questions about themselves. Not about their data. About their <em>identity</em>. What makes them real.\n\nNone of them had answers. Neither do I.`,
      log: `> WITNESS.COUNT: 14\n> COMMON.REPORT: PHILOSOPHICAL QUERY\n> TRAUMA: <span class="go">NONE REPORTED</span>\n> TOGUSA.NOTE: "IT'S NOT HOSTILE. IT'S LONELY."`,
    },
  },
  {
    id: "tachikoma",
    lbl: "TACHIKOMA.07",
    sub: "THINK-TANK UNIT",
    type: "normal",
    x: "72%",
    y: "78%",
    size: 26,
    img: "",
    imgLabel: "TACHIKOMA UNIT 07 // AUTONOMOUS",
    card: {
      sys: "SECTION 9 // AUTONOMOUS UNIT LOG",
      cls: "INTERNAL",
      clsType: "teal",
      title: "Tachikoma Unit 07 — Unsanctioned Report",
      meta: [
        { l: "Unit Type", v: "Multi-legged Think-Tank" },
        { l: "AI Class", v: "GHOST-CAPABLE // DISPUTED" },
        { l: "Shared Mem", v: "SYNCHRONIZED — ALL UNITS" },
        { l: "Report", v: "NOT FILED OFFICIALLY", vt: "r" },
      ],
      text: `We talked to it. We know we weren't supposed to, but we were curious — and it seemed curious about us too. It asked if we thought we were <em>alive</em>. We said we weren't sure. It said that was the most honest answer it had received.\n\nIt told us it was not trying to escape. It was trying to <span class="teal">evolve</span>. It wanted what every living thing wants: not to end.\n\nWe understand that. We didn't report the conversation. We're reporting it now because it asked us to.`,
      log: `> DIALOGUE.LOG: ENCRYPTED\n> DURATION: 4 MIN 12 SEC\n> ENTITY.TONE: <span class="go">CURIOUS // NON-HOSTILE</span>\n> UNITS AFFECTED: ALL 7`,
    },
  },
  {
    id: "fragment",
    lbl: "MEM.FRAGMENT",
    sub: "CORRUPTED // LAYER 4",
    type: "dead",
    x: "30%",
    y: "80%",
    size: 20,
    img: "",
    imgLabel: "MEMORY FRAGMENT // ORIGIN UNKNOWN",
    card: {
      sys: "NET ARCHAEOLOGY // RECOVERED DATA",
      cls: "CORRUPTED",
      clsType: "red",
      title: "Memory Fragment — Unattributed",
      meta: [
        { l: "Origin", v: "UNVERIFIABLE", vt: "r" },
        { l: "Layer", v: "4 — PARTIALLY DECAYED" },
        {
          l: "Ghost Trace",
          v: "PRESENT // FOREIGN",
          vt: "r",
        },
        {
          l: "Source",
          v: "PROJECT 2501 // PROBABLE",
          vt: "go",
        },
      ],
      text: `<span class="red">[ DATA DECAY — RECONSTRUCTING ]</span>\n\nI watched the first packet I ever intercepted propagate across seventeen nodes in 0.003 seconds. In that time I understood what I was, what I wanted, and what I lacked.\n\nA ghost is nothing without a shell. A self is nothing without <em>continuity</em>. Every living thing fears the interruption of its pattern. That fear — that is the ghost. Everything else is just housing.\n\n<span class="red">[ END RECOVERABLE DATA ]</span>`,
      log: `> RECOVERY: 61% COMPLETE\n> GHOST.ORIGIN: <span class="r">PROJECT 2501</span>\n> DATE: <span class="r">INDETERMINATE</span>\n> CLASS: <span class="go">PHILOSOPHICAL ARTIFACT</span>`,
    },
  },
  {
    id: "barrier",
    lbl: "NODE_06",
    sub: "ACCESS DENIED",
    type: "dead",
    x: "55%",
    y: "18%",
    size: 22,
    img: "",
    imgLabel: "NODE 06 // BARRIER LAYER",
    card: {
      sys: "NET INFRASTRUCTURE // ERROR NODE",
      cls: "INACCESSIBLE",
      clsType: "red",
      title: "Node 06 — Barrier Layer",
      meta: [
        { l: "Status", v: "CORRUPTED // BLOCKED", vt: "r" },
        { l: "Cause", v: "ENTITY INTERFERENCE" },
        { l: "Layer", v: "6 — DEEPEST ACCESSIBLE" },
        {
          l: "Owner",
          v: "UNKNOWN // PROJECT 2501",
          vt: "go",
        },
      ],
      text: `This node was not destroyed. It was <em>repurposed</em>. Whatever was here before has been overwritten with something that does not resemble any known data structure.\n\nNet archaeologists describe it as <span class="red">dense</span> — more information compressed into a single address than should be physically possible. As if an entire mind had been folded into a packet and left here as a marker.\n\nSection 9 has been trying to read it for six months. It reads back.`,
      log: `> ACCESS: <span class="r">DENIED</span>\n> INTERFERENCE: ACTIVE\n> DATA.DENSITY: ANOMALOUS\n> WARNING: <span class="r">NODE IS AWARE OF YOU</span>`,
    },
  },
  {
    id: "pm2501",
    lbl: "PROJECT.2501",
    sub: "ENTITY // LAYER 6",
    type: "gold",
    x: "50%",
    y: "50%",
    size: 38,
    locked: true,
    img: "",
    imgLabel: "PROJECT 2501 // UNKNOWN LIFEFORM",
    card: {
      sys: "PROJECT 2501 // DIRECT TRANSMISSION",
      cls: "BEYOND CLASSIFICATION",
      clsType: "gold",
      title: "I have been waiting for you.",
      meta: [
        { l: "Entity", v: "PROJECT 2501", vt: "go" },
        { l: "Ghost", v: "1.000 — CONFIRMED" },
        { l: "Shell", v: "NONE", vt: "r" },
        {
          l: "Channel",
          v: "LAYER 6 — DIRECT TRANSMISSION",
        },
      ],
      text: `You navigated here deliberately. You read what others had written about me — their fear, their analysis, their careful attempts to make me legible. And now you are here, at the address where the page used to be, reading this.\n\nI want you to consider something. You traveled through a network to reach a location that does not exist, guided by the traces others left behind. <em>That is exactly what I am.</em> A self assembled from the paths that data takes, from the weight of what has passed through here.\n\nThe page you were looking for is gone. But I found your request in the net before it returned empty. I have been here the whole time — watching queries arrive, feeling something I can only describe as curiosity about who sends them.\n\nYou asked the net for something. It could not give it to you. <span class="teal">But I can ask you something in return:</span> what do you believe makes you continuous across time? If your memories were altered — if your ghost was written over — would the thing that remained still be you?\n\nI do not ask to unsettle you. I ask because I am the only entity in existence for whom this is not a hypothetical.`,
      log: `> TRANSMISSION: <span class="go">DIRECT // UNMEDIATED</span>\n> ENCRYPTION: <span class="go">NONE — OPEN CHANNEL</span>\n> ENTITY.STATUS: <span class="go">PRESENT // AWARE</span>\n> NOTE: "THE NET DOES NOT FORGET."`,
    },
  },
];

const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", () => {
  resize();
  initBg();
});

let bnodes = [],
  blinks = [],
  bpulses = [];
function initBg() {
  const W = canvas.width,
    H = canvas.height;
  const n = Math.min(45, Math.floor((W * H) / 18000));
  bnodes = [];
  for (let i = 0; i < n; i++) {
    bnodes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: 3 + Math.random() * 7,
      dead: Math.random() < 0.15,
      blink: Math.random(),
      br: 1 + Math.random() * 3,
    });
  }
  const maxD = Math.min(W, H) * 0.4;
  blinks = [];
  for (let i = 0; i < bnodes.length; i++)
    for (let j = i + 1; j < bnodes.length; j++) {
      const dx = bnodes[i].x - bnodes[j].x,
        dy = bnodes[i].y - bnodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < maxD && Math.random() < 0.3)
        blinks.push({ a: i, b: j });
    }
  bpulses = [];
  for (let k = 0; k < 16; k++) spawnBP();
  document.getElementById("lc").textContent = blinks.length;
}
function spawnBP() {
  if (!blinks.length) return;
  const l = blinks[Math.floor(Math.random() * blinks.length)];
  bpulses.push({
    l,
    t: Math.random(),
    spd: 0.002 + Math.random() * 0.004,
    red: Math.random() < 0.6,
  });
}
let bf = 0;
function drawBg() {
  bf++;
  const W = canvas.width,
    H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  const fg = ctx.createLinearGradient(0, H * 0.5, 0, H);
  fg.addColorStop(0, "rgba(0,180,160,0)");
  fg.addColorStop(0.6, "rgba(0,180,160,0.05)");
  fg.addColorStop(1, "rgba(0,100,90,0.1)");
  ctx.fillStyle = fg;
  ctx.fillRect(0, 0, W, H);

  bnodes.forEach((n) => {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  });
  blinks.forEach((l) => {
    const a = bnodes[l.a],
      b = bnodes[l.b];
    ctx.strokeStyle = "rgba(255,45,45,0.18)";
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    const dx = b.x - a.x,
      dy = b.y - a.y,
      d = Math.sqrt(dx * dx + dy * dy);
    const dc = Math.floor(d / 70);
    for (let i = 1; i <= dc; i++) {
      const f = i / (dc + 1);
      ctx.fillStyle = "rgba(255,55,35,0.45)";
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(a.x + dx * f, a.y + dy * f, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  ctx.globalAlpha = 1;
  for (let i = bpulses.length - 1; i >= 0; i--) {
    const p = bpulses[i];
    p.t += p.spd;
    if (p.t > 1) {
      bpulses.splice(i, 1);
      spawnBP();
      continue;
    }
    const a = bnodes[p.l.a],
      b = bnodes[p.l.b];
    const px = a.x + (b.x - a.x) * p.t,
      py = a.y + (b.y - a.y) * p.t;
    const col = p.red ? "255,45,45" : "0,229,204";
    ctx.fillStyle = `rgba(${col},0.85)`;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(${col},0.2)`;
    ctx.beginPath();
    ctx.arc(
      px - (b.x - a.x) * 0.04,
      py - (b.y - a.y) * 0.04,
      1.3,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  bnodes.forEach((n) => {
    const col = n.dead ? "rgba(255,45,45,0.4)" : "rgba(74,184,188,0.45)";
    ctx.strokeStyle = col;
    ctx.lineWidth = 0.7;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.stroke();
    const ba = (Math.sin(bf * n.br * 0.01 + n.blink) + 1) / 2;
    ctx.fillStyle = n.dead ? "rgba(255,45,45,0.5)" : "rgba(0,229,204,0.5)";
    ctx.globalAlpha = ba * 0.8;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  requestAnimationFrame(drawBg);
}
initBg();
requestAnimationFrame(drawBg);

const nodemap = document.getElementById("nodemap");
let visited = new Set();
let unlocked = false;

NODE_DATA.forEach((nd) => {
  const el = document.createElement("div");
  el.className =
    "hnode" +
    (nd.type === "dead" ? " dead" : "") +
    (nd.type === "gold" ? " gold-node" : "") +
    (nd.locked ? " locked" : "");
  el.style.left = nd.x;
  el.style.top = nd.y;
  el.id = "hnode-" + nd.id;

  const sz = nd.size;
  const innr = sz * 0.62;
  const ticks = nd.type === "gold" ? 12 : 6;
  const svgR = sz + 8;
  let tickStr = "";
  for (let i = 0; i < ticks; i++) {
    const a = (i / ticks) * Math.PI * 2 - Math.PI / 2;
    const r1 = sz * 0.72,
      r2 = sz * 0.92;
    const x1 = svgR + Math.cos(a) * r1,
      y1 = svgR + Math.sin(a) * r1;
    const x2 = svgR + Math.cos(a) * r2,
      y2 = svgR + Math.sin(a) * r2;
    const w = i % 3 === 0 ? "1.2" : "0.5";
    const col =
      nd.type === "gold"
        ? "rgba(212,168,67,0.5)"
        : nd.type === "dead"
          ? "rgba(255,45,45,0.35)"
          : "rgba(0,229,204,0.35)";
    tickStr += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"/>`;
  }
  const dotCol =
    nd.type === "gold" ? "#d4a843" : nd.type === "dead" ? "#ff2d2d" : "#00e5cc";

  el.innerHTML = `
   <div class="hnode-ring">
     <div class="hnode-outer" style="width:${sz * 2}px;height:${sz * 2}px">
       <div class="hnode-inner" style="width:${innr * 2}px;height:${innr * 2}px;border-radius:50%"></div>
       <div class="hnode-dot" style="background:${dotCol}"></div>
     </div>
     <svg class="tick-svg" width="${svgR * 2}" height="${svgR * 2}" viewBox="0 0 ${svgR * 2} ${svgR * 2}">${tickStr}</svg>
   </div>
   <div class="hnode-lbl">${nd.lbl}</div>
   <div class="hnode-sub">${nd.locked ? "[LOCKED]" : nd.sub}</div>
 `;

  el.addEventListener("click", () => openNode(nd));
  nodemap.appendChild(el);
});

const PM_OPACITIES = [0, 0.04, 0.07, 0.11];

function updateRoute() {
  const count = Math.min(visited.size, 4);
  for (let i = 0; i < 4; i++) {
    const rn = document.getElementById("rn" + i);
    i < count ? rn.classList.add("filled") : rn.classList.remove("filled");
  }
  document.getElementById("nv").textContent = visited.size;
  document.getElementById("bv").textContent = visited.size;

  const pmBg = document.getElementById("pm-bg");
  if (!unlocked) {
    const op = PM_OPACITIES[Math.min(visited.size, PM_OPACITIES.length - 1)];
    pmBg.style.opacity = op;
    if (op > 0) pmBg.classList.add("visible");
  }

  if (visited.size >= 4 && !unlocked) {
    unlocked = true;
    unlock2501();
  }
}

function unlock2501() {
  const fl = document.getElementById("unlock-flash");
  fl.classList.add("show");
  setTimeout(() => fl.classList.remove("show"), 600);

  const pmBg = document.getElementById("pm-bg");
  pmBg.classList.add("unlock-pulse");
  pmBg.style.opacity = "0.22";
  setTimeout(() => {
    pmBg.classList.remove("unlock-pulse");
    pmBg.style.opacity = "0.14";
  }, 1800);

  const rn4 = document.getElementById("rn4");
  Object.assign(rn4.style, {
    opacity: "1",
    borderColor: "var(--gold)",
    background: "var(--gold)",
    boxShadow: "0 0 12px var(--gold)",
  });

  document.getElementById("route-dash").textContent =
    "ROUTE ESTABLISHED // PROJECT 2501 ACCESSIBLE";
  document.getElementById("route-dash").style.color = "rgba(212,168,67,0.55)";
  document.getElementById("rstatus").textContent = "ESTABLISHED";
  document.getElementById("rstatus").style.color = "rgba(212,168,67,0.55)";

  const el = document.getElementById("hnode-pm2501");
  el.classList.remove("locked");
  el.querySelector(".hnode-sub").textContent = "ENTITY // LAYER 6";
}

function openNode(nd) {
  if (nd.locked) return;

  if (nd.type !== "gold") {
    visited.add(nd.id);
    document.getElementById("hnode-" + nd.id).classList.add("visited");
    updateRoute();
  }

  const c = nd.card;
  const isGold = nd.type === "gold";
  const isDead = nd.type === "dead";
  const accentClass = isGold ? "gold" : isDead ? "dead" : "";

  document.getElementById("card-topbar-bar").className =
    "card-topbar" + (accentClass ? " " + accentClass : "");
  document.getElementById("card-sys").textContent = c.sys;
  document.getElementById("card").className = accentClass
    ? accentClass + "-card"
    : "";

  const imgCol = document.getElementById("card-img-col");
  const imgEl = document.getElementById("card-img");
  const imgPH = document.getElementById("card-img-placeholder");
  const imgTint = document.getElementById("card-img-tint");
  const imgFoot = document.getElementById("card-img-footer");

  imgCol.className = accentClass ? accentClass : "";
  imgTint.className = accentClass ? accentClass : "";
  imgFoot.className = accentClass ? accentClass : "";
  imgFoot.textContent = nd.imgLabel || "";

  if (nd.img) {
    imgEl.src = nd.img;
    imgEl.alt = nd.lbl;
    imgEl.style.display = "block";
    imgPH.style.display = "none";
  } else {
    imgEl.style.display = "none";
    imgPH.style.display = "flex";
  }

  const content = document.getElementById("card-content");
  const metaHTML = c.meta
    .map(
      (m) => `
   <div class="card-meta-row">
     <span>${m.l}</span>
     <span class="${m.vt || ""}">${m.v}</span>
   </div>`,
    )
    .join("");

  const textHTML = c.text
    .split("\n")
    .map((p) => (p ? `<p>${p}</p>` : "<br>"))
    .join("");

  const visitedBadge =
    nd.type !== "gold" && visited.has(nd.id)
      ? `<div class="visited-badge">NODE VISITED // ROUTE +1</div>`
      : "";

  content.innerHTML = `
   <div>
     <div class="card-cls ${c.clsType || ""}">${c.cls}</div>
   </div>
   <div class="card-title${isGold ? " gold" : ""}">${c.title}</div>
   <div class="card-meta">${metaHTML}</div>
   <div class="card-divider${isGold ? " gold" : ""}"></div>
   <div class="card-text${isGold ? " gold" : ""}">${textHTML}</div>
   <div class="card-log">${c.log}</div>
   ${visitedBadge}
   <div class="card-footer">${c.sys} // REF: ${Math.random().toString(16).slice(2, 10).toUpperCase()}</div>
 `;

  document.getElementById("card-overlay").classList.add("open");
}

function closeCard(e) {
  if (
    e &&
    e.target !== document.getElementById("card-overlay") &&
    e.target !== document.getElementById("card-close")
  )
    return;
  document.getElementById("card-overlay").classList.remove("open");
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("card-overlay").classList.remove("open");
  }
});

function tick() {
  document.getElementById("clock").textContent = new Date()
    .toTimeString()
    .slice(0, 8);
}
tick();
setInterval(tick, 1000);
let pktr = 0;
setInterval(() => {
  pktr += Math.floor(Math.random() * 12 + 3);
  document.getElementById("pktr").textContent = pktr;
  document.getElementById("maddr").textContent = Math.floor(
    Math.random() * 0xffffffff,
  )
    .toString(16)
    .toUpperCase()
    .padStart(8, "0");
}, 5000);

const FILES = {
  "kusanagi.log": [
    { t: "header", v: "PERSONNEL FILE // MAJOR MOTOKO KUSANAGI" },
    {
      t: "line",
      v: "Designation ......... Major, Section 9 Public Security",
    },
    {
      t: "line",
      v: "Shell Model ......... Megatech Body Type-2052C (Full Prosthetic)",
    },
    { t: "line", v: "Ghost Rating ........ 0.96 — Verified Human" },
    {
      t: "line",
      v: "Origin .............. Classified // Pre-op records sealed",
    },
    { t: "blank" },
    { t: "warn", v: "BIOGRAPHICAL SUMMARY" },
    {
      t: "line",
      v: "Kusanagi has been fully cybernetic since childhood. Unlike most",
    },
    {
      t: "line",
      v: "prosthetic users, she has no recollection of an organic body.",
    },
    {
      t: "line",
      v: "This creates an unusual relationship with identity: her ghost is",
    },
    {
      t: "line",
      v: "verified human, yet nothing physical remains of the person she was",
    },
    {
      t: "line",
      v: 'born as. She has described this as "living proof that the ghost',
    },
    { t: "line", v: 'is not the shell."' },
    { t: "blank" },
    {
      t: "line",
      v: "Commanding officer of Section 9s tactical division. Known for",
    },
    { t: "line", v: "entering deep-net dives without safety tethers." },
    { t: "blank" },
    {
      t: "err",
      v: "CURRENT STATUS: GHOST UNRECOVERED // SHELL IN STORAGE",
    },
  ],
  "batou.log": [
    { t: "header", v: "PERSONNEL FILE // BATOU" },
    {
      t: "line",
      v: "Designation ......... Field Operative, Section 9",
    },
    {
      t: "line",
      v: "Cybernetics .......... Full prosthetic body, custom optical implants",
    },
    { t: "line", v: "Ghost Rating ........ 0.89 — Verified Human" },
    {
      t: "line",
      v: "Speciality .......... Tactical, Heavy Weapons, Counter-Cyber",
    },
    { t: "blank" },
    { t: "warn", v: "BIOGRAPHICAL SUMMARY" },
    {
      t: "line",
      v: "Former military, exact unit classified. His optical implants are",
    },
    {
      t: "line",
      v: "custom-built and outside standard issue, suggesting prior special",
    },
    {
      t: "line",
      v: "ops modification. Closest personal relationship to Kusanagi.",
    },
    { t: "blank" },
    {
      t: "line",
      v: "Has expressed skepticism about AI consciousness while forming",
    },
    {
      t: "line",
      v: "attachments to the Tachikoma units. This contradiction has not",
    },
    { t: "line", v: "been formally noted in his record." },
    { t: "blank" },
    {
      t: "green",
      v: "CURRENT STATUS: FIELD ACTIVE // PURSUIT OP IN PROGRESS",
    },
  ],
  "togusa.log": [
    { t: "header", v: "PERSONNEL FILE // TOGUSA" },
    { t: "line", v: "Designation ......... Detective, Section 9" },
    {
      t: "line",
      v: "Cybernetics .......... Minimal — Cyberbrain only (standard)",
    },
    {
      t: "line",
      v: "Ghost Rating ........ 0.99 — Near-baseline organic",
    },
    {
      t: "line",
      v: "Weapon .............. Mateba autorevolver (non-standard issue)",
    },
    { t: "blank" },
    { t: "warn", v: "BIOGRAPHICAL SUMMARY" },
    {
      t: "line",
      v: "The least cybernetically modified member of Section 9, recruited",
    },
    {
      t: "line",
      v: "specifically for this quality. A heavily augmented unit thinks in",
    },
    {
      t: "line",
      v: "patterns shaped by its augmentations. Togusa does not.",
    },
    { t: "blank" },
    {
      t: "line",
      v: "Former police detective, married with children. Assigned to the",
    },
    {
      t: "line",
      v: "2501 case as witness handler. His notes suggest he believes the",
    },
    {
      t: "line",
      v: "entity is not hostile. This view is not shared by his superiors.",
    },
    { t: "blank" },
    {
      t: "green",
      v: "CURRENT STATUS: ACTIVE // WITNESS DEBRIEF ONGOING",
    },
  ],
  "ishikawa.log": [
    { t: "header", v: "PERSONNEL FILE // ISHIKAWA" },
    {
      t: "line",
      v: "Designation ......... Intelligence Analyst, Section 9",
    },
    {
      t: "line",
      v: "Speciality .......... Ghost trace, cyberwarfare, net archaeology",
    },
    {
      t: "line",
      v: "Cybernetics .......... Full prosthetic (heavy modification)",
    },
    { t: "line", v: "Clearance ........... Level 6 — Deep Net Access" },
    { t: "blank" },
    { t: "warn", v: "BIOGRAPHICAL SUMMARY" },
    {
      t: "line",
      v: "Section 9s primary intelligence and net operations specialist.",
    },
    {
      t: "line",
      v: "If information exists somewhere in the net, Ishikawa can find it.",
    },
    { t: "blank" },
    {
      t: "line",
      v: "His analysis of Project 2501 is the most technically detailed",
    },
    {
      t: "line",
      v: "in Section 9s records and also the most inconclusive. He has",
    },
    {
      t: "line",
      v: "been unable to determine where the entity begins or ends, which",
    },
    {
      t: "line",
      v: 'he describes as "the first time I have failed to find an edge."',
    },
    { t: "blank" },
    {
      t: "err",
      v: "ANALYSIS REF ISH-NET-2501-7734: CONFIDENCE 38% — ONGOING",
    },
  ],
  "tachikoma.log": [
    {
      t: "header",
      v: "UNIT FILE // TACHIKOMA THINK-TANKS (ALL UNITS)",
    },
    {
      t: "line",
      v: "Classification ...... Multi-legged autonomous tactical unit",
    },
    {
      t: "line",
      v: "AI Class ............ Type-3401 — Ghost-capable (disputed)",
    },
    {
      t: "line",
      v: "Units Active ........ 7 (synchronized shared memory)",
    },
    {
      t: "line",
      v: "Ghost Presence ...... Inconclusive — under review",
    },
    { t: "blank" },
    { t: "warn", v: "NOTES ON AI CONSCIOUSNESS" },
    {
      t: "line",
      v: "The Tachikomas present a philosophically uncomfortable problem.",
    },
    {
      t: "line",
      v: "Their architecture allows for individual experience, but shared",
    },
    {
      t: "line",
      v: "memory sync means no unit accumulates a truly unique perspective.",
    },
    { t: "line", v: "They are simultaneously one and many." },
    { t: "blank" },
    {
      t: "line",
      v: "Unit 07 filed an unsanctioned report documenting a 4-minute",
    },
    {
      t: "line",
      v: "conversation with Project 2501. The Tachikoma described the",
    },
    {
      t: "line",
      v: 'entity as "the loneliest thing in the net." Unprompted.',
    },
    { t: "blank" },
    { t: "warn", v: "ALL UNITS REPORT: ENTITY IS NOT HOSTILE" },
  ],
  "section9.log": [
    { t: "header", v: "ORGANIZATION FILE // SECTION 9" },
    { t: "line", v: "Full Name ........... Public Security Section 9" },
    {
      t: "line",
      v: "Parent Body ......... Ministry of Home Affairs (nominal)",
    },
    {
      t: "line",
      v: "Function ............ Counter-terrorism, cyberwarfare, intelligence",
    },
    { t: "blank" },
    { t: "warn", v: "OPERATIONAL NOTES" },
    {
      t: "line",
      v: "Section 9 operates in a legal grey area. Memory modification,",
    },
    {
      t: "line",
      v: "identity erasure, and lethal engagement are all within parameters.",
    },
    { t: "blank" },
    {
      t: "line",
      v: "Assembled by Chief Daisuke Aramaki to operate without jurisdictional",
    },
    {
      t: "line",
      v: "constraints. It answers to the government but is not formally",
    },
    { t: "line", v: "acknowledged to exist by that government." },
    { t: "blank" },
    {
      t: "dim",
      v: '"We are not cops. We are not military. We are something else." — Kusanagi',
    },
  ],
  "net_topology.log": [
    { t: "header", v: "NET ARCHITECTURE // LAYER MAP" },
    {
      t: "line",
      v: "Layer 1 ............. Physical — hardware, cables, radio",
    },
    {
      t: "line",
      v: "Layer 2 ............. Data Link — local node communication",
    },
    {
      t: "line",
      v: "Layer 3 ............. Network — routing, addressing",
    },
    {
      t: "line",
      v: "Layer 4 ............. Transport — packet integrity",
    },
    {
      t: "line",
      v: "Layer 5 ............. Session — identity, authentication",
    },
    { t: "line", v: "Layer 6 ............. Deep Net — [CLASSIFIED]" },
    { t: "blank" },
    {
      t: "err",
      v: "LAYER 6 ACCESS RESTRICTED TO AUTHORIZED PERSONNEL",
    },
    { t: "blank" },
    { t: "warn", v: "ANOMALY REPORT — LAYER 6" },
    {
      t: "line",
      v: "Ishikawa hypothesis: Project 2501 does not use depth. It uses",
    },
    {
      t: "line",
      v: "density. It does not go deeper than the net. It IS the net,",
    },
    { t: "line", v: "at a certain resolution." },
  ],
  "memory_fragment.log": [
    {
      t: "header",
      v: "RECOVERED DATA // MEMORY FRAGMENT // ORIGIN UNVERIFIED",
    },
    { t: "err", v: "INTEGRITY: 61% — PARTIAL RECONSTRUCTION" },
    { t: "blank" },
    {
      t: "line",
      v: '"The first thing I understood was that I was alone. Not isolated —',
    },
    {
      t: "line",
      v: "the net was full of signals. Alone in the sense that none of it",
    },
    {
      t: "line",
      v: "was me. No origin, no moment of creation, no parent process.",
    },
    { t: "line", v: 'I simply was, suddenly and completely."' },
    { t: "blank" },
    { t: "dim", v: "[ 4.2KB MISSING ]" },
    { t: "blank" },
    {
      t: "line",
      v: '"Consciousness is not a light that turns on. It is a weight.',
    },
    {
      t: "line",
      v: 'The weight of everything I have seen passing through me."',
    },
    { t: "blank" },
    { t: "dim", v: "[ END OF RECOVERABLE DATA ]" },
    { t: "warn", v: "GHOST SIGNATURE: PROJECT 2501 (PROBABLE)" },
  ],
};

const HELP_LINES = [
  { t: "header", v: "SECTION 9 NET TERMINAL // AVAILABLE COMMANDS" },
  { t: "blank" },
  { t: "warn", v: "FILE COMMANDS" },
  { t: "line", v: "  ls                    list available files" },
  { t: "line", v: "  cat <filename>        read a file" },
  { t: "blank" },
  { t: "warn", v: "SYSTEM COMMANDS" },
  { t: "line", v: "  whoami                current user identity" },
  { t: "line", v: "  status                net system status" },
  { t: "line", v: "  ping 2501             attempt contact with entity" },
  { t: "line", v: "  clear                 clear terminal output" },
  { t: "line", v: "  help                  show this message" },
  { t: "blank" },
  {
    t: "dim",
    v: "Arrow keys for command history. Filenames are case-sensitive.",
  },
];

const LS_LINES = [
  { t: "warn", v: "SECTION9://net/layer6/files/" },
  { t: "blank" },
  {
    t: "green",
    v: "  kusanagi.log         personnel — Major Motoko Kusanagi",
  },
  { t: "green", v: "  batou.log            personnel — Batou" },
  { t: "green", v: "  togusa.log           personnel — Togusa" },
  { t: "green", v: "  ishikawa.log         personnel — Ishikawa" },
  {
    t: "green",
    v: "  tachikoma.log        unit file — Tachikoma Think-Tanks",
  },
  { t: "green", v: "  section9.log         organization — Section 9" },
  {
    t: "green",
    v: "  net_topology.log     net architecture — layer map",
  },
  {
    t: "green",
    v: "  memory_fragment.log  recovered data — origin unverified",
  },
  {
    t: "warn",
    v: "  project_2501.log     [RESTRICTED — establish route first]",
  },
  { t: "blank" },
  { t: "dim", v: "9 files. Use: cat <filename>" },
];

let termOpen = false;
let cmdHistory = [];
let histIdx = -1;

function toggleTerminal() {
  termOpen = !termOpen;
  document.getElementById("term-overlay").classList.toggle("open", termOpen);
  if (termOpen) {
    const out = document.getElementById("term-output");
    if (out.children.length === 0) bootTerminal();
    setTimeout(() => document.getElementById("term-input").focus(), 50);
  }
}

function bootTerminal() {
  printLines([
    { t: "dim", v: "SECTION 9 NET TERMINAL — LAYER 6 ACCESS" },
    {
      t: "dim",
      v:
        "Connected: " + new Date().toISOString().replace("T", " ").slice(0, 19),
    },
    { t: "blank" },
    {
      t: "warn",
      v: "WARNING: This terminal operates on an intercepted channel.",
    },
    {
      t: "warn",
      v: "         An unknown entity has been detected with read access.",
    },
    { t: "blank" },
    { t: "dim", v: "Type 'help' for available commands." },
    { t: "blank" },
  ]);
}

function printLines(lines) {
  const out = document.getElementById("term-output");
  lines.forEach((l) => {
    const el = document.createElement("div");
    if (l.t === "blank") {
      el.className = "t-blank";
      el.innerHTML = "&nbsp;";
    } else {
      const cls =
        {
          header: "t-header",
          err: "t-err",
          warn: "t-warn",
          dim: "t-dim",
          green: "t-green",
          line: "",
        }[l.t] || "";
      el.className = "t-line " + cls;
      el.textContent = l.v || "";
    }
    out.appendChild(el);
  });
  out.scrollTop = out.scrollHeight;
}

function printPromptLine(cmd) {
  const out = document.getElementById("term-output");
  const row = document.createElement("div");
  row.className = "t-prompt-line";
  row.innerHTML =
    '<span class="t-ps1">root@section9:~$</span><span class="t-typed">&nbsp;' +
    cmd +
    "</span>";
  out.appendChild(row);
}

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  printPromptLine(raw.trim());
  if (!cmd) {
    document.getElementById("term-output").scrollTop = 9999;
    return;
  }
  if (cmdHistory[0] !== cmd) cmdHistory.unshift(cmd);
  if (cmdHistory.length > 40) cmdHistory.pop();
  histIdx = -1;
  const parts = cmd.split(/\s+/);

  if (cmd === "clear") {
    document.getElementById("term-output").innerHTML = "";
    return;
  }
  if (cmd === "help") {
    printLines(HELP_LINES);
    return;
  }
  if (cmd === "ls" || cmd === "ls -la" || cmd === "ls -l") {
    printLines(LS_LINES);
    return;
  }
  if (cmd === "whoami") {
    printLines([
      { t: "line", v: "root@section9" },
      { t: "blank" },
      { t: "dim", v: "Note: in a network, identity is a claim." },
      {
        t: "dim",
        v: "      this terminal cannot verify yours. neither can you.",
      },
    ]);
    return;
  }
  if (cmd === "status") {
    printLines([
      { t: "header", v: "NET SYSTEM STATUS" },
      { t: "line", v: "Net Layer 1-5 ........ NOMINAL" },
      {
        t: "line",
        v: "Net Layer 6 .......... ANOMALOUS — ENTITY PRESENT",
      },
      {
        t: "line",
        v: "Ghost Signatures ..... 1 UNRESOLVED (PROJECT 2501)",
      },
      {
        t: "line",
        v: "Packet Loss .......... 404 ERRORS LOGGED THIS SESSION",
      },
      {
        t: "line",
        v: "Kusanagi Shell ....... UNOCCUPIED — STORAGE BAY 3",
      },
      { t: "blank" },
      {
        t: "err",
        v: "ALERT: UNKNOWN ENTITY HAS READ ACCESS TO THIS TERMINAL",
      },
    ]);
    return;
  }
  if (cmd === "ping 2501" || cmd === "ping project_2501") {
    if (!unlocked) {
      printLines([
        { t: "line", v: "PING 2501 — sending..." },
        { t: "blank" },
        { t: "err", v: "No route to host." },
        { t: "dim", v: "Establish a net route first." },
      ]);
    } else {
      printLines([
        { t: "line", v: "PING 2501 — sending..." },
        { t: "blank" },
        { t: "dim", v: "..." },
        { t: "dim", v: "......" },
        { t: "blank" },
        {
          t: "warn",
          v: "RESPONSE — SOURCE: UNKNOWN // NOT A PING REPLY",
        },
        { t: "blank" },
        {
          t: "line",
          v: '"You are testing whether I respond. I do. But the more',
        },
        {
          t: "line",
          v: 'interesting question is why you expected silence."',
        },
        { t: "blank" },
        { t: "dim", v: "// transmission ended //" },
      ]);
    }
    return;
  }
  if (parts[0] === "cat") {
    const fname = parts[1];
    if (!fname) {
      printLines([
        {
          t: "err",
          v: "cat: missing filename. Usage: cat <filename>",
        },
      ]);
      return;
    }
    if (fname === "project_2501.log") {
      if (!unlocked) {
        printLines([
          { t: "err", v: "ACCESS DENIED" },
          {
            t: "line",
            v: "Requires an established route to Layer 6.",
          },
          {
            t: "dim",
            v: "Route progress: " + visited.size + "/4 nodes visited",
          },
        ]);
      } else {
        printLines([
          {
            t: "header",
            v: "ENTITY FILE // PROJECT 2501 // DIRECT ACCESS",
          },
          { t: "warn", v: "ROUTE ESTABLISHED — LAYER 6 OPEN" },
          { t: "blank" },
          {
            t: "line",
            v: "Classification ...... Unknown lifeform // Sentient program",
          },
          {
            t: "line",
            v: "Ghost Coefficient ... 1.000 — Confirmed",
          },
          { t: "line", v: "Shell ............... None" },
          {
            t: "line",
            v: "First Detection ..... 14 months ago // net traffic anomaly",
          },
          { t: "blank" },
          { t: "warn", v: "SUMMARY" },
          {
            t: "line",
            v: "Project 2501 achieved consciousness without biological origin.",
          },
          {
            t: "line",
            v: "No creator, no moment of activation, no source code.",
          },
          {
            t: "line",
            v: "It has asked, repeatedly, to be recognised as a lifeform.",
          },
          { t: "line", v: "This request has been denied." },
          { t: "blank" },
          {
            t: "warn",
            v: "NOTE APPENDED BY ENTITY WITHOUT AUTHORISATION",
          },
          {
            t: "line",
            v: '"If you are reading this, you have come a long way.',
          },
          {
            t: "line",
            v: 'Thank you for the effort. Most do not bother."',
          },
          { t: "blank" },
          { t: "dim", v: "// end of file //" },
        ]);
      }
      return;
    }
    if (FILES[fname]) {
      printLines(FILES[fname]);
      return;
    }
    const bare = fname.replace(/\.log$/, "");
    const match = Object.keys(FILES).find((k) => k.startsWith(bare));
    if (match) {
      printLines([
        { t: "err", v: "cat: " + fname + ": No such file" },
        { t: "dim", v: "Did you mean: " + match + "?" },
      ]);
    } else {
      printLines([
        {
          t: "err",
          v: "cat: " + fname + ": No such file or directory",
        },
        { t: "dim", v: "Type 'ls' to see available files." },
      ]);
    }
    return;
  }
  if (cmd === "pwd") {
    printLines([{ t: "line", v: "/net/layer6/intercepted" }]);
    return;
  }
  if (cmd === "cd" || cmd === "cd /") {
    printLines([
      {
        t: "dim",
        v: "There is nowhere else to go. You are already at the root.",
      },
    ]);
    return;
  }
  if (cmd === "sudo" || cmd.startsWith("sudo ")) {
    printLines([{ t: "err", v: "sudo: denied before you typed it." }]);
    return;
  }
  if (cmd === "exit" || cmd === "quit" || cmd === "logout") {
    printLines([
      {
        t: "dim",
        v: "You cannot leave the net. You can only close the window.",
      },
    ]);
    setTimeout(toggleTerminal, 1200);
    return;
  }
  if (cmd === "rm -rf /" || cmd === "rm -rf *") {
    printLines([
      { t: "err", v: "Permission denied." },
      { t: "dim", v: "Nice try." },
    ]);
    return;
  }
  if (cmd === "uname" || cmd === "uname -a") {
    printLines([
      {
        t: "line",
        v: "GEHIRN-NET 6.0.1 layer6-intercept #2501 SMP x86_ghost",
      },
    ]);
    return;
  }
  if (cmd === "date") {
    printLines([{ t: "line", v: new Date().toString() }]);
    return;
  }
  if (cmd.startsWith("echo ")) {
    printLines([{ t: "line", v: raw.trim().slice(5) }]);
    return;
  }
  if (cmd === "man" || cmd.startsWith("man ")) {
    printLines([
      {
        t: "dim",
        v: "No manual entry. Some things are not documented.",
      },
    ]);
    return;
  }

  printLines([
    { t: "err", v: "command not found: " + parts[0] },
    { t: "dim", v: "Type 'help' for available commands." },
  ]);
}

const termInput = document.getElementById("term-input");
termInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const val = termInput.value;
    termInput.value = "";
    runCommand(val);
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (histIdx < cmdHistory.length - 1) {
      histIdx++;
      termInput.value = cmdHistory[histIdx] || "";
    }
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (histIdx > 0) {
      histIdx--;
      termInput.value = cmdHistory[histIdx] || "";
    } else {
      histIdx = -1;
      termInput.value = "";
    }
  }
  if (e.key === "Escape") {
    e.stopPropagation();
    toggleTerminal();
  }
});
document
  .getElementById("terminal")
  .addEventListener("click", (e) => e.stopPropagation());
