<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b192c,60:141b23,100:c99a3f&height=190&section=header&text=Brian%20Mbuya&fontSize=62&fontColor=ffffff&fontAlignY=34&desc=Full-Stack%20Software%20Engineer%20%C2%B7%20AI%20Systems%20Architect&descSize=17&descAlignY=56&animation=fadeIn" width="100%" alt="Brian Mbuya" />

<a href="https://github.com/Brian-Mbuya">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=21&duration=2800&pause=700&color=C99A3F&center=true&vCenter=true&width=780&height=42&lines=Offline-first+systems+that+refuse+to+lose+state.;Security+enforced+in+the+database%2C+not+the+UI.;248+tests+before+the+first+deploy.;I+architect+for+the+dead+zone." alt="Typing" />
</a>

<br />

<a href="https://www.linkedin.com/in/brian-mbuya-23225541b"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=141b23" alt="LinkedIn" /></a>
<a href="https://real-estate-web-site-one.vercel.app"><img src="https://img.shields.io/badge/Live_PWA-Kisumu_Realty-c99a3f?style=for-the-badge&logo=vercel&logoColor=white&labelColor=141b23" alt="Live App" /></a>
<a href="mailto:mbuyabrian290@gmail.com"><img src="https://img.shields.io/badge/Email-Reach_Out-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=141b23" alt="Email" /></a>
<a href="https://github.com/Brian-Mbuya?tab=repositories"><img src="https://img.shields.io/github/last-commit/Brian-Mbuya/real-estate-web-site?style=for-the-badge&label=Last%20Commit&color=c99a3f&labelColor=141b23&logo=github&logoColor=white" alt="Last Commit" /></a>

<br /><br />

<kbd> <a href="#-the-thesis">THESIS</a> </kbd> &nbsp;
<kbd> <a href="#-technical-arsenal">ARSENAL</a> </kbd> &nbsp;
<kbd> <a href="#-systems-i-design">SYSTEMS</a> </kbd> &nbsp;
<kbd> <a href="#-flagship-engineering">PROJECTS</a> </kbd> &nbsp;
<kbd> <a href="#-telemetry">TELEMETRY</a> </kbd>

</div>

---

## ⚡ The Thesis

> [!IMPORTANT]
> **Most apps assume the network.** I build the ones that don't.
>
> My work lives at the intersection of **offline-first resilience**, **database-enforced security**, and **applied machine learning** — systems engineered for environments where connectivity is a suggestion, trust is never assumed, and correctness is proven by tests rather than promised in a README.

```typescript
const brian: Engineer = {
  title:      "Full-Stack Software Engineer & AI Systems Architect",
  location:   "Kisumu, Kenya  🇰🇪",

  specializes_in: [
    "Offline-First PWA Engines",     // deterministic state recovery in dead zones
    "Zero-Trust Data Layers",        // RLS policies + triggers, not client-side guards
    "Applied ML for Fraud",          // unsupervised anomaly detection at scale
    "Multi-Tenant Backends",         // Spring Boot · FastAPI · Supabase · PHP
  ],

  philosophy: {
    resilience: "Degrade gracefully. Never lose the user's work.",
    security:   "If the database doesn't enforce it, it isn't enforced.",
    proof:      "Untested code is a hypothesis, not a feature.",
  },

  currently: {
    building:  "Reality Kisumu Hub — a zero-build PWA property marketplace",
    learning:  "Distributed consensus & vector search at the edge",
    open_to:   "Backend architecture · AI systems · Platform engineering",
  },
} as const;
```

---

## 🧰 Technical Arsenal

<div align="center">

#### Languages & Runtimes
<img src="https://skillicons.dev/icons?i=ts,js,python,java,php,cs,bash,powershell&theme=dark&perline=8" alt="Languages" />

#### Frontend & Progressive Web
<img src="https://skillicons.dev/icons?i=react,vite,tailwind,html,css,bootstrap,vercel,figma&theme=dark&perline=8" alt="Frontend" />

#### Backend, Data & Infrastructure
<img src="https://skillicons.dev/icons?i=nodejs,spring,fastapi,postgres,supabase,mysql,docker,git&theme=dark&perline=8" alt="Backend" />

</div>

<details>
<summary><b>📊 Depth calibration — where the hours actually went</b></summary>

<br />

