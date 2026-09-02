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
    lede: "An opsin has to be delivered, expressed, and waited on.",
    body: [
      "Cell-type-specific control of neurons is routine in the laboratory because of opsins, but the same property that makes them precise makes them hard to translate: something foreign has to be expressed in the target cells first. That means weeks between surgery and experiment, uncertainty about expression efficiency, and a regulatory path that few clinical programs want to walk. It also fixes the direction of control — an excitatory opsin cannot be asked to inhibit.",
      "I use gold nanorods as the actuator instead. Injected into tissue and illuminated at 808 nm, they absorb near-infrared light through localized surface plasmon resonance and release it as heat within nanometers of the membrane. Nothing has to be expressed, so stimulation can begin immediately after a single implantation surgery. To make the particles behave in vivo, the cytotoxic CTAB left over from seed-mediated synthesis is exchanged for cholesterol-terminated PEG, which drops the zeta potential from about 51 mV to 13 mV and anchors the rods to the lipid bilayer.",
      "The part I find most useful is that one actuator gives both directions. Continuous irradiation of the treated CA1 raises local temperature a few degrees and suppresses spontaneous firing — mean rate falls from 0.69–1.09 Hz to 0.29–0.40 Hz — consistent with recruitment of thermosensitive inhibitory channels. Brief high-intensity pulses do the opposite: a rapid temperature transient at the membrane evokes spiking, and stimulating the medial entorhinal cortex drives time-locked responses in the dentate gyrus downstream. Which direction you get depends only on how the light is pulsed, and the switch is reversible."
    ],
    figure: { src: "", caption: "" },
    tags: ["Photothermal stimulation", "Gold nanorods", "In vivo electrophysiology", "Surface functionalization"]
  },
  {
    title: "A probe that delivers, illuminates, and listens",
    lede: "Particles, light, and electrode have to meet in one place.",
    body: [
      "Most of the difficulty in nanoparticle-mediated stimulation is not the chemistry. It is that three things have to be colocalized inside tissue you cannot see into: the injected particles, the optical stimulus, and the recording site. Assembling that from separate cannulas, fibers, and electrodes means three insertion tracks, three sources of misalignment, and a much larger wound.",
      "I build the whole thing as one fiber. A macroscopic polymer preform is thermally co-drawn into a filament 287–338 µm across that carries a microfluidic channel, an optical waveguide, and tungsten microwire electrodes together, in fixed relative position. The waveguide loses 1.26 dB/cm and stays flat from deep red through near-infrared; electrode impedance sits between 60.8 and 84.8 kΩ at 1 kHz, well inside the range for single-unit recording; the fluidic path returns 94.6% of what is injected. The assembled probe weighs about 0.6 g, light enough for a freely moving mouse.",
      "Because the geometry is set during the draw, the particles land where the light goes and the electrode is already there to report what happened. Immunohistochemistry for NeuN and Iba1 three weeks after injection shows no detectable neuronal loss or gliosis relative to the contralateral side."
    ],
    figure: { src: "", caption: "" },
    tags: ["Thermal drawing", "Multifunctional fibers", "Microfluidics", "Optical waveguides", "Neural probes"]
  },
  {
    title: "Cell-type specificity without a gene",
    lede: "No nanoparticle can tell excitatory from inhibitory neurons.",
    body: [
      "Optogenetics gets its selectivity from promoters: the actuator goes only where the genetic program puts it. Every non-genetic alternative gives that up. Magnetothermal, magnetoelectric, piezoelectric and photothermal particles all modulate whatever cell they happen to be sitting on, so they can address a region but not a population inside it. Since excitatory and inhibitory neurons in the same volume push circuit activity in opposite directions, a stimulus that cannot distinguish them is difficult to reason about and harder to use.",
      "I am moving the specificity into the antibody instead of the genome. Conjugating a targeting antibody to gold is not itself new — Carvalho-de-Souza and colleagues used it in 2015 to improve how well nanospheres attach to membranes — but it was used for adhesion, not for selection. Making it select depends almost entirely on the choice of surface protein, which has to satisfy five constraints at once: differential expression between the two populations, a transmembrane form with a large extracellular epitope, stability at the surface rather than constant trafficking, abundance at the soma where photothermal stimulation is effective, and enough of it in the region of interest. Few proteins survive all five. I am working with ErbB4, enriched on inhibitory interneurons, and Thy-1, enriched on excitatory neurons.",
      "Orientation matters as much as affinity. The antibody is thiolated through the carbohydrates in its Fc region — periodate oxidation to expose aldehydes, then a hydrazide-PEG-thiol linker — so that when it binds the gold surface its antigen-binding sites face outward rather than into the particle. The work is in dissociated mouse hippocampal culture, where selectivity can be verified against co-staining before it is asked to move a network in either direction."
    ],
    figure: { src: "", caption: "" },
    tags: ["Antibody conjugation", "Cell-type targeting", "ErbB4 and Thy-1", "Hippocampal culture", "In progress"]
  },
  {
    title: "Engrams without genetic tagging",
    lede: "Every route to an engram begins by putting a gene into it.",
    body: [
      "An engram is the physical trace of a particular episode: the set of neurons changed by learning, organized into an ensemble. The evidence that these ensembles are the memory is causal rather than correlative — reactivating one is sufficient to produce recall, and suppressing it impairs retrieval. That evidence was built almost entirely with a single method, tagging-and-manipulation, in which an optogenetic actuator under an immediate-early gene promoter is expressed in whatever cells were strongly active during learning. It is a powerful tool and it is inseparable from genetic delivery.",
      "A second paradigm changes what is possible. Rather than identifying engram cells after the fact, allocate-and-manipulate selects them in advance, exploiting the finding that excitability at the time of learning governs which neurons are recruited: raise a subset's excitability before encoding and the engram preferentially forms there. The consequence that interests me is that excitability is a physical variable, not a genetic one — anything that can raise it can bias allocation, including photothermal stimulation of gold nanorods.",
      "That is the direction I am pursuing: biasing which hippocampal neurons join a fear engram, then modulating that same population afterward, with no transgene at either step. Early results in behaving mice are encouraging; a full account is in preparation."
    ],
    figure: { src: "", caption: "" },
    tags: ["Memory engrams", "Engram allocation", "Contextual fear conditioning", "Hippocampus", "In progress"]
  },
  {
    title: "Can a concept be placed in a network that never learned it?",
    lede: "Engram control requires knowing which neurons to touch.",
    body: [
      "Optogenetic reactivation of a hippocampal ensemble is sufficient to drive recall, and enforcing engram-level connectivity can produce a memory for something that never happened. Both depend on tagging: the neurons must be labeled during learning or otherwise be genetically accessible, which confines the method to representations the animal already has. Allocation is also not arbitrary — which neurons join an ensemble follows from excitability and existing connectivity — so driving a randomly chosen set does not create a functional representation, only activity.",
      "GIVER is my attempt to sidestep the identification problem by not identifying anyone. If the activity of N neurons is treated as a point in an N-dimensional state space, a concept is not a list of cells but a region: the distribution of population states that a given input reliably evokes. Related concepts occupy nearer regions than unrelated ones, which means a concept can be described entirely by its distances to other concepts rather than by its contents.",
      "That description is enough to locate it. Multilateration — the geometry behind positioning systems — recovers an unknown point from distance ratios to known references. I test the idea with two spiking networks trained on MNIST through spike-timing-dependent plasticity: a Giver that has seen every digit, and a Receiver trained identically but with one class withheld. The question is whether the missing representation can be reconstructed in the Receiver from its relational geometry in the Giver, without ever presenting an example of it."
    ],
    figure: { src: "", caption: "" },
    tags: ["Spiking neural networks", "Neural state space", "Multilateration", "Engram theory", "In progress"]
  }
];
