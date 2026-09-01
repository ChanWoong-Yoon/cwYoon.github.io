/* ------------------------------------------------------------------
   profile.js — 사이트 전역 정보
   여기만 고치면 모든 페이지의 헤더/푸터/홈 소개가 함께 바뀝니다.
   TODO 표시된 곳을 실제 정보로 채우세요.
------------------------------------------------------------------ */

const PROFILE = {
  name: "Chanwoong Yoon",

  // 저자 목록에서 굵게 표시할 이름들. 논문마다 표기가 달라도 여기에 추가하면 인식합니다.
  aliases: ["Chanwoong Yoon", "C. Yoon", "Yoon, C.", "C.-W. Yoon"],

  role: "Ph.D. Student in Neuroengineering",              // TODO
  affiliation: "Department of Biomedical Engineering",     // TODO
  institution: "University Name",                          // TODO
  location: "Seoul, Republic of Korea",

  photo: "assets/img/profile.jpg",   // 여기에 사진 파일을 넣으세요. 없으면 이니셜이 표시됩니다.
  initials: "CY",

  // 홈 첫 화면의 한 문장. 짧고 구체적일수록 좋습니다.
  statement: "I build electronics that speak the nervous system's language.",

  intro: [
    "I work at the boundary between flexible electronics and neural tissue, designing implantable interfaces that record and modulate activity without provoking the immune response that ends most chronic implants.",
    "My current focus is a soft, high-density electrode array for long-term cortical recording — the fabrication process, the encapsulation chemistry that keeps it alive in vivo, and the decoding models that turn its output into something clinically useful."
  ],

  interests: [
    "Flexible and implantable neural interfaces",
    "Chronic electrophysiology and signal stability",
    "Neural decoding for motor restoration",
    "Biocompatible encapsulation materials"
  ],

  email: "",          // 예: "chanwoong.yoon@example.ac.kr"
  cvPdf: "",          // 예: "assets/cv/Chanwoong_Yoon_CV.pdf"

  // url이 빈 문자열인 항목은 화면에 표시되지 않습니다. 나중에 채우면 자동으로 나타납니다.
  links: [
    { label: "Google Scholar", url: "" },
    { label: "ORCID",          url: "" },
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