```text
DOMAIN                            PROFICIENCY                 CONTEXT
──────────────────────────────────────────────────────────────────────────────
TypeScript / JavaScript      ███████████████████░  95%   Primary daily driver
Offline-First PWA Design     ██████████████████░░  92%   SW caching · sync queues
PostgreSQL / RLS Policies    █████████████████░░░  88%   Triggers · multi-tenant
React 19 + Vite              █████████████████░░░  87%   Concurrent · Suspense
Python / scikit-learn        ████████████████░░░░  82%   Isolation Forest · feature eng.
Java / Spring Boot           ███████████████░░░░░  78%   JWT · RBAC · REST
Testing (Vitest / JUnit)     █████████████████░░░  86%   248 tests, one repo
PHP / MySQL                  ██████████████░░░░░░  72%   Legacy integration work
──────────────────────────────────────────────────────────────────────────────
```

</details>

---

## 🏗️ Systems I Design

### The Offline-First Architecture

Every app I ship assumes the network **will** fail. This is the pattern:

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#141b23','primaryTextColor':'#e6edf3','primaryBorderColor':'#c99a3f','lineColor':'#c99a3f','secondaryColor':'#0b192c','tertiaryColor':'#1b2531','clusterBkg':'#0b192c','clusterBorder':'#2d3a4a','fontFamily':'ui-monospace, SFMono-Regular, monospace','fontSize':'14px'}}}%%
flowchart LR
    subgraph CLIENT["🖥️  CLIENT SHELL"]
        UI["React 19 / Vanilla Kernel"]
        Q[("Durable<br/>Write Queue")]
        UI -->|"optimistic write"| Q
    end

    subgraph SW["⚙️  SERVICE WORKER"]
        S1["shell<br/><i>cache-first</i>"]
        S2["runtime<br/><i>stale-while-revalidate</i>"]
        S3["data<br/><i>network-first</i>"]
    end

    subgraph EDGE["☁️  DATA PLANE"]
        API["REST / RPC Gateway"]
        RLS{{"Row-Level Security<br/>+ Audit Triggers"}}
        DB[("PostgreSQL")]
    end

    UI --> SW
    S1 & S2 --> UI
    Q -.->|"drain in sequence<br/>on reconnect"| S3
    S3 --> API --> RLS --> DB
    DB -.->|"realtime deltas"| UI

    style Q fill:#c99a3f,stroke:#c99a3f,color:#0b192c
    style RLS fill:#0b192c,stroke:#c99a3f,color:#c99a3f
    style DB fill:#141b23,stroke:#3ECF8E,color:#3ECF8E
```

> [!NOTE]
> **The critical detail is the queue.** Writes are appended to a durable local sequence and drained **in order** on reconnect — not fired in parallel, not best-effort. Ordering is what makes recovery deterministic instead of merely likely.

<details>
<summary><b>🔁 How a write survives a dead zone — full recovery sequence</b></summary>

<br />

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#141b23','primaryTextColor':'#e6edf3','primaryBorderColor':'#c99a3f','lineColor':'#c99a3f','secondaryColor':'#0b192c','actorBkg':'#0b192c','actorBorder':'#c99a3f','actorTextColor':'#e6edf3','signalColor':'#c99a3f','signalTextColor':'#e6edf3','labelBoxBkgColor':'#141b23','labelBoxBorderColor':'#c99a3f','noteBkgColor':'#c99a3f','noteTextColor':'#0b192c','fontFamily':'ui-monospace, monospace'}}}%%
sequenceDiagram
    autonumber
    actor U as Field User
    participant A as App Shell
    participant Q as Local Queue
    participant S as Service Worker
    participant D as PostgreSQL

    U->>A: Submits inspection record
    A->>Q: append(op, seq: n)
    A-->>U: ✅ Optimistic UI — instant
    Note over Q,S: 📵 Network unavailable

    A->>S: attempt sync
    S--xD: fetch fails
    S-->>Q: retain, backoff

    Note over U,D: ⏱ Minutes or hours pass — user keeps working

    S->>S: 📶 'online' event fires
    loop drain strictly by seq
        Q->>D: replay op(n)
        D->>D: RLS check + audit trigger
        D-->>Q: ack(n) · ON CONFLICT DO NOTHING
        Q->>Q: evict(n)
    end
    D-->>A: realtime reconciliation
    A-->>U: 🔄 State converged. Zero loss.
```

**Why idempotency matters here:** an ack lost in transit means the client replays an op the server already committed. `ON CONFLICT DO NOTHING` on a natural key turns that from data corruption into a no-op.

</details>

<details>
<summary><b>🛡️ The security posture — why RLS beats middleware</b></summary>

