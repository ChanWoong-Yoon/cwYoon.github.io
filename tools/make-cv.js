/* data/*.js 를 단일 출처로 삼아 인쇄용 CV HTML 을 생성한다. */
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
const OUT = process.argv[3];
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");

const PROFILE = eval(read("data/profile.js") + "; PROFILE");
const CV = eval(read("data/cv.js") + "; CV");
const PUBLICATIONS = eval(read("data/publications.js") + "; PUBLICATIONS");

const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const aliases = (PROFILE.aliases || []).map(a => a.replace(/[\s.,-]/g, "").toLowerCase());
const authors = list => list.map(a =>
  aliases.indexOf(a.replace(/[\s.,-]/g, "").toLowerCase()) !== -1
    ? `<strong>${esc(a)}</strong>` : esc(a)).join(", ");

const entry = (period, body) =>
  `<div class="row"><div class="when">${esc(period)}</div><div class="what">${body}</div></div>`;

const eduExp = e => entry(e.period, [
  `<div class="t">${esc(e.title)}</div>`,
  e.org ? `<div class="o">${esc(e.org)}</div>` : "",
  e.detail ? `<div class="d">${esc(e.detail)}</div>` : "",
  e.bullets && e.bullets.length
    ? `<ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""
].join(""));

const pub = p => entry(p.year, [
  `<div class="t">${esc(p.title)}</div>`,
  `<div class="a">${authors(p.authors || [])}</div>`,
  `<div class="o"><em>${esc(p.venue)}</em>${p.note ? " " + esc(p.note) : ""}</div>`,
  p.links && p.links.doi
    ? `<div class="d">${esc(p.links.doi.replace(/^https?:\/\/doi\.org\//, "doi:"))}</div>` : ""
].join(""));

const pres = p => entry(p.period, [
  `<div class="t">${esc(p.title)}</div>`,
  `<div class="o">${esc(p.org)}</div>`,
  p.detail ? `<div class="d">${esc(p.detail)}</div>` : ""
].join(""));

const contact = [
  PROFILE.email ? esc(PROFILE.email) : "",
  ...(PROFILE.links || []).filter(l => l.url)
    .map(l => `${esc(l.label)}: ${esc(l.url.replace(/^https?:\/\/(www\.)?/, ""))}`)
].filter(Boolean).join(" &nbsp;·&nbsp; ");

const section = (title, inner) =>
  `<section><h2>${esc(title)}</h2>${inner}</section>`;

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>${esc(PROFILE.name)} — Curriculum Vitae</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 17mm 16mm 15mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0; color: #171B1D; background: #fff;
    font-family: "IBM Plex Sans", ui-sans-serif, system-ui, "Segoe UI", sans-serif;
    font-size: 9.4pt; line-height: 1.42;
    -webkit-font-smoothing: antialiased;
  }
  header { border-bottom: 1px solid #171B1D; padding-bottom: 6pt; margin-bottom: 11pt; }
  h1 { font-size: 20pt; font-weight: 500; letter-spacing: -.02em; margin: 0 0 3pt; }
  .role { font-size: 10pt; color: #171B1D; margin: 0 0 1pt; }
  .place, .contact { font-size: 8.6pt; color: #565F63; margin: 0; }
  .contact { margin-top: 4pt; word-break: break-word; }

  section { margin-bottom: 10pt; }
  h2 {
    font-size: 8.4pt; font-weight: 600; text-transform: uppercase;
    letter-spacing: .09em; color: #1D5B54;
    margin: 0 0 6pt; padding-bottom: 3pt; border-bottom: .5pt solid #D8DAD2;
  }
  .row { display: flex; gap: 10pt; padding: 4pt 0; break-inside: avoid; }
  .row + .row { border-top: .5pt solid #EDEEE8; }
  .when { flex: 0 0 62pt; font-size: 8.4pt; color: #8C9497; padding-top: .8pt; font-variant-numeric: tabular-nums; }
  .what { flex: 1 1 auto; min-width: 0; }
  .t { font-weight: 600; }
  .o { color: #565F63; }
  .a { color: #565F63; }
  .a strong { color: #171B1D; font-weight: 600; }
  .d { font-size: 8.6pt; color: #8C9497; }
  ul { margin: 3pt 0 0; padding-left: 12pt; }
  li { margin-bottom: 1.5pt; }

  .interests { color: #565F63; }
  .skills { display: flex; gap: 10pt; padding: 3pt 0; break-inside: avoid; }
  .skills + .skills { border-top: .5pt solid #EDEEE8; }
  .skills .g { flex: 0 0 62pt; font-size: 8.4pt; font-weight: 600; }
  .skills .v { flex: 1 1 auto; color: #565F63; }
  footer { margin-top: 10pt; padding-top: 4pt; border-top: .5pt solid #D8DAD2;
           font-size: 7.8pt; color: #8C9497; }
</style></head><body>

<header>
  <h1>${esc(PROFILE.name)}</h1>
  <p class="role">${esc(PROFILE.role)}, ${esc(PROFILE.affiliation)}, ${esc(PROFILE.institution)}</p>
  <p class="place">${esc(PROFILE.location)}</p>
  <p class="contact">${contact}</p>
</header>

${section("Research interests",
  `<p class="interests">${PROFILE.interests.map(esc).join(" &nbsp;·&nbsp; ")}</p>`)}

${section("Education", CV.education.map(eduExp).join(""))}
${section("Research experience", CV.experience.map(eduExp).join(""))}
${section("Publications", PUBLICATIONS.map(pub).join(""))}
${section("Conference presentations", (CV.presentations || []).map(pres).join(""))}
${section("Skills and techniques", CV.skills.map(s =>
  `<div class="skills"><div class="g">${esc(s.group)}</div><div class="v">${s.items.map(esc).join(", ")}</div></div>`).join(""))}

<footer>Generated from chanwoong-yoon.github.io/cwYoon.github.io · ${new Date().toLocaleDateString("sv-SE")}</footer>
</body></html>`;

fs.writeFileSync(OUT, html);
console.log("HTML 생성:", OUT);
console.log("논문", PUBLICATIONS.length, "· 발표", (CV.presentations || []).length,
            "· 학력", CV.education.length, "· 경력", CV.experience.length);
