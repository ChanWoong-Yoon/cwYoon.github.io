/* ------------------------------------------------------------------
   profile.js — 사이트 전역 정보
   여기만 고치면 모든 페이지의 헤더/푸터/홈 소개가 함께 바뀝니다.
------------------------------------------------------------------ */

const PROFILE = {
  name: "Chanwoong Yoon",

  // 저자 목록에서 굵게 표시할 이름들. 논문마다 표기가 달라도 여기에 추가하면 인식합니다.
  aliases: ["Chanwoong Yoon", "C. Yoon", "Yoon, C.", "C.-W. Yoon"],

  role: "Postdoctoral Researcher",
  affiliation: "Medical Research Center",
  institution: "Seoul National University",
  location: "Seoul, Republic of Korea",

  photo: "assets/img/profile.jpg",   // 여기에 사진 파일을 넣으세요. 없으면 이니셜이 표시됩니다.
  initials: "CY",

  // 홈 첫 화면의 한 문장. 짧고 구체적일수록 좋습니다.
  statement: "I turn neurons on and off without touching their genes.",

  intro: [
    "Optogenetics made cell-type-specific control of neurons routine in the laboratory, but it works by delivering and expressing a foreign gene. That requirement keeps it largely out of the clinic, and it binds each construct to a single direction of control: a channel that excites cannot also inhibit.",
    "I replace the genetic actuator with a physical one. Gold nanorods delivered into tissue absorb near-infrared light and convert it to heat at the membrane of nearby neurons — and the same particles either silence a cell or drive it to fire, depending only on how the light is pulsed. Making this work in an intact brain is a device problem as much as a chemistry one, so I build the probes too: a single flexible fiber, drawn from a polymer preform, carrying a microfluidic channel, an optical waveguide, and recording electrodes together, so that the nanoparticles, the light, and the electrode all sit within a few hundred microns of one another.",
    "I am now applying this to memory engrams. Engram ensembles are the physical substrate of a memory — reactivating one is enough to produce recall, suppressing it enough to block retrieval — but every established method for addressing them depends on genetic tagging through immediate-early gene promoters. What makes a non-genetic route plausible is that engram allocation is governed by excitability: neurons that are more excitable around the time of learning are preferentially recruited into the ensemble. If excitability can be raised without gene delivery, then engrams can be biased without it either. Early results in behaving mice are encouraging; a full account is in preparation."
  ],

  interests: [
    "Non-genetic neuromodulation with photothermal nanoparticles",
    "Multifunctional fiber neural probes by thermal drawing",
    "Nanoparticle surface chemistry for neural interfaces"
  ],

  email: "y122396@snu.ac.kr",
  cvPdf: "",          // 예: "assets/cv/Chanwoong_Yoon_CV.pdf"

  // url이 빈 문자열인 항목은 화면에 표시되지 않습니다. 나중에 채우면 자동으로 나타납니다.
  links: [
    { label: "Lab",            url: "https://www.bnilab.com" },
    { label: "ORCID",          url: "https://orcid.org/0009-0008-1566-4711" },
    { label: "Google Scholar", url: "" },
    { label: "GitHub",         url: "" },
    { label: "LinkedIn",       url: "" }
  ]
};

// 네비게이션. 순서를 바꾸거나 페이지를 추가할 때 여기만 수정하면 됩니다.
const NAV = [
  { label: "About",        href: "index.html" },
  { label: "Publications", href: "publications.html" },
  { label: "Research",     href: "research.html" },
  { label: "CV",           href: "cv.html" }
];
