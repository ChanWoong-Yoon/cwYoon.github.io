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

   ※ 아래는 예시입니다. 실제 이력으로 교체하세요.
------------------------------------------------------------------ */

const CV = {
  education: [
    {
      period: "2023 — present",
      title: "Ph.D. in Biomedical Engineering",
      org: "University Name",
      detail: "Neural Interface Laboratory, advised by Prof. Hyunjoo Kim",
      bullets: [
        "Dissertation: chronic stability of soft, high-density cortical interfaces"
      ]
    },
    {
      period: "2021 — 2023",
      title: "M.S. in Biomedical Engineering",
      org: "University Name",
      detail: "Thesis on strain-tolerant interconnects for electrocorticography arrays"
    },
    {
      period: "2017 — 2021",
      title: "B.S. in Electrical Engineering",
      org: "University Name"
    }
  ],

  experience: [
    {
      period: "2024 (summer)",
      title: "Research Intern",
      org: "Neurotechnology Group, Company or Institute",
      bullets: [
        "Built an automated saline-soak test rig for accelerated implant lifetime estimation",
        "Characterized encapsulation failure across four polymer stacks"
      ]
    },
    {
      period: "2022 — 2023",
      title: "Graduate Research Assistant",
      org: "Neural Interface Laboratory, University Name",
      bullets: [
        "Established the lab's cleanroom process for sub-10-micron polyimide arrays",
        "Ran chronic rodent implantation and weekly recording protocol"
      ]
    }
  ],

  skills: [
    {
      group: "Fabrication",
      items: ["Photolithography", "Thin-film deposition", "Polyimide processing", "Parylene encapsulation", "Wire bonding and flip-chip assembly"]
    },
    {
      group: "Electrophysiology",
      items: ["Chronic rodent implantation", "Acute in vivo recording", "Impedance spectroscopy", "Stereotaxic surgery", "Immunohistochemistry"]
    },
    {
      group: "Computation",
      items: ["Python (NumPy, SciPy, PyTorch)", "MATLAB", "Spike sorting pipelines", "State-space and latent variable models", "KiCad, COMSOL"]
    }
  ]
};
