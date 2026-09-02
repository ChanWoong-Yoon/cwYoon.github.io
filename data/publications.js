/* ------------------------------------------------------------------
   publications.js — 논문 목록

   새 논문은 배열 맨 위에 객체 하나를 추가하면 됩니다. 연도별 묶음,
   저자명 강조, 링크 버튼은 자동으로 처리됩니다.

   필드
     year      숫자. 연도별 그룹의 기준.
     title     논문 제목.
     authors   저자 배열. profile.js의 aliases와 일치하면 굵게 표시됩니다.
     venue     학술지명. 이탤릭으로 표시되므로 저널명만 적습니다.
     note      선택. 권(호), 페이지 등. venue 뒤에 이탤릭 없이 붙습니다.
     selected  true이면 홈의 Selected work에 노출됩니다.
     links     선택. pdf / doi / code / project 중 있는 것만 적으면 됩니다.
------------------------------------------------------------------ */

const PUBLICATIONS = [
  {
    year: 2026,
    title: "Nongenetic in Vivo Bimodal Neuromodulation via Photothermal Gold Nanorods and a Multifunctional Fiber Neural Probe",
    authors: ["C. Yoon", "Y. Lee", "G. Yim", "S.-W. Lee", "W. Lee", "Y.-G. Park", "S. Park"],
    venue: "ACS Nano",
    note: "20(28), 20001–20015",
    selected: true,
    links: { doi: "https://doi.org/10.1021/acsnano.6c02201" }
  },
  {
    year: 2026,
    title: "Thermally Drawn Multifunctional All-Hydrogel Fibers for Anti-Fibrotic and Multimodal Neural Interfaces",
    authors: ["C. Sung", "K. S. Nam", "Y. Kim", "H. Kang", "K. Kim", "C. Yoon", "…", "S. Park"],
    venue: "Advanced Materials",
    note: "38(9), e11634",
    selected: true,
    links: { doi: "" }
  },
  {
    year: 2022,
    title: "A Personalized Electronic Tattoo for Healthcare Realized by On-the-Spot Assembly of an Intrinsically Conductive and Durable Liquid-Metal Composite",
    authors: ["G.-H. Lee", "H. Woo", "C. Yoon", "C. Yang", "J. Y. Bae", "W. Kim", "…", "S. Park"],
    venue: "Advanced Materials",
    note: "34(32), 2204159",
    links: { doi: "" }
  },
  {
    year: 2021,
    title: "Recent Advances in Recording and Modulation Technologies for Next-Generation Neural Interfaces",
    authors: ["J. W. Hong", "C. Yoon", "K. Jo", "J. H. Won", "S. Park"],
    venue: "iScience",
    note: "24(12) · Review",
    selected: true,
    links: { doi: "" }
  }
];
