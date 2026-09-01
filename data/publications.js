/* ------------------------------------------------------------------
   publications.js — 논문 목록

   새 논문은 배열 맨 위에 객체 하나를 추가하면 됩니다. 연도별 묶음,
   저자명 강조, 링크 버튼은 자동으로 처리됩니다.

   필드
     year      숫자. 연도별 그룹의 기준.
     title     논문 제목.
     authors   저자 배열. profile.js의 aliases와 일치하면 굵게 표시됩니다.
     venue     학술지 또는 학회명.
     note      선택. "In press", "Oral presentation" 등 짧은 부가 정보.
     selected  true이면 홈의 Selected work에 노출됩니다.
     links     선택. pdf / doi / code / project 중 있는 것만 적으면 됩니다.

   ※ 아래 5편은 형식을 보여주기 위한 예시입니다. 실제 논문으로 교체하세요.
------------------------------------------------------------------ */

const PUBLICATIONS = [
  {
    year: 2025,
    title: "A conformal 1,024-channel electrode array for year-long cortical recording",
    authors: ["C. Yoon", "J. Park", "S. Lee", "M. Han", "H. Kim"],
    venue: "Nature Biomedical Engineering",
    note: "In press",
    selected: true,
    links: { pdf: "", doi: "", code: "" }
  },
  {
    year: 2025,
    title: "Encapsulation chemistry governs the failure mode of soft neural implants",
    authors: ["C. Yoon", "D. Choi", "H. Kim"],
    venue: "Biosensors and Bioelectronics",
    selected: true,
    links: { doi: "" }
  },
  {
    year: 2024,
    title: "Decoding reach intention from low-density cortical arrays with recurrent state-space models",
    authors: ["J. Park", "C. Yoon", "H. Kim"],
    venue: "Journal of Neural Engineering",
    selected: true,
    links: { pdf: "", doi: "", code: "" }
  },
  {
    year: 2024,
    title: "Strain-tolerant interconnects for flexible electrocorticography arrays",
    authors: ["C. Yoon", "M. Han", "S. Lee"],
    venue: "IEEE Transactions on Biomedical Engineering",
    links: { doi: "" }
  },
  {
    year: 2023,
    title: "Impedance drift as an early marker of glial encapsulation in chronic implants",
    authors: ["S. Lee", "C. Yoon", "H. Kim"],
    venue: "Annual International Conference of the IEEE EMBS",
    note: "Oral presentation",
    links: { pdf: "" }
  }
];
