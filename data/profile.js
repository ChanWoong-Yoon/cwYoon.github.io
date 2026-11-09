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
    "Writing new information directly into a brain would be one of the holy grails of brain-computer interface technology. A memory is stored as changes in synaptic weight, and those changes arise from the coordinated firing of pre- and postsynaptic neurons. So in principle, whoever can control the activity of neurons can control what is stored. My work is to build up the proposition from the part that can be tested now.",
    "Engram ensembles stand in a causal relation to memory: reactivating one produces recall, and suppressing it impairs retrieval. But nearly all of that evidence rests on genetic tagging. As neither the exogenous transactivator nor the actuators it drives are inert, the tagging results in the alteration of property of the tagged neuron. Whether the engram control actually requires genetic modification has never been tested.",
    "I test it by moving the actuator out of the genome. Neurons that are more excitable than their neighbours at the time of learning are preferentially recruited into an ensemble. So recruitment can be biased by raising the excitability of a subpopulation beforehand — and that bias does not have to come from a genetic tool. Gold nanorods (GNRs) can do this with photothermal stimulation: under near-infrared (NIR) light, GNRs anchored to the membrane release heat locally. High-intensity pulsed light excites, and moderate continuous light inhibits neuronal activity. Which cells are affected is set by illumination geometry and particle distribution rather than by viral tropism or promoter activity. A multifunctional fiber-based neural probe carries the particles, the light and the recording electrode in a single fiber enabling non-genetic in vivo bimodal neuromodulation.",
    "In mouse dorsal CA1, with no genetic modification at any stage, pulsed stimulation before contextual fear conditioning biases allocation toward the stimulated population, and continuous irradiation during retrieval then reduces freezing — an effect absent in mice that never received the pre-stimulation. To my knowledge this is the first non-genetic manipulation of a memory engram ensemble, and it lifts the requirement that has so far confined causal engram work to genetically tractable animals. A manuscript is in preparation.",
	  "Controlling engram activity is still only half the problem: to write a memory, you have to know which pattern of activity to write. No two brains share connectivity, but they do share experiences, and a new memory is encoded forming the relationships with those shared references. GIVER — Geometric Induction of Vectorized Engram Readout — inverts natural memory linking to exploit this. In linking, the relationships decide which neurons are recruited; in GIVER, the population is fixed in advance and the relationships to pre-existing memories are imposed on it.",
    "
    "Together these run from clinically viable non-genetic neuromodulation, through non-genetic engram control, toward writing genuinely new information into a brain."
  ],
	/*
  intro: [
    "Writing new information directly into a brain would be one of the holy grails of neural engineering. A memory is stored as changes in synaptic weight, and those changes arise from the coordinated firing of pre- and postsynaptic neurons — so in principle, whoever can control the activity of neurons can control what is stored. I take that proposition seriously, and my work builds it up from the part of it that can be tested now.",
    "Engram ensembles establishes causal relation with the memory: reactivation produces recall, and suppression impairs retrieval. But most of evidences rests on genetic tagging, which essentially accompanied with genetic modificaiton. However, neither the exogenous transactivator nor the actuators it drives are inert, making them is not just a passive readout. As a result, the tagged neuron's properties cannot be separated from the tags used to identify it. Whether causal engram control actually requires genetic modification has never been tested.",
    "I test it by moving the actuator out of the genome. Neurons more excitable than their neighbours at the time of learning are preferentially recruited into an ensemble. Therefore, recruitment can be biased by raising the excitability of subpopulation beforehand. The gold nanorods (GNRs)-mediated photothermal stimulation can do it without genetic modification. Illuminated by near-infrared (NIR) light, GNR attached to the neurons release heat to cell membrane. Which cells are affected is set by illumination geometry rather than by viral tropism or promoter activity. Whether the light is irradiated in pulsed or in continuous mode determines whether the cell is excited or inhibited. The multifunctional fiber-based neural probe deliver the particles, the light and the electrode in one place, enabling non-genetic in vivo bimodal neuromodulation.",
    "In dorsal CA1 of mouse, with no genetic modification at any stage, pulsed stimulation before contextual fear conditioning biases allocation toward the stimulated population, and continuous irradiation during retrieval then reduces freezing. Only the mice that received that pre-stimulation showed reduction of freezing. To my knowledge this is the first non-genetic manipulation of a memory engram ensemble, and it lifts the requirement that has so far confined causal engram work to genetically tractable animals. A manuscript is in preparation.",
    "Controlling allocation is still only half of the problem: to write a memory rather than modulate one, you have to know what pattern of activity to write. Memory is called private because no two brains share connectivity, but what differs between them is the neural code, not the content. What two brains do share is a set of common experiences, and the new experience is encoded with forming relationships to those references. GIVER — Geometric Induction of Vectorized Engram Readout — inverts natural memory linking to exploit that: there, the relationships decide which neurons are recruited; here the population is fixed in advance and the relationships are written onto it.",
    "Together these run from clinically viable non-genetic neuromodulation, through non-genetic engram control, toward writing genuinely new information into a brain."
  ],*/

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
