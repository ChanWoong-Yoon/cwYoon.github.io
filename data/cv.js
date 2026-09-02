/* ------------------------------------------------------------------
   cv.js — 웹 CV 내용

   education / experience 항목
     period   왼쪽 열에 들어갈 기간. "2023 — present" 처럼 자유롭게.
     title    학위 또는 직함.
     org      기관명.
     detail   선택. 지도교수, 학과, 소속 연구실 등 한 줄.
     bullets  선택. 세부 항목 배열.

   skills 항목
     group    분류명.
     items    항목 배열.

   Publications 섹션은 publications.js에서 자동으로 불러옵니다.

------------------------------------------------------------------ */

const CV = {
  education: [
    {
      period: "Sep 2020 — Aug 2026",
      title: "Ph.D. in Brain and Cognitive Engineering",
      org: "Korea Advanced Institute of Science and Technology (KAIST)",
      detail: "Integrated M.S.–Ph.D. program, advised by Prof. Seongjun Park"
    },
    {
      period: "Mar 2015 — Aug 2020",
      title: "B.S. in Electrical Engineering and Bio and Brain Engineering",
      org: "Korea Advanced Institute of Science and Technology (KAIST)",
      detail: "Double major"
    }
  ],

  experience: [
    {
      period: "Sep 2026 — present",
      title: "Postdoctoral Researcher",
      org: "Medical Research Center, Seoul National University",
      detail: "Non-genetic neuromodulation and memory engram control"
    }
  ],

  skills: [
    {
      group: "Fabrication",
      items: [
        "Thermal drawing of multifunctional fibers",
        "Preform design",
        "Neural probe assembly"
      ]
    },
    {
      group: "Nanomaterials",
      items: [
        "Seed-mediated gold nanorod synthesis",
        "Ligand exchange (CTAB to cholesterol-PEG)",
        "TEM, UV-Vis spectroscopy, zeta potential"
      ]
    },
    {
      group: "In vivo",
      items: [
        "Stereotaxic implantation surgery",
        "Single- and multi-unit electrophysiology",
        "Photothermal neuromodulation",
        "Immunohistochemistry (NeuN, Iba1)"
      ]
    },
    {
      group: "Characterization",
      items: [
        "Optical attenuation",
        "Impedance spectroscopy",
        "Bending stiffness",
        "Infrared thermography"
      ]
    },
    {
      group: "Computation",
      items: [
        "MATLAB",
        "Python",
        "SolidWorks",
        "Bioheat modeling",
        "Spike sorting and PETH analysis"
      ]
    }
  ]
};
