/* ------------------------------------------------------------------
   research.js — 연구 주제

   필드
     title    주제 이름.
     lede     한 문장 요약. 큰 글씨로 먼저 읽힙니다.
     body     문단 배열. 원하는 만큼 늘리세요.
     figure   선택. { src, caption }. src를 비우면 그림 없이 렌더링됩니다.
     tags     선택. 기법이나 키워드.
------------------------------------------------------------------ */

const RESEARCH = [
  {
    title: "Neuromodulation without a transgene",
    lede: "Nongenetic Bimodal Homology of Opsin.",
    body: [
       "Cell-type-specific control of neurons is routine in the laboratory because of opsins, but the very property that makes them precise makes them hard to translate: something genetically foreign has to be expressed first. That means weeks between surgery and experiment, uncertainty about expression efficiency, and a regulatory path few clinical programs want to walk. Genetics also fixes the direction of control — an excitatory opsin cannot be asked to inhibit.",
       "I use gold nanorods as the actuator instead. Injected into tissue and illuminated at 808 nm, they absorb near-infrared light through localized surface plasmon resonance and release it as heat within nanometers of the membrane. Nothing has to be expressed, so stimulation can begin immediately after a single implantation surgery. To make the particles behave in vivo, the cytotoxic CTAB left over from seed-mediated synthesis is exchanged for cholesterol-terminated PEG, which facilicates the anchoring of the rods to the lipid bilayer while dropping cytotoxicity.",
       "More importantly, photothermal stimulation works in both directions. Continuous irradiation of the treated CA1 raises local temperature by a few degrees and suppresses spontaneous firing, while brief high-intensity pulses do the opposite: a rapid temperature transient at the membrane evokes spiking, and stimulating the medial entorhinal cortex drives time-locked responses downstream in the dentate gyrus. Which direction you get depends only on how the light is pulsed, and the switch is reversible.",
       "The result is a gene-free counterpart to optogenetics — bimodal, immediate, and built from components that could plausibly reach the human brain."
    ],
    figure: { src: "assets/img/nongenetic-neuromodulation.jpg", caption: "Gold nanorods on the membrane turn near-infrared light into local heat. Continuous irradiation suppresses firing; brief high-intensity pulses evoke it." },
    tags: ["Photothermal stimulation", "Gold nanorods", "In vivo electrophysiology", "Surface functionalization", "In vivo"]
  },
  {
    title: "A probe that delivers, illuminates, and listens",
    lede: "Particles, light, and electrode have to meet in one place.",
    body: [
       "In nanoparticle-mediated neuromodulation and monitoring the effect, most of the difficulty is not the chemistry. It is that three componnents — the injected particles, the optical stimulus, and the recording site — have to meet at the same point inside tissue you cannot see into. Assembling that from separate cannulas, fibers, and electrodes means three insertion tracks, three sources of misalignment, and a much larger wound.",
       "I build the whole thing as one fiber. A macroscopic polymer preform is thermally co-drawn into a flexible fiber that carries a microfluidic channel, an optical waveguide, and tungsten microwire electrodes together, in fixed relative position. Optical transmission, fluidic delivery rate, and electrical impedance all meet the requirements for in vivo work, with the assembled probe weighs about 0.6 g — light enough for a freely moving mouse.",
       "Because the geometry is set during the draw rather than at the bench, colocalization is built in: the particles land where the light goes, and the electrode is already there to report what happened."
    ],
    figure: { src: "assets/img/mfn-probe.jpg", caption: "One drawn fiber carries the microfluidic channel, the optical waveguide and the recording electrodes, so the nanoparticles, the light and the electrode meet in the same tissue." },
    tags: ["Thermal drawing", "Multifunctional fibers", "Microfluidics", "Optical waveguides", "Neural probes", "In vivo"]
  },
  {title: "Cell-type specificity without a gene",
lede: "Nanoparticles that can tell an excitatory neuron from an inhibitory one.",
body: [
  "Optogenetics gets its selectivity from promoters: the actuator goes only where the genetic program puts it. Every non-genetic alternative gives that up. Magnetothermal, magnetoelectric, piezoelectric and photothermal particles all modulate whatever cell they happen to be sitting on, so they can address a region but not a population within it. Since excitatory and inhibitory neurons in the same volume push circuit activity in opposite directions, a stimulus that cannot tell them apart is difficult to reason about and harder to use.",

  "I am moving the specificity into the antibody instead of the genome. Conjugating antibodies to gold is an established strategy for adhesion; I am asking the antibody to do one thing more — not just to stick, but to choose what it sticks to. Whether it actually selects depends almost entirely on the choice of surface protein, which has to satisfy five constraints at once: differential expression between the two populations, a transmembrane form with a large extracellular epitope, stability at the surface rather than constant trafficking, abundance at the soma where photothermal stimulation is effective, and enough of it in the region of interest. Few proteins survive all five. I am working with ErbB4, enriched on inhibitory interneurons, and Thy-1, enriched on excitatory neurons.",

  "Orientation matters as much as affinity. The antibody is thiolated through the carbohydrates of its Fc region — periodate oxidation to expose aldehydes, then a hydrazide-PEG-thiol linker — so that when it binds the gold surface, its antigen-binding sites face outward rather than into the particle. The work is in dissociated mouse hippocampal culture, where selectivity can be verified against co-staining before it is asked to move a network in either direction."
],
    figure: { src: "assets/img/celltype-specific-gnr.jpg", caption: "Antibody-conjugated nanorods bind one population and not the other, moving selectivity from the genome to the particle surface." },
    tags: ["Antibody conjugation", "Cell-type targeting", "ErbB4 and Thy-1", "Hippocampal culture", "In vitro", "In progress"]
  },
  {
    title: "Drive engram ensemble without genetic tagging",
    lede: "Every route to an engram begins by putting a gene into it.",
body: [
  "An engram is the physical trace of a particular episode: the set of neurons changed by learning, organized into an ensemble. The evidence that these ensembles are the memory is causal rather than correlative — reactivating one is sufficient to produce recall, and ablating it impairs retrieval. That evidence was built almost entirely with a single method, tag-and-manipulation, in which an optogenetic actuator under an immediate-early gene promoter is expressed in whatever cells were strongly active during learning. It is a powerful tool, and it is inseparable from genetic delivery.",
  "A second paradigm changes this. Rather than identifying engram cells after the event, allocate-and-manipulation selects them in advance. Exploiting the finding that excitability at the time of learning governs which neurons are allocated to engram ensemble, recruitment into the engram can be biased toward a chosen subset of the population simply by raising that subset's excitability before encoding. The consequence that interests me is that excitability can be raised physically rather than genetically — and photothermal stimulation of gold nanorods raises it.",
  "That is the direction I am pursuing: biasing which hippocampal neurons join a fear engram, then modulating that same population afterward, with no transgene at either step. Early results in behaving mice are encouraging; a full account is in preparation."
],
    figure: { src: "assets/img/nongenetic-engram-control.jpg", caption: "Near-infrared light reaches a hippocampal ensemble made addressable by injected nanorods rather than by a transgene." },
    tags: ["Memory engrams", "Engram allocation", "Contextual fear conditioning", "Hippocampus", "In progress"]
  },
  {
   title: "Can a concept that was never learned be placed directly into a brain?",
lede: "Engram control requires knowing which neurons to touch.",
body: [
  "Optogenetic reactivation of a hippocampal ensemble is sufficient to drive recall, and enforcing engram-level connectivity can produce a memory for something that never happened. Both depend on tagging: the neurons must be labeled during learning or be genetically accessible, which confines the method to representations the animal already has. And allocation is not arbitrary — which neurons join an ensemble follows from excitability and existing connectivity — so driving a chosen set to arbitrary activity produces activity, not a representation.",
  "GIVER — Geometric Inference of Vectorized Engram Representation — sidesteps that problem by never identifying a cell. Treat the activity of N neurons as a point in N-dimensional state space, and a concept becomes a region rather than a list of cells, with related concepts sitting nearer than unrelated ones. The coordinate is also what makes the idea actionable, because it changes what has to be selected: which neurons carry the representation does not matter, only where their joint activity sits. Given a target coordinate, the weights between a freely chosen population and the reference ensembles could be adjusted until that population's activity settles at the intended point.",
  "Locating that coordinate is therefore the first problem. Multilateration — the geometry behind positioning systems — recovers an unknown point from distance ratios to known references. I test the idea with two spiking networks trained on MNIST by spike-timing-dependent plasticity: a \"Giver\" that has seen every digit, and a \"Receiver\" trained identically but with one class withheld. The question is whether the withheld representation can be reconstructed in the Receiver from its relational geometry in the Giver."
],
    figure: { src: "assets/img/giver.jpg", caption: "A concept located from its distances to the ensembles already present, rather than from the identity of its neurons." },
    tags: ["Spiking neural networks", "Neural state space", "Multilateration", "Engram theory", "Computational neuroscience", "In progress"]
  }
];