<br />

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#141b23','primaryTextColor':'#e6edf3','primaryBorderColor':'#c99a3f','lineColor':'#c99a3f','fontFamily':'ui-monospace, monospace'}}}%%
flowchart TB
    A["🌐 Any Client<br/><i>web · mobile · rogue script · curl</i>"]
    B["🔑 JWT / Session Claims"]
    C{"🛡️ Row-Level Security<br/>enforced inside Postgres"}
    D["✅ Only rows this identity owns"]
    E["⛔ Rejected at the engine —<br/>no bypass path exists"]

    A --> B --> C
    C -->|"policy passes"| D
    C -->|"policy fails"| E

    style C fill:#0b192c,stroke:#c99a3f,color:#c99a3f,stroke-width:2px
    style D fill:#141b23,stroke:#3ECF8E,color:#3ECF8E
    style E fill:#141b23,stroke:#f85149,color:#f85149
```

Middleware guards protect **one** entry point. An RLS policy protects **every** entry point — including the ones you'll add next year and the ones an attacker finds first. Security that lives in the API layer is a convention; security that lives in the engine is an invariant.

</details>

---

## 🌟 Flagship Engineering

<table>
<tr>
<td width="50%" valign="top">

<h3 align="center">🏨 Inspection &amp; Asset Tracker</h3>
<p align="center">
  <img src="https://img.shields.io/badge/React_19-Vite_PWA-61DAFB?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/Supabase-RLS_·_Realtime-3ECF8E?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/248-tests-c99a3f?style=flat-square&labelColor=141b23" />
</p>

<p><b>Enterprise offline-first hotel asset management.</b> Built for staff working inside concrete stairwells with no signal.</p>

<ul>
  <li><b>Durable Sync Queue</b> — sequence-ordered local drain; survives kills, reloads, and hours offline.</li>
  <li><b>Database-Enforced Security</b> — RLS policies plus audit triggers; no privileged client path.</li>
  <li><b>PDF Intelligence</b> — parses Opera PMS exports and diffs them against live state.</li>
  <li><b>248 Unit Tests</b> — data-integrity paths covered before shipping, not after.</li>
</ul>

<p align="center"><a href="https://github.com/Brian-Mbuya/inspection-tracker"><b>⟶ Explore Repository</b></a></p>

</td>
<td width="50%" valign="top">

<h3 align="center">🏠 Reality Kisumu Hub</h3>
<p align="center">
  <img src="https://img.shields.io/badge/Zero_Build-Vanilla_PWA-0b192c?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/Leaflet-Maps-199900?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/Supabase-Postgres-3ECF8E?style=flat-square&labelColor=141b23" />
</p>

<p><b>A property marketplace with no bundler, no framework, no build step.</b> ~3.1k lines of hand-tuned vanilla JS.</p>

<ul>
  <li><b>3-Tier Cache Strategy</b> — shell (cache-first), runtime (SWR), data (network-first + offline fallback).</li>
  <li><b>Shared UI Kernel</b> — one <code>propertyCardHTML()</code> renders every surface; single source of truth.</li>
  <li><b>Dual-Currency Engine</b> — KSh/USD toggle with a mortgage &amp; down-payment estimator.</li>
  <li><b>Event Delegation Only</b> — zero inline handlers; stretched-overlay anchors for real navigation semantics.</li>
</ul>

<p align="center"><a href="https://github.com/Brian-Mbuya/real-estate-web-site"><b>⟶ Repository</b></a> &nbsp;·&nbsp; <a href="https://real-estate-web-site-one.vercel.app"><b>Live PWA ↗</b></a></p>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<h3 align="center">🛡️ M-Pesa Fraud Engine</h3>
<p align="center">
  <img src="https://img.shields.io/badge/Python-Isolation_Forest-3776AB?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/Unsupervised-Anomaly_Detection-f85149?style=flat-square&labelColor=141b23" />
</p>

<p><b>Zero-day fraud screening for mobile money</b> — catches patterns no labelled dataset has seen yet.</p>

<ul>
  <li><b>Isolation Forest</b> — unsupervised detection; no fraud labels required to bootstrap.</li>
  <li><b>Calibrated Risk Scoring</b> — engineered velocity, recency &amp; counterparty-entropy features.</li>
  <li><b>Synthetic Corpus</b> — reproducible simulated transaction streams for evaluation.</li>
</ul>

<p align="center"><a href="https://github.com/Brian-Mbuya/mpesa-fraud-detection"><b>⟶ Explore Repository</b></a></p>

</td>
<td width="50%" valign="top">

<h3 align="center">🎓 UniSubmit Academic Portal</h3>
<p align="center">
  <img src="https://img.shields.io/badge/Spring_Boot-PostgreSQL-6DB33F?style=flat-square&labelColor=141b23" />
  <img src="https://img.shields.io/badge/JWT-RBAC-c99a3f?style=flat-square&labelColor=141b23" />
</p>

<p><b>Multi-role submission &amp; review platform</b> with an immutable audit trail.</p>

<ul>
  <li><b>Layered REST Architecture</b> — Spring Boot service/repository separation over PostgreSQL.</li>
  <li><b>Three-Tier RBAC</b> — Student · Lecturer · Admin, enforced at method boundaries.</li>
  <li><b>Immutable Versioning</b> — submissions append, never overwrite. History is evidence.</li>
</ul>

<p align="center"><a href="https://github.com/Brian-Mbuya/unisubmit"><b>⟶ Explore Repository</b></a></p>

</td>
</tr>
</table>

<details>
<summary><b>🔍 More work — production deployments, libraries &amp; automation</b></summary>

<br />

| Project | Stack | What it does |
|:--|:--|:--|
| 🏢 **[Best Western Plus Meridian](https://best-western-plus-meridian-hotel.vercel.app)** | `Vercel` `PWA` | Live production guest-engagement portal serving real hotel traffic. |
| 🎨 **[Adaptive Theme Engine](https://github.com/Brian-Mbuya/adaptive-theme-engine)** | `TypeScript` | Modular runtime theming library — system-preference aware, zero flash-of-unstyled-content. |
| 🤖 **[Local AI Setup](https://github.com/Brian-Mbuya/local-ai-setup)** | `PowerShell` `Ollama` | Automation for orchestrating local LLM environments end-to-end. |

</details>

---

## 📐 Engineering Principles

<table>
<tr>
<td align="center" width="33%">
<h1>🌐</h1>
<h4>Resilience First</h4>
<p><i>Applications must degrade gracefully under dead-zone conditions without losing state. Offline is a first-class mode, not an error screen.</i></p>
</td>
<td align="center" width="33%">
<h1>🔐</h1>
<h4>Security in the Engine</h4>
<p><i>Enforcement belongs in RLS policies and database triggers. A guard in the UI is a suggestion; a guard in Postgres is a law.</i></p>
</td>
<td align="center" width="33%">
<h1>🧪</h1>
<h4>Proof over Promise</h4>
<p><i>Software is complete when core execution paths are verified by automated tests — not when it happens to work on my machine.</i></p>
</td>
</tr>
</table>

> [!TIP]
> **The principle behind the principles:** every one of these trades a little upfront effort for a *removed class of failure*. Ordered queues remove lost writes. RLS removes the forgotten-auth-check bug. Tests remove the silent regression. That's the only kind of complexity worth adding.

---

## 📊 Telemetry

<div align="center">

<img src="https://img.shields.io/badge/Focus-Offline_First_Systems-3ECF8E?style=for-the-badge&labelColor=141b23" alt="Focus" />
<img src="https://img.shields.io/badge/Test_Suite-248_passing-c99a3f?style=for-the-badge&labelColor=141b23&logo=vitest&logoColor=white" alt="Tests" />
<img src="https://img.shields.io/badge/Architecture-PWA_·_RLS_·_ML-61DAFB?style=for-the-badge&labelColor=141b23" alt="Architecture" />

<br /><br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Brian-Mbuya&theme=gotham" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Brian-Mbuya&theme=github" width="90%" alt="Profile Summary" />
</picture>

<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Brian-Mbuya&theme=gotham" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Brian-Mbuya&theme=github" height="200" alt="Repos per Language" />
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Brian-Mbuya&theme=gotham" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Brian-Mbuya&theme=github" height="200" alt="Most Committed Language" />
</picture>

<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Brian-Mbuya&theme=gotham&utcOffset=3" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Brian-Mbuya&theme=github&utcOffset=3" height="200" alt="Productive Time" />
</picture>

<br /><br />

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Brian-Mbuya&bg_color=141b23&color=e6edf3&line=c99a3f&point=ffffff&area=true&area_color=c99a3f&hide_border=true&custom_title=Contribution%20Velocity" width="98%" alt="Activity Graph" />

</div>

<details>
<summary><b>🔧 Self-host the stats & streak cards — kills the 503s permanently</b></summary>

<br />

The widely-used `github-readme-stats.vercel.app` public instance is **chronically over quota** (it returns `503` right now), because every profile on GitHub shares one Vercel deployment and one GitHub API rate limit. `github-profile-trophy` is worse — it returns `402 Payment Required`.

Running your own instance takes about five minutes and gives you your own quota and your own rate limit:

```bash
gh repo fork anuraghazra/github-readme-stats --clone --remote
```

1. Create a **classic GitHub PAT** with only the `public_repo` scope.
2. Import the fork at [vercel.com/new](https://vercel.com/new), and add an env var `PAT_1` set to that token.
3. Deploy. You'll get a URL like `https://brian-stats.vercel.app`.

