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
    "Writing new information directly into a brain would be one of the holy grails of neural engineering. A memory is stored as changes in synaptic weight, and those changes arise from the coordinated firing of pre- and postsynaptic neurons — so in principle, whoever can control the activity of neurons can control what is stored. I take that proposition seriously, and my work builds it up from the part of it that can be tested now.",
    "That engram ensembles are the memory is established causally: reactivating one produces recall, and suppressing it impairs retrieval. But nearly all of that evidence rests on genetic tagging, and tagging is not a passive readout of which neurons were recruited. Neither the transactivator nor the actuators it drives are inert in the cells that express them, so a neuron's own excitability cannot be separated from the construct used to identify it. Whether causal engram control actually requires genetic modification has never been tested.",
    "I test it by moving the actuator out of the genome. Neurons more excitable than their neighbours at the time of learning are preferentially recruited into an ensemble, so recruitment can be biased by raising a chosen subset's excitability beforehand — and gold nanorods raise it physically. Illuminated at 808 nm, they release near-infrared light as heat within nanometres of the membrane. Which cells are affected is set by illumination geometry rather than by viral tropism or promoter activity, and which direction by how the light is pulsed. To hold the particles, the light and the electrode in one place, I draw all three into a single fiber.",
    "In dorsal CA1 this works, with no genetic modification at any stage. Pulsed stimulation before contextual fear conditioning biases allocation toward the stimulated population, and continuous irradiation during retrieval then reduces freezing — but only in the mice that received that pre-stimulation. To my knowledge this is the first nanoparticle-mediated manipulation of a memory engram ensemble, and it lifts the requirement that has so far confined causal engram work to genetically tractable animals. A manuscript is in preparation.",
    "Controlling allocation is still only half of the problem: to write a memory rather than modulate one, you have to know what pattern of activity to write. Memory is called private because no two brains share connectivity, but what differs between them is the neural code, not the content. What two brains do share is a set of reference experiences, and the relationships to those references, expressed in each brain's own code, form a frame available to both. GIVER — Geometric Induction of Vectorized Engram Readout — inverts natural memory linking to exploit that: there, the relationships decide which neurons are recruited; here the population is fixed in advance and the relationships are written onto it.",
    "Together these run from clinically viable non-genetic neuromodulation, through non-genetic engram control, toward writing genuinely new information into a brain. The last step is still far off. The first two are working."
  ],

  interests: [
    "Non-genetic neuromodulation with photothermal nanoparticles",
    "Multifunctional fiber neural probes by thermal drawing",
    "Surface chemistry for membrane anchoring and cell-type targeting",
    "Memory engram allocation and control",
    "Experience-independent concept transfer"
  ],

  email: "y122396@snu.ac.kr",
  cvPdf: "assets/cv/Chanwoong_Yoon_CV.pdf",

  // url이 빈 문자열인 항목은 화면에 표시되지 않습니다. 나중에 채우면 자동으로 나타납니다.
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=xF9R1D8AAAAJ" },
    { label: "ORCID",          url: "https://orcid.org/0009-0008-1566-4711" },
    { label: "Lab",            url: "https://www.bnilab.com" },
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
