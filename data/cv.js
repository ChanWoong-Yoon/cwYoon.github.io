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
   inprep / awards / teaching / references 는 이번에 추가된 섹션입니다.
   site.js 가 이 키들을 읽어 렌더링하도록 수정해야 화면에 표시됩니다.

------------------------------------------------------------------ */

const CV = {
  education: [
    {
      period: "Sep 2020 — Aug 2026",
      title: "Ph.D. in Brain and Cognitive Engineering",
      org: "Korea Advanced Institute of Science and Technology (KAIST)",
      detail: "Integrated M.S.–Ph.D. program, advised by Prof. Seongjun Park · Thesis: Non-genetic Bimodal Neuromodulation using Fiber-based Neural Probe and Gold Nanorod"
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
      detail: "Non-genetic engram allocation and control",
      bullets: [
        "Allocating a hippocampal CA1 engram without genetic modification, using pulsed gold-nanorod photothermal stimulation delivered before contextual fear conditioning",
        "Suppressing retrieval of the allocated engram by continuous near-infrared irradiation during the memory test, with a no-pre-stimulation group establishing that the effect depends on the previously allocated population",
        "Running contextual fear conditioning with automated scoring of freezing and locomotor speed across allocation and non-allocation cohorts",
        "Maintaining transgenic mouse lines and recording population activity by fiber photometry in conditioned and neutral contexts",
        "Developing a relational framework in which engram identity is defined by cosine similarity with previously stored engrams, and testing experience-independent transfer computationally in a model of the entorhinal–dentate perforant pathway"
      ]
    },
    {
      period: "Sep 2020 — Aug 2026",
      title: "Doctoral Researcher",
      org: "Bio and Neural Interfaces Laboratory, KAIST",
      detail: "Advised by Prof. Seongjun Park",
      bullets: [
        "Built multifunctional fiber neural probes by thermal drawing, integrating a microfluidic channel, an optical waveguide and recording electrodes in one filament, and characterized their optical, fluidic, electrical and mechanical properties",
        "Synthesized gold nanorods and exchanged their surface ligands for cholesterol-terminated PEG to make them biocompatible and membrane-anchoring",
        "Carried out stereotaxic implantation and in vivo single- and multi-unit recording in mouse hippocampus and entorhinal cortex",
        "Established the photothermal stimulation parameters that separate inhibition from excitation, and assessed tissue response by NeuN and Iba1 immunohistochemistry",
        "Developed cell-type-specific non-genetic neuromodulation by conjugating antibodies to nanoparticles, validating targeting in primary neuronal culture by calcium imaging and immunostaining"
      ]
    }
  ],

  // 투고 준비 중 원고. 저널명은 확정 후에 적으세요.
  inprep: [
    {
      period: "In preparation",
      title: "Non-genetic Engram Allocation and Manipulation via Gold Nanorod and Multifunctional Fiber-based Neural Probe",
      org: "C. Yoon, et al.",
      detail: "Manuscript in preparation"
    },
    {
      period: "In preparation",
      title: "The GIVER: Geometric Induction of Vectorized Engram Readout for Experience-Independent Memory Transfer",
      org: "C. Yoon, et al.",
      detail: "Computational study · Manuscript in preparation"
    }
  ],

  // 학회 발표. 최신순. period 는 연도, title 은 발표 제목, org 는 학회명.
  presentations: [
    {
      period: "2026",
      title: "Non-Genetic Engram Allocation-and-Manipulation in Mouse Brain via Gold-Nanorod Mediated Photothermal Stimulation",
      org: "Korean Society for Brain and Neural Sciences (KSBNS)",
      detail: "Poster"
    },
    {
      period: "2025",
      title: "Non-Genetic In Vivo Bimodal Neuromodulation Enabled by Fiber-Based Neural Probe and Gold Nanorod",
      org: "Society for Neuroscience (SfN)",
      detail: "Poster"
    },
    {
      period: "2025",
      title: "Non-Genetic In Vivo Bimodal Neuromodulation Enabled by Fiber-Based Neural Probe and Gold Nanorod",
      org: "IEEE International Conference on Neural Engineering (NER)",
      detail: "Poster"
    },
    {
      period: "2023",
      title: "Non-Genetic Bimodal In Vivo Neuromodulation Using Gold Nanorod-Mediated Photothermal Stimulation",
      org: "Korean Society for Brain and Neural Sciences (KSBNS)",
      detail: "Poster"
    },
    {
      period: "2022",
      title: "Non-Genetic, Bidirectional In Vivo Photothermal Neuromodulation Enabled by Gold Nanorod and Fiber-Based Multifunctional Neural Interface",
      org: "Korean BioChip Society (KBSC)",
      detail: "Poster"
    }
  ],

  // TODO: 받은 장학금·수상·연구비를 채우세요. 지원 중인 펠로십은 "(applied)" 로 표기 가능.
  // 예) { period: "2024", title: "<상 이름>", org: "<수여 기관>", detail: "<선택>" }
  awards: [],

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
        "Antibody conjugation for cell-type targeting",
        "TEM, UV-Vis spectroscopy, zeta potential"
      ]
    },
    {
      group: "In vivo",
      items: [
        "Stereotaxic implantation surgery",
        "Single- and multi-unit electrophysiology",
        "Fiber photometry",
        "Photothermal neuromodulation",
        "Intracranial viral delivery by nanojet injector and by Hamilton syringe with micropump (AAV-DJ CaMKII-GCaMP)",
        "Transcardial perfusion, brain sectioning",
        "Immunohistochemistry (NeuN, Iba1, c-Fos)"
      ]
    },
    {
      group: "Behaviour",
      items: [
        "Contextual fear conditioning",
        "Automated scoring of freezing and locomotor speed with a custom DeepLabCut-based pipeline",
        "Transgenic colony maintenance: mating and weaning of Thy1-GCaMP, Thy1-ChR2 and DAT-Cre lines"
      ]
    },
    {
      group: "In vitro",
      items: [
        "Primary neuronal culture",
        "Viral transfection",
        "Calcium imaging",
        "Culture perfusion and immunostaining"
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
        "Spike sorting and PETH analysis",
        "DeepLabCut model training for pose estimation",
        "Neural population and ensemble-overlap analysis"
      ]
    }
  ],

  // TODO: 추천인 동의를 받은 뒤 채우세요. 동의 전이라면 아래 한 줄만 두는 편이 안전합니다.
  // 예) { period: "", title: "Available upon request", org: "" }
  references: []
};