Then swap it into the Telemetry section — this never 503s, because it's your deployment:

```html
<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://brian-stats.vercel.app/api?username=Brian-Mbuya&show_icons=true&hide_border=true&bg_color=141b23&title_color=c99a3f&icon_color=c99a3f&text_color=e6edf3&include_all_commits=true&rank_icon=github" />
  <img src="https://brian-stats.vercel.app/api?username=Brian-Mbuya&show_icons=true&hide_border=true&title_color=b8860b&icon_color=b8860b&include_all_commits=true&rank_icon=github"
       height="170" alt="GitHub Stats" />
</picture>
```

The **streak card** was removed from this README for the same reason. `streak-stats.demolab.com` returns valid SVG, but its cold-start latency was measured at **20s / 7.5s / 1.1s / 26.8s** across four samples — a coin flip, not a widget. Self-host it the same way from [`DenverCoder1/github-readme-streak-stats`](https://github.com/DenverCoder1/github-readme-streak-stats) and it becomes reliable.

> **Why images break on GitHub specifically:** GitHub proxies every external image through `camo.githubusercontent.com` to protect your IP. Camo enforces a short fetch timeout and then **caches the failure** — so one slow response can leave a card broken long after the upstream recovers. Fast, self-hosted endpoints avoid the problem entirely.

</details>

<details>
<summary><b>🐍 Enable the contribution-snake animation</b></summary>

<br />

GitHub can't animate the contribution grid on its own — but an Action can generate the frames and commit them back. Drop this at `.github/workflows/snake.yml` in your `Brian-Mbuya/Brian-Mbuya` profile repo:

```yaml
name: Generate Snake

on:
  schedule:
    - cron: "0 */12 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: Platane/snk@v3
        id: snake-gif
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/snake.svg
            dist/snake-dark.svg?palette=github-dark

      - uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Then add this block back into the Telemetry section — it uses `<picture>` so the snake matches the viewer's theme:

```html
<picture>
  <source media="(prefers-color-scheme: dark)"
          srcset="https://raw.githubusercontent.com/Brian-Mbuya/Brian-Mbuya/output/snake-dark.svg" />
  <img src="https://raw.githubusercontent.com/Brian-Mbuya/Brian-Mbuya/output/snake.svg"
       width="98%" alt="Contribution snake" />
</picture>
```

</details>

---

## 🗺️ Trajectory

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#0b192c','primaryTextColor':'#e6edf3','primaryBorderColor':'#c99a3f','lineColor':'#c99a3f','fontFamily':'ui-monospace, monospace','cScale0':'#c99a3f','cScale1':'#3ECF8E','cScale2':'#61DAFB','cScaleLabel0':'#0b192c','cScaleLabel1':'#0b192c','cScaleLabel2':'#0b192c'}}}%%
timeline
    title From first commit to systems architecture
    Foundations   : PHP & MySQL CRUD
                  : Vanilla JS & DOM fundamentals
    Full-Stack    : Spring Boot REST + PostgreSQL
                  : JWT auth & role-based access control
                  : React 19 with Vite
    Resilience    : Service workers & offline-first design
                  : Durable sync queues · deterministic recovery
                  : Row-Level Security & audit triggers
    Applied AI    : Isolation Forest fraud screening
                  : Feature engineering & risk calibration
    Next          : Distributed consensus
                  : Vector search at the edge
```

---

## 📬 Let's Build Something

<div align="center">

**Open to backend architecture, AI systems, and platform engineering roles.**
<br />
If you're building something that has to work when the network doesn't — let's talk.

<br />

<a href="https://www.linkedin.com/in/brian-mbuya-23225541b"><img src="https://img.shields.io/badge/LinkedIn-Let's_Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=141b23" /></a>
<a href="mailto:mbuyabrian290@gmail.com"><img src="https://img.shields.io/badge/Email-Say_Hello-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=141b23" /></a>
<a href="https://github.com/Brian-Mbuya?tab=repositories"><img src="https://img.shields.io/badge/GitHub-Browse_Work-141b23?style=for-the-badge&logo=github&logoColor=c99a3f&labelColor=141b23" /></a>

<br /><br />

<i>"Resilience isn't a feature you add. It's an assumption you design around."</i>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:c99a3f,40:141b23,100:0b192c&height=140&section=footer" width="100%" alt="footer" />

</div>
