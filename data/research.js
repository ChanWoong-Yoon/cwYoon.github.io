/* ------------------------------------------------------------------
   research.js — 연구 주제

   필드
     title    주제 이름.
     lede     한 문장 요약. 큰 글씨로 먼저 읽힙니다.
     body     문단 배열. 원하는 만큼 늘리세요.
     figure   선택. { src, caption }. src를 비우면 그림 없이 렌더링됩니다.
     tags     선택. 기법이나 키워드.

   ※ 아래 3개는 예시입니다. 실제 연구로 교체하세요.
------------------------------------------------------------------ */

const RESEARCH = [
  {
    title: "Implants that outlast the immune response",
    lede: "Most neural implants fail not because the electronics break, but because the tissue walls them off.",
    body: [
      "Rigid probes inserted into cortex provoke a sustained inflammatory response: microglia migrate to the shank, astrocytes form a dense sheath, and the neurons nearest the recording sites die or drift away. Within months the signal-to-noise ratio collapses even though every channel still passes an electrical test.",
      "I approach this as a mechanics problem before a biology problem. By moving the array onto a sub-10-micron polyimide substrate with strain-tolerant serpentine interconnects, the implant follows brain micromotion instead of resisting it. In our chronic rodent work this shifted the dominant failure mode from tissue encapsulation to encapsulation-layer water ingress — a problem with a materials answer."
    ],
    figure: { src: "", caption: "Cross-section of the flexible array after 12 months in vivo." },
    tags: ["Flexible electronics", "Chronic electrophysiology", "Histology"]
  },
  {
    title: "High-density arrays without high-density wiring",
    lede: "Channel count is limited by what you can route off the implant, not by what you can pattern on it.",
    body: [
      "Scaling to a thousand sites means a thousand traces crossing the craniotomy, and every one of them is a mechanical liability and a leak path. I work on active multiplexing at the array itself, so a small number of lines carries the traffic of many electrodes.",
      "The design trade is between the noise floor added by on-array switching and the reliability gained from fewer wires. Characterizing that trade honestly — in saline, in acute recordings, and over months of implantation — is most of the work."
    ],
    figure: { src: "", caption: "" },
    tags: ["Multiplexing", "Low-noise circuit design", "Packaging"]
  },
  {
    title: "Decoding that survives a changing signal",
    lede: "A decoder trained on day one is a decoder that fails on day thirty.",
    body: [
      "Recorded units appear, disappear, and shift amplitude across sessions. Decoders that assume a fixed mapping from neural activity to intended movement degrade steadily, and recalibrating with a supervised task every session is not something a patient will tolerate.",
      "I build state-space models that treat the recording instability as part of the generative process rather than as noise to be removed, and evaluate them on the only benchmark that matters here: performance after weeks without retraining."
    ],
    figure: { src: "", caption: "" },
    tags: ["Neural decoding", "State-space models", "Motor BCI"]
  }
];
