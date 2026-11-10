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
    lede: "A gene-free counterpart to optogenetics.",
    body: [
       "Cell-type-specific control of neurons is routine in the laboratory because of opsins, but the very property that makes them precise makes them hard to translate: something genetically foreign has to be expressed first. That means weeks between surgery and experiment, uncertainty about expression efficiency, and a regulatory path few clinical programs want to walk. Genetics also fixes the direction of control — an excitatory opsin cannot be asked to inhibit.",
       "I use gold nanorods as the actuator instead. Injected into tissue and illuminated at 808 nm, they absorb near-infrared light through localized surface plasmon resonance and release it as heat within nanometers of the membrane. Nothing has to be expressed, so stimulation can begin immediately after a single implantation surgery. To make the particles behave in vivo, the cytotoxic CTAB left over from seed-mediated synthesis is exchanged for cholesterol-terminated PEG, which facilitates the anchoring of the rods to the lipid bilayer while dropping cytotoxicity.",
       "More importantly, photothermal stimulation works in both directions, and the two directions have different mechanisms. Continuous irradiation of the treated CA1 raises local temperature by a few degrees and suppresses spontaneous firing by gating thermosensitive potassium channels such as TREK-1, while brief high-intensity pulses do the opposite: a rapid temperature transient at the membrane alters its capacitance and evokes spiking, and stimulating the medial entorhinal cortex drives time-locked responses downstream in the dentate gyrus. Which direction you get depends only on how the light is pulsed, and the switch is reversible. A single agent under a single wavelength therefore does what otherwise requires co-expressing spectrally distinct excitatory and inhibitory opsins.",
       "The result is a clinically tractable counterpart to optogenetics — bimodal, immediate, and built from components that could plausibly reach the human brain."
    ],
    figure: { src: "assets/img/nongenetic-neuromodulation.jpg", caption: "Gold nanorods on the membrane turn near-infrared light into local heat. Continuous irradiation suppresses firing; brief high-intensity pulses evoke it." },
    tags: ["Photothermal stimulation", "Gold nanorods", "In vivo electrophysiology", "Surface functionalization", "In vivo"]
  },
  {
    title: "A probe that delivers, illuminates, and listens",
    lede: "Particles, light, and electrode delivered in one place.",
    body: [
       "In nanoparticle-mediated neuromodulation and monitoring the effect, most of the difficulty is not the chemistry. It is that three components — the injected particles, the optical stimulus, and the recording site — have to meet at the same point inside tissue you cannot see into. Assembling that from separate cannulas, fibers, and electrodes means three insertion tracks, three sources of misalignment, and a much larger wound.",
       "I build the whole thing as one fiber. A macroscopic polymer preform is thermally co-drawn into a flexible fiber that carries a microfluidic channel, an optical waveguide, and tungsten microwire electrodes together, in fixed relative position. Optical transmission, fluidic delivery rate, and electrical impedance all meet the requirements for in vivo work, and the assembled probe weighs about 0.6 g — light enough for a freely moving mouse.",
       "Because the geometry is set during the draw rather than at the bench, colocalization is built in: the particles land where the light goes, and the electrode is already there to report what happened."
    ],
    figure: { src: "assets/img/mfn-probe.jpg", caption: "One drawn fiber carries the microfluidic channel, the optical waveguide and the recording electrodes, so the nanoparticles, the light and the electrode meet in the same tissue." },
    tags: ["Thermal drawing", "Multifunctional fibers", "Microfluidics", "Optical waveguides", "Neural probes", "In vivo"]
  },
  {title: "Cell-type specificity without a gene",
lede: "Selectivity moved from the genome to the particle surface.",
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
    lede: "Access to an engram doesn't have to begin by putting a gene into it.",
body: [
  "An engram is the physical trace of a particular episode: the set of neurons changed by learning, organized into an ensemble. Almost everything known about these ensembles was established by tag-and-manipulate, in which an optogenetic actuator under an immediate-early gene promoter is expressed in whatever cells were strongly active during learning. The cost of that method is rarely stated. Tagging is not a passive readout of which neurons were recruited; it is an intervention on the very neurons whose recruitment is under study, so intrinsic excitability and the construct used to report it cannot be told apart.",
  "Allocate-and-manipulate offers a way around it: rather than identifying engram cells after the event, it selects them in advance. Neurons more excitable than their neighbours at the time of learning are preferentially recruited, so recruitment can be biased by raising a chosen subset's excitability before encoding. Without a transgene this takes two things at once — stimulation confined in space, since allocation depends on excitability relative to the competing pool, and stimulation that runs in both directions, since biasing allocation and suppressing retrieval are opposite interventions on the same cells. Photothermal stimulation with gold nanorods gives both: geometry and particle distribution set which cells, irradiation mode sets which direction.",
  "In dorsal CA1 this holds up, with no genetic modification at any stage. Pulsed stimulation before contextual fear conditioning — within the window over which allocated neurons stay more excitable than their neighbours — biases allocation toward the stimulated population. Continuous irradiation during retrieval then reduces freezing in those mice and does nothing in mice that never received the pre-stimulation, which is what shows the suppression depends on the population having been allocated rather than on the irradiation itself. I believe this is the first engram ensemble to be allocated and suppressed without a transgene. A manuscript is in preparation."
],
    figure: { src: "assets/img/nongenetic-engram-control.jpg", caption: "Near-infrared light reaches a hippocampal ensemble made addressable by injected nanorods rather than by a transgene." },
    tags: ["Memory engrams", "Engram allocation", "Contextual fear conditioning", "Hippocampus", "In progress"]
  },
  {
   title: "Directly injecting a concept",
lede: "New information artificially grafted onto pre-existing experiences.",
body: [
  "Reactivating a tagged ensemble drives recall, and artificially connecting the populations that carry two memories can link them, or associate representations never jointly experienced. All of it runs through tagging, which confines the method to representations the animal already has. And allocation is not arbitrary — which neurons join an ensemble follows from excitability and existing connectivity — so driving an arbitrary set to an arbitrary pattern produces activity, not a representation.",
  "What differs between two brains is the neural code rather than the content. Knowledge transfers between people because new information is not built from scratch in the receiver; it is grafted onto experiences the two already share, taking its meaning from its relationships to them. That has a cellular counterpart. Related memories are stored in partially overlapping ensembles, and the overlap is actively regulated: neurons made transiently more excitable are preferentially recruited, so memories formed close in time come to share neurons and become linked.",
  "If relationships to existing contexts shape how a memory is encoded, they may be enough to specify one — a context defined by its similarities to contexts already encoded, and reconstructed from that pattern alone. GIVER — Geometric Induction of Vectorized Engram Readout — tests this between two networks. A giver holds the target context and specifies its relationships to references that both networks have encoded; the procedure re-expresses those relationships in a receiver that has never been shown the target. This inverts natural linking: there the relationships decide which neurons are recruited, here the population is fixed in advance and the relationships are written onto it.",
  "I model the transfer in the entorhinal–dentate perforant pathway, where the sparse activity of the dentate separates similar cortical inputs into distinct patterns, and predesignate a tenth of the dentate cells as the readout — a neutral substrate belonging to no naturally formed trace. Two things keep the test honest: the pairing has to be physiologically realizable, coordinated pre- and postsynaptic activity rather than a direct edit of the weights, and success is defined narrowly, as a readout population that answers most strongly to the target and more weakly to every other context."
],
    figure: { src: "assets/img/giver.jpg", caption: "A context specified by its relationships to the contexts already encoded, and written onto a population chosen in advance." },
    tags: ["Spiking neural networks", "Entorhinal–dentate pathway", "Engram overlap and linking", "Synaptic plasticity", "Computational neuroscience", "In progress"]
  }
];
