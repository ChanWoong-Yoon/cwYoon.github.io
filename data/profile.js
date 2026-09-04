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
    "Injecting knowledge directly into the brain would be one of the holy grails of neural engineering. Knowledge, or memory, is information stored in the brain in the form of changes in synaptic weight. Those changes arise from the coordinated firings of pre- and postsynaptic neurons. It follows that whoever can control the activity of neurons can control synaptic weights as well — and with them, maneuver an arbitrarily selected neural population through neural state space.",
    "This is what matters for memory insertion. A memory is not an island. Any memory X is linked to memories A, B, C that are already inscribed, which means the engram ensemble for X sits at a coordinate defined by its relative distances to the ensembles for A, B, and C. If the firing of a given neural population could be placed at that coordinate in neural state space — positioned appropriately with respect to the engram ensembles that already exist — then the information carried by memory X could be acquired without ever experiencing X. In short: the one who controls neural activity controls the memory.",
    "The limitation of conventional neuromodulation is its need for genetic modification. Optogenetics established precise spatiotemporal control of neural activity, but only by delivering and expressing foreign genes in the target cells. Powerful as it is, that requirement brings a long delay between surgery and experiment, uncertainty in expression, and — most importantly — a fixed direction of control: a channel designed to excite cannot also be used to inhibit.",
    "I replace the genetic actuator with a nanoparticle instead. Gold nanorods absorb near-infrared light and convert it into heat at nearby neuronal membranes. With the same particles, continuous irradiation suppresses firing while brief high-intensity pulses evoke spikes, so the direction of modulation is set by the optical irradiation parameter rather than by a genetically encoded channel. Nothing has to be expressed, so stimulation can begin immediately after implantation. To hold particles, light, and electrodes in the same small volume of tissue I build multifunctional fibers by thermal drawing, and to recover the cell-type specificity a physical actuator lacks, I conjugate targeting antibodies to the nanorods.",
    "I am now applying this platform to memory engrams. Which neurons are recruited into an engram ensemble is governed by their excitability around the time of learning. If excitability can be raised non-genetically, the composition of an engram can be biased without a transgene. I am testing whether photothermal stimulation can bias hippocampal neurons toward recruitment into a fear engram and then modulate that same population. Early results in the contextual fear test are promising.",
    "Manipulating synaptic weights is only half of the problem. To insert a memory we still need to know where its activity pattern belongs in neural state space — what coordinate it occupies relative to the engram ensembles already present. Once that coordinate is found, the weights between an arbitrarily selected population and those pre-existing ensembles could be adjusted, and when the state of that population aligns with the coordinate, a concept could be acquired without the experience that would ordinarily produce it. GIVER — Geometric Inference of Vectorized Engram Representations — examines this computationally. Treating a concept as a location in the relational geometry of neural state space, I ask whether a spiking network can reconstruct a concept it was never trained on from its geometric relationships to the concepts it already holds.",
    "Altogether, these projects run from clinically viable non-genetic neuromodulation, through non-genetic engram control, toward writing genuinely new information into the brain."
  ],

  interests: [
    "Non-genetic neuromodulation with photothermal nanoparticles",
    "Multifunctional fiber neural probes by thermal drawing",
    "Nanoparticle surface chemistry for membrane anchoring and cell-type targeting",
    "Memory engram allocation and control",
    "Experience-independent concept transfer"
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
