import { BookOpen, Music, Calculator, Atom, Globe, Languages } from "lucide-react"
import { JSX } from "react"

export const subjects = [
  {
    id: "math-hl",
    name: "Mathematics AA HL",
    icon: <Calculator className="h-8 w-8 text-purple-400" />,
    color: "from-blue-600 to-blue-400",
    units: [
      {
        id: "calculus",
        name: "Calculus",
        resources: [
          { id: "limits", type: "notes", title: "Limits and Continuity", content: `
            <h1>Limits and Continuity</h1>
            <p>Limits describe the behavior of a function as the input approaches a certain value. Continuity means a function has no breaks, jumps, or holes.</p>
            <h2>Key Concepts</h2>
            <ul>
              <li><strong>Limit:</strong> <code>lim<sub>x→a</sub> f(x)</code> is the value f(x) approaches as x approaches a.</li>
              <li><strong>Continuity:</strong> A function f(x) is continuous at x=a if <code>lim<sub>x→a</sub> f(x) = f(a)</code>.</li>
            </ul>
            <h2>Examples</h2>
            <pre>
lim<sub>x→2</sub> (3x + 1) = 7
            </pre>
          ` },
          { id: "derivatives", type: "notes", title: "Derivatives", content: `
            <h1>Derivatives</h1>
            <p>The derivative measures the rate at which a function changes. It is the slope of the tangent line at a point.</p>
            <h2>Definition</h2>
            <pre>
f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
            </pre>
            <h2>Rules</h2>
            <ul>
              <li>Power Rule: <code>d/dx[x^n] = n x^{n-1}</code></li>
              <li>Product Rule: <code>(fg)' = f'g + fg'</code></li>
              <li>Quotient Rule: <code>(f/g)' = (f'g - fg')/g^2</code></li>
            </ul>
          ` },
          { id: "integrals", type: "notes", title: "Integrals", content: `
            <h1>Integrals</h1>
            <p>Integrals represent the accumulation of quantities and the area under a curve.</p>
            <h2>Indefinite Integral</h2>
            <pre>
∫f(x) dx = F(x) + C
            </pre>
            <h2>Definite Integral</h2>
            <pre>
∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
            </pre>
            <h2>Fundamental Theorem of Calculus</h2>
            <p>Connects differentiation and integration.</p>
          ` },
          { id: "applications", type: "notes", title: "Applications of Calculus", content: `
            <h1>Applications of Calculus</h1>
            <ul>
              <li><strong>Optimization:</strong> Finding maxima and minima of functions.</li>
              <li><strong>Related Rates:</strong> Calculating rates at which quantities change.</li>
              <li><strong>Area and Volume:</strong> Using integrals to find areas and volumes.</li>
            </ul>
            <h2>Example</h2>
            <p>Find the maximum area of a rectangle with perimeter 20.</p>
          ` },
        ],
      },
      {
        id: "algebra",
        name: "Algebra",
        resources: [
          { id: "polynomials", type: "notes", title: "Polynomials", content: `
            <h1>Polynomials</h1>
            <p>Polynomials are expressions of the form <code>a_nx^n + ... + a_1x + a_0</code>.</p>
            <h2>Key Concepts</h2>
            <ul>
              <li>Degree: Highest power of x.</li>
              <li>Roots: Values where the polynomial equals zero.</li>
              <li>Factoring: Expressing as a product of lower-degree polynomials.</li>
            </ul>
          ` },
          { id: "logarithms", type: "notes", title: "Logarithms and Exponentials", content: `
            <h1>Logarithms and Exponentials</h1>
            <p>Exponentials have the form <code>a^x</code>. Logarithms are the inverse: <code>log_a(x)</code>.</p>
            <h2>Properties</h2>
            <ul>
              <li><code>log_a(xy) = log_a(x) + log_a(y)</code></li>
              <li><code>log_a(x^k) = k log_a(x)</code></li>
              <li><code>a^{log_a(x)} = x</code></li>
            </ul>
          ` },
          { id: "sequences", type: "notes", title: "Sequences and Series", content: `
            <h1>Sequences and Series</h1>
            <p>A sequence is an ordered list of numbers. A series is the sum of a sequence.</p>
            <h2>Arithmetic Sequence</h2>
            <pre>
a_n = a_1 + (n-1)d
            </pre>
            <h2>Geometric Sequence</h2>
            <pre>
a_n = a_1 r^{n-1}
            </pre>
            <h2>Sum Formulas</h2>
            <ul>
              <li>Arithmetic: <code>S_n = n/2 (a_1 + a_n)</code></li>
              <li>Geometric: <code>S_n = a_1 (1 - r^n)/(1 - r)</code></li>
            </ul>
          ` },
        ],
      },
      {
        id: "statistics",
        name: "Statistics & Probability",
        resources: [
          { id: "descriptive", type: "notes", title: "Descriptive Statistics", content: `
            <h1>Descriptive Statistics</h1>
            <ul>
              <li><strong>Mean:</strong> Average value.</li>
              <li><strong>Median:</strong> Middle value.</li>
              <li><strong>Mode:</strong> Most frequent value.</li>
              <li><strong>Standard Deviation:</strong> Measure of spread.</li>
            </ul>
            <h2>Example</h2>
            <p>For data 2, 4, 4, 6, 8: mean = 4.8, median = 4, mode = 4.</p>
          ` },
          { id: "probability", type: "notes", title: "Probability", content: `
            <h1>Probability</h1>
            <p>Probability measures the likelihood of an event.</p>
            <h2>Key Rules</h2>
            <ul>
              <li><strong>Addition Rule:</strong> P(A or B) = P(A) + P(B) - P(A and B)</li>
              <li><strong>Multiplication Rule:</strong> P(A and B) = P(A)P(B|A)</li>
            </ul>
            <h2>Example</h2>
            <p>Probability of rolling a 4 on a die: 1/6.</p>
          ` },
          { id: "distributions", type: "notes", title: "Probability Distributions", content: `
            <h1>Probability Distributions</h1>
            <p>Describes how probabilities are distributed over values.</p>
            <ul>
              <li><strong>Binomial:</strong> Discrete, fixed number of trials.</li>
              <li><strong>Normal:</strong> Continuous, bell-shaped curve.</li>
            </ul>
            <h2>Example</h2>
            <p>Normal distribution: mean μ, standard deviation σ.</p>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Paper 1", content: "" },
      { id: "paper2", type: "assessment", title: "Paper 2", content: "" },
    ],
  },
  {
    id: "physics-hl",
    name: "Physics HL",
    icon: <Atom className="h-8 w-8 text-purple-400" />,
    color: "from-green-600 to-green-400",
    units: [
      {
        id: "mechanics",
        name: "Mechanics",
        resources: [
          { id: "kinematics", type: "notes", title: "Kinematics", content: `
            <h1>Kinematics</h1>
            <p>Kinematics describes motion without considering its causes.</p>
            <ul>
              <li><strong>Displacement:</strong> Change in position.</li>
              <li><strong>Velocity:</strong> Rate of change of displacement.</li>
              <li><strong>Acceleration:</strong> Rate of change of velocity.</li>
            </ul>
            <h2>Equations</h2>
            <pre>
v = u + at
s = ut + 1/2 at^2
v^2 = u^2 + 2as
            </pre>
          ` },
          { id: "dynamics", type: "notes", title: "Dynamics", content: `
            <h1>Dynamics</h1>
            <p>Dynamics studies the forces and their effect on motion.</p>
            <ul>
              <li><strong>Newton's Laws:</strong></li>
              <li>1st: Inertia</li>
              <li>2nd: F = ma</li>
              <li>3rd: Action-Reaction</li>
            </ul>
            <h2>Free-Body Diagrams</h2>
            <p>Show all forces acting on an object.</p>
          ` },
          { id: "work-energy", type: "notes", title: "Work, Energy, and Power", content: `
            <h1>Work, Energy, and Power</h1>
            <ul>
              <li><strong>Work:</strong> W = Fd cosθ</li>
              <li><strong>Kinetic Energy:</strong> KE = 1/2 mv^2</li>
              <li><strong>Potential Energy:</strong> PE = mgh</li>
              <li><strong>Power:</strong> P = W/t</li>
            </ul>
            <h2>Conservation of Energy</h2>
            <p>Total energy remains constant in an isolated system.</p>
          ` },
        ],
      },
      {
        id: "waves",
        name: "Waves",
        resources: [
          { id: "oscillations", type: "notes", title: "Oscillations", content: `
            <h1>Oscillations</h1>
            <p>Oscillations are repetitive variations, typically in time, of some measure.</p>
            <ul>
              <li><strong>Period (T):</strong> Time for one cycle.</li>
              <li><strong>Frequency (f):</strong> Number of cycles per second.</li>
              <li><strong>Amplitude:</strong> Maximum displacement.</li>
            </ul>
            <h2>Simple Harmonic Motion</h2>
            <pre>
x(t) = A cos(ωt + φ)
            </pre>
          ` },
          { id: "wave-properties", type: "notes", title: "Wave Properties", content: `
            <h1>Wave Properties</h1>
            <ul>
              <li><strong>Wavelength (λ):</strong> Distance between two crests.</li>
              <li><strong>Speed (v):</strong> v = fλ</li>
              <li><strong>Reflection, Refraction, Diffraction, Interference</strong></li>
            </ul>
            <h2>Types of Waves</h2>
            <ul>
              <li>Transverse</li>
              <li>Longitudinal</li>
            </ul>
          ` },
          { id: "sound", type: "notes", title: "Sound Waves", content: `
            <h1>Sound Waves</h1>
            <p>Sound is a longitudinal wave that travels through a medium.</p>
            <ul>
              <li><strong>Frequency:</strong> Determines pitch.</li>
              <li><strong>Amplitude:</strong> Determines loudness.</li>
              <li><strong>Speed:</strong> Depends on medium.</li>
            </ul>
            <h2>Doppler Effect</h2>
            <p>Change in frequency due to motion of source or observer.</p>
          ` },
        ],
      },
      {
        id: "electricity",
        name: "Electricity & Magnetism",
        resources: [
          { id: "electric-fields", type: "notes", title: "Electric Fields", content: `
            <h1>Electric Fields</h1>
            <p>An electric field is a region where a charge experiences a force.</p>
            <ul>
              <li><strong>Field Strength:</strong> E = F/q</li>
              <li><strong>Direction:</strong> Away from positive, toward negative.</li>
            </ul>
            <h2>Field Lines</h2>
            <p>Show direction and strength of field.</p>
          ` },
          { id: "circuits", type: "notes", title: "Electric Circuits", content: `
            <h1>Electric Circuits</h1>
            <ul>
              <li><strong>Current (I):</strong> Flow of charge, I = Q/t</li>
              <li><strong>Voltage (V):</strong> Energy per charge, V = W/Q</li>
              <li><strong>Resistance (R):</strong> Opposition to current, V = IR</li>
            </ul>
            <h2>Series and Parallel Circuits</h2>
            <p>Rules for combining resistors and calculating current/voltage.</p>
          ` },
          { id: "magnetism", type: "notes", title: "Magnetism", content: `
            <h1>Magnetism</h1>
            <p>Magnetic fields are produced by moving charges or magnets.</p>
            <ul>
              <li><strong>Field Lines:</strong> North to South outside magnet.</li>
              <li><strong>Force on a Charge:</strong> F = qvB sinθ</li>
            </ul>
            <h2>Electromagnetic Induction</h2>
            <p>Changing magnetic field induces an emf (Faraday's Law).</p>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Paper 1", content: "" },
      { id: "paper2", type: "assessment", title: "Paper 2", content: "" },
      { id: "paper3", type: "assessment", title: "Paper 3", content: "" },
    ],
  },
  {
    id: "music-hl",
    name: "Music HL",
    icon: <Music className="h-8 w-8 text-purple-400" />,
    color: "from-purple-600 to-purple-400",
    units: [
      {
        id: "theory",
        name: "Music Theory",
        resources: [
          { id: "notation", type: "notes", title: "Musical Notation", content: `
            <h1>Musical Notation</h1>
            <p>Musical notation is a system for visually representing aurally perceived music.</p>
            <ul>
              <li>Staff, clefs, notes, rests</li>
              <li>Time signatures, key signatures</li>
              <li>Dynamics and articulation</li>
            </ul>
            <h2>Example</h2>
            <p>Treble clef, 4/4 time, quarter notes, etc.</p>
          ` },
          { id: "harmony", type: "notes", title: "Harmony and Chord Progressions", content: `
            <h1>Harmony and Chord Progressions</h1>
            <p>Harmony is the combination of simultaneously sounded musical notes to produce chords.</p>
            <ul>
              <li>Major and minor chords</li>
              <li>Seventh chords</li>
              <li>Common progressions: I-IV-V-I</li>
            </ul>
            <h2>Example</h2>
            <p>C major: C - F - G - C</p>
          ` },
          { id: "analysis", type: "notes", title: "Musical Analysis", content: `
            <h1>Musical Analysis</h1>
            <p>Musical analysis examines the structure of music.</p>
            <ul>
              <li>Form: Binary, ternary, rondo, sonata</li>
              <li>Motifs and themes</li>
              <li>Texture: Monophonic, homophonic, polyphonic</li>
            </ul>
          ` },
        ],
      },
      {
        id: "composition",
        name: "Composition",
        resources: [
          { id: "techniques", type: "notes", title: "Composition Techniques", content: `
            <h1>Composition Techniques</h1>
            <ul>
              <li>Motivic development</li>
              <li>Counterpoint</li>
              <li>Orchestration</li>
              <li>Use of dynamics and articulation</li>
            </ul>
            <h2>Example</h2>
            <p>Developing a melody by variation and repetition.</p>
          ` },
          { id: "projects", type: "project", title: "Composition Projects", content: `
            <h1>Composition Projects</h1>
            <p>Apply composition techniques to create original works.</p>
            <ul>
              <li>Write a short piece for piano using ABA form.</li>
              <li>Compose a string quartet movement.</li>
            </ul>
          ` },
        ],
      },
      {
        id: "history",
        name: "Music History",
        resources: [
          { id: "baroque", type: "notes", title: "Baroque Period", content: `
            <h1>Baroque Period</h1>
            <p>1600-1750. Characterized by ornate detail and expressive style.</p>
            <ul>
              <li>Composers: Bach, Handel, Vivaldi</li>
              <li>Forms: Fugue, concerto grosso</li>
              <li>Features: Basso continuo, ornamentation</li>
            </ul>
          ` },
          { id: "classical", type: "notes", title: "Classical Period", content: `
            <h1>Classical Period</h1>
            <p>1750-1820. Emphasis on clarity, balance, and form.</p>
            <ul>
              <li>Composers: Mozart, Haydn, Beethoven</li>
              <li>Forms: Sonata, symphony, string quartet</li>
              <li>Features: Homophonic texture, clear phrases</li>
            </ul>
          ` },
          { id: "romantic", type: "notes", title: "Romantic Period", content: `
            <h1>Romantic Period</h1>
            <p>1820-1900. Focus on emotion, individualism, and expression.</p>
            <ul>
              <li>Composers: Chopin, Liszt, Tchaikovsky</li>
              <li>Forms: Art song, symphonic poem</li>
              <li>Features: Expanded orchestra, chromaticism</li>
            </ul>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Listening Paper", content: "" },
      { id: "paper2", type: "assessment", title: "Composition Portfolio", content: "" },
    ],
  },
  {
    id: "english-hl",
    name: "English HL",
    icon: <BookOpen className="h-8 w-8 text-purple-400" />,
    color: "from-red-600 to-red-400",
    units: [
      {
        id: "literature",
        name: "Literature",
        resources: [
          { id: "poetry", type: "notes", title: "Poetry Analysis", content: `
            <h1>Poetry Analysis</h1>
            <p>Analyzing poetry involves examining form, structure, language, and meaning.</p>
            <ul>
              <li>Imagery, metaphor, simile</li>
              <li>Rhyme and meter</li>
              <li>Themes and tone</li>
            </ul>
            <h2>Example</h2>
            <p>Identify use of metaphor in a poem.</p>
          ` },
          { id: "novels", type: "notes", title: "Novel Studies", content: `
            <h1>Novel Studies</h1>
            <p>Study of novels includes plot, character, setting, and themes.</p>
            <ul>
              <li>Characterization</li>
              <li>Point of view</li>
              <li>Symbolism</li>
            </ul>
            <h2>Example</h2>
            <p>Analyze the protagonist's development.</p>
          ` },
          { id: "drama", type: "notes", title: "Drama Analysis", content: `
            <h1>Drama Analysis</h1>
            <p>Drama analysis focuses on dialogue, stage directions, and dramatic structure.</p>
            <ul>
              <li>Acts and scenes</li>
              <li>Conflict and resolution</li>
              <li>Dramatic irony</li>
            </ul>
            <h2>Example</h2>
            <p>Discuss the use of irony in a play.</p>
          ` },
        ],
      },
      {
        id: "language",
        name: "Language",
        resources: [
          { id: "rhetoric", type: "notes", title: "Rhetorical Devices", content: `
            <h1>Rhetorical Devices</h1>
            <p>Rhetorical devices enhance writing and speech.</p>
            <ul>
              <li>Alliteration, assonance</li>
              <li>Hyperbole, understatement</li>
              <li>Parallelism, repetition</li>
            </ul>
            <h2>Example</h2>
            <p>Identify rhetorical devices in a speech.</p>
          ` },
          { id: "media", type: "notes", title: "Media Analysis", content: `
            <h1>Media Analysis</h1>
            <p>Media analysis examines how media conveys messages.</p>
            <ul>
              <li>Bias and perspective</li>
              <li>Visual and textual techniques</li>
              <li>Audience and purpose</li>
            </ul>
            <h2>Example</h2>
            <p>Analyze an advertisement for persuasive techniques.</p>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Paper 1", content: "" },
      { id: "paper2", type: "assessment", title: "Paper 2", content: "" },
    ],
  },
  {
    id: "global-politics-sl",
    name: "Global Politics SL",
    icon: <Globe className="h-8 w-8 text-purple-400" />,
    color: "from-yellow-600 to-yellow-400",
    units: [
      {
        id: "power",
        name: "Power, Sovereignty & International Relations",
        resources: [
          { id: "concepts", type: "notes", title: "Concepts of Power", content: `
            <h1>Concepts of Power</h1>
            <p>Power is the ability to influence others and control outcomes.</p>
            <ul>
              <li>Hard power: Military, economic force</li>
              <li>Soft power: Culture, diplomacy</li>
              <li>Legitimacy and authority</li>
            </ul>
            <h2>Example</h2>
            <p>Case study: US global influence.</p>
          ` },
          { id: "case-studies", type: "notes", title: "Case Studies in Power", content: `
            <h1>Case Studies in Power</h1>
            <p>Examining real-world examples of power dynamics.</p>
            <ul>
              <li>UN Security Council</li>
              <li>Rise of China</li>
              <li>Regional conflicts</li>
            </ul>
          ` },
        ],
      },
      {
        id: "human-rights",
        name: "Human Rights",
        resources: [
          { id: "frameworks", type: "notes", title: "Human Rights Frameworks", content: `
            <h1>Human Rights Frameworks</h1>
            <p>Human rights are universal rights inherent to all humans.</p>
            <ul>
              <li>Universal Declaration of Human Rights (UDHR)</li>
              <li>International treaties and conventions</li>
              <li>Enforcement mechanisms</li>
            </ul>
          ` },
          { id: "case-studies", type: "notes", title: "Human Rights Case Studies", content: `
            <h1>Human Rights Case Studies</h1>
            <p>Analysis of human rights issues in various countries.</p>
            <ul>
              <li>Refugee crises</li>
              <li>Gender equality</li>
              <li>Freedom of speech</li>
            </ul>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Paper 1", content: "" },
      { id: "paper2", type: "assessment", title: "Paper 2", content: "" },
    ],
  },
  {
    id: "thai-sl",
    name: "Thai SL",
    icon: <Languages className="h-8 w-8 text-purple-400" />,
    color: "from-pink-600 to-pink-400",
    units: [
      {
        id: "language",
        name: "Language",
        resources: [
          { id: "formal-writing", type: "notes", title: "Formal Writing", content: `
            <h1>Formal Writing</h1>
            <p>Formal writing in Thai follows specific conventions.</p>
            <ul>
              <li>Structure: Introduction, body, conclusion</li>
              <li>Polite language and honorifics</li>
              <li>Common formats: Letters, essays</li>
            </ul>
          ` },
          { id: "grammar", type: "notes", title: "Grammar Review", content: `
            <h1>Grammar Review</h1>
            <p>Key grammar points in Thai:</p>
            <ul>
              <li>Word order: Subject-Verb-Object</li>
              <li>Tense and aspect markers</li>
              <li>Particles for politeness and emphasis</li>
            </ul>
          ` },
        ],
      },
      {
        id: "literature",
        name: "Literature",
        resources: [
          { id: "poetry", type: "notes", title: "Thai Poetry", content: `
            <h1>Thai Poetry</h1>
            <p>Thai poetry has unique forms and structures.</p>
            <ul>
              <li>Khlong, Chan, Kap, Klon</li>
              <li>Use of rhyme and rhythm</li>
              <li>Themes: Nature, love, morality</li>
            </ul>
          ` },
          { id: "modern", type: "notes", title: "Modern Literature", content: `
            <h1>Modern Literature</h1>
            <p>Modern Thai literature explores contemporary themes.</p>
            <ul>
              <li>Social change</li>
              <li>Urbanization</li>
              <li>Identity and tradition</li>
            </ul>
          ` },
        ],
      },
    ],
    assessments: [
      { id: "ia", type: "assessment", title: "Internal Assessment", content: "" },
      { id: "paper1", type: "assessment", title: "Paper 1", content: "" },
      { id: "paper2", type: "assessment", title: "Paper 2", content: "" },
    ],
  },
]
