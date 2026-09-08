import type { LucideIcon } from 'lucide-react'

export type CourseSlug =
  | 'iit-jee'
  | 'neet'
  | 'class-10-boards'
  | 'class-12-boards'
  | 'foundation-6-10'

export type Course = {
  slug: CourseSlug
  title: string
  subtitle: string
  badge: string
  /** Short description used on listing cards. */
  summary: string
  /** Long description used on the detail hero. */
  heroDescription: string

  /** Common batch options users ask for on ads/landing pages. */
  batchOptions: {
    name: string
    duration: string
    idealFor: string
    includes: string[]
  }[]

  /** Simple, ad-friendly admission steps. */
  admissionSteps: string[]

  /** FAQs for landing-page style conversion. */
  faqs: { q: string; a: string }[]

  /** Highlights for an ad-style section. */
  highlights: { title: string; desc: string }[]

  /** Who this program is for. */
  forStudents: string[]

  /** What you get (deliverables). */
  deliverables: { title: string; desc: string }[]

  /** Curriculum / structure bullets. */
  structure: string[]

  /** Extra marketing bullets (used in a "Why Lakshya" section). */
  whyLakshya: string[]

  /** SEO meta description */
  metaDescription: string

  /** Optional icon for UI (set in page where icons are imported). */
  icon?: LucideIcon
}

export const courses: Course[] = [
  {
    slug: 'iit-jee',
    title: 'IIT JEE',
    subtitle: 'JEE Main + Advanced Coaching',
    badge: 'Engineering',
    summary:
      'Concept clarity + advanced problem solving with DPPs, PYQs, and full-length mock tests.',
    heroDescription:
      'A result-oriented program built for JEE Main and JEE Advanced — with strong fundamentals, smart practice, and test-driven improvement.',
    batchOptions: [
      {
        name: 'Class 11 Long-Term',
        duration: '12 months',
        idealFor: 'Students starting JEE prep in Class 11',
        includes: ['PCM concept + DPP', 'Chapter tests', 'Mentorship & doubt support'],
      },
      {
        name: 'Class 12 Long-Term',
        duration: '10–12 months',
        idealFor: 'Class 12 students balancing school + JEE',
        includes: ['PCM coverage + revision plan', 'Mock tests', 'PYQ practice'],
      },
      {
        name: 'Dropper Batch',
        duration: '8–12 months',
        idealFor: 'Repeater students targeting a big rank jump',
        includes: ['Fast-track concept revision', 'High-level practice', 'Test series + analysis'],
      },
      {
        name: 'Crash Course',
        duration: '45–90 days',
        idealFor: 'Last-mile revision before exams',
        includes: ['High-weightage topics', 'PYQ sprint', 'Mock tests'],
      },
    ],
    admissionSteps: [
      'Call / visit centre for counselling and batch recommendation',
      'Confirm your class/target (JEE Main/Advanced) and preferred schedule',
      'Complete admission form and fee payment',
      'Get study plan + start classes with test schedule',
    ],
    faqs: [
      {
        q: 'Do you provide study material and DPP?',
        a: 'Yes. Students receive topic-wise practice sheets/DPP and revision support as per the batch plan.',
      },
      {
        q: 'Is there a test series included?',
        a: 'Regular unit tests and mock tests are conducted. Detailed solutions and performance guidance are provided.',
      },
      {
        q: 'Can a student join mid-session?',
        a: 'In many cases yes, depending on the batch level. Counselling will recommend the best-fit batch to avoid backlog pressure.',
      },
    ],
    highlights: [
      {
        title: 'JEE pattern-focused teaching',
        desc: 'Daily problem practice that matches the level and style of JEE Main & Advanced.',
      },
      {
        title: 'DPP + PYQ practice',
        desc: 'Topic-wise DPPs and year-wise PYQs to build speed, accuracy, and exam temperament.',
      },
      {
        title: 'Mock tests & analysis',
        desc: 'Regular tests with detailed solutions, rank insights, and improvement action plan.',
      },
    ],
    forStudents: [
      'Class 11–12 students preparing for JEE Main/Advanced',
      'Droppers who want a structured, disciplined repeat plan',
      'Students who need strong PCM fundamentals + high-level practice',
    ],
    deliverables: [
      {
        title: 'Structured PCM coverage',
        desc: 'Physics, Chemistry, and Mathematics from basics to advanced level with proper sequencing.',
      },
      {
        title: 'Daily Practice Problems (DPP)',
        desc: 'Chapter-wise practice sheets designed to build problem-solving stamina.',
      },
      {
        title: 'Doubt support',
        desc: 'Dedicated doubt clearing so no backlog piles up during the session.',
      },
      {
        title: 'Test series + reporting',
        desc: 'Weekly/fortnightly tests and performance reports to track progress consistently.',
      },
    ],
    structure: [
      'Foundation strengthening → concept building → application → advanced practice',
      'Topic-wise worksheets + mixed practice sets for revision',
      'Unit tests + cumulative mocks (Main pattern + Advanced pattern)',
      'Last-mile revision: formula booklets, error-log practice, and PYQ sprint',
    ],
    whyLakshya: [
      'Small-batch attention with a disciplined classroom culture',
      'Faculty-guided study planning with weekly targets',
      'Exam temperament building through timed tests',
      'Focus on accuracy first, then speed — the JEE way',
    ],
    metaDescription:
      'Lakshya Classes IIT JEE coaching: JEE Main + Advanced preparation with DPPs, PYQs, mock tests, and mentorship in Ara, Patna, and Ranchi.',
  },
  {
    slug: 'neet',
    title: 'NEET',
    subtitle: 'NEET UG Coaching',
    badge: 'Medical',
    summary:
      'NCERT-first Biology, strong Physics/Chemistry fundamentals, and high-frequency NEET practice tests.',
    heroDescription:
      'A NEET-focused program with NCERT-aligned learning, extensive practice, and regular testing — built for consistent score improvement.',
    batchOptions: [
      {
        name: 'Class 11 Long-Term',
        duration: '12 months',
        idealFor: 'Students starting NEET prep in Class 11',
        includes: ['PCB/PCMB concept + NCERT focus', 'Chapter tests', 'Doubt support'],
      },
      {
        name: 'Class 12 Long-Term',
        duration: '10–12 months',
        idealFor: 'Class 12 students balancing school + NEET',
        includes: ['NCERT revision + practice', 'Mock tests', 'Error-log improvement'],
      },
      {
        name: 'Dropper Batch',
        duration: '8–12 months',
        idealFor: 'Repeaters targeting a big score jump',
        includes: ['Fast-track revision', 'High-yield practice', 'Full syllabus mocks'],
      },
      {
        name: 'Crash Course',
        duration: '45–90 days',
        idealFor: 'Last phase revision before NEET',
        includes: ['NCERT line-by-line revision', 'Mock frequency increase', 'PYQ practice'],
      },
    ],
    admissionSteps: [
      'Call / visit centre for counselling and batch selection',
      'Confirm board/medium and target year (NEET UG)',
      'Complete admission and fee payment',
      'Start with timetable + test schedule + revision plan',
    ],
    faqs: [
      {
        q: 'Do you teach strictly as per NCERT?',
        a: 'Yes, especially for Biology and Chemistry where NCERT alignment is critical for NEET performance.',
      },
      {
        q: 'How do you improve NEET score?',
        a: 'Through consistent practice + timed mock tests + mistakes analysis and revision cycles.',
      },
      {
        q: 'Is Physics covered for numericals and speed?',
        a: 'Yes. Physics is taught with concept clarity plus numerical practice to build accuracy and time management.',
      },
    ],
    highlights: [
      {
        title: 'NCERT-first strategy',
        desc: 'Biology and Chemistry taught with strict NCERT alignment and exam-relevant depth.',
      },
      {
        title: 'High-yield question practice',
        desc: 'NEET pattern worksheets, assertion-reason, statement-based and diagram-based questions.',
      },
      {
        title: 'Revision + test discipline',
        desc: 'Regular tests with mistakes analysis, revision cycles, and score tracking.',
      },
    ],
    forStudents: [
      'Class 11–12 students targeting NEET UG',
      'Droppers looking for structured revision + practice plan',
      'Students who want stronger Physics accuracy and speed',
    ],
    deliverables: [
      {
        title: 'NCERT-driven notes',
        desc: 'Exam-ready notes with diagrams, key terms, and common NEET traps highlighted.',
      },
      {
        title: 'Practice sheets + PYQs',
        desc: 'Topic-wise questions and PYQ sets to master repetition patterns.',
      },
      {
        title: 'Doubt clearing & mentorship',
        desc: 'Regular doubt slots and mentoring to maintain consistency.',
      },
      {
        title: 'Full syllabus mocks',
        desc: 'Timed NEET mocks with analysis and score improvement roadmap.',
      },
    ],
    structure: [
      'NCERT concept coverage (Bio/Chem) + numerical focus (Physics)',
      'Chapter tests → unit tests → full syllabus mocks',
      'Revision cycles with short notes, diagrams, and formula drills',
      'Last 60-day sprint: mock frequency increase + error elimination',
    ],
    whyLakshya: [
      'NEET-style practice that builds confidence under time pressure',
      'Regular revision discipline to prevent forgetting curve',
      'Doubt support so daily targets don’t break',
      'Mentorship that keeps preparation realistic and consistent',
    ],
    metaDescription:
      'Lakshya Classes NEET coaching: NCERT-first learning, worksheets, PYQs, mock tests and mentoring in Ara, Patna, and Ranchi.',
  },
  {
    slug: 'class-10-boards',
    title: 'Xth Boards',
    subtitle: 'Class 10 Board Exam Coaching',
    badge: 'Boards',
    summary:
      'Score-boosting preparation with concept clarity, writing practice, and chapter-wise tests.',
    heroDescription:
      'Board exams reward clarity, presentation, and practice. This program helps Class 10 students build strong concepts and write exam-ready answers confidently.',
    batchOptions: [
      {
        name: 'Regular Academic Batch',
        duration: '8–10 months',
        idealFor: 'Students who want steady preparation throughout the year',
        includes: ['Chapter-wise coverage', 'Weekly tests', 'Answer writing practice'],
      },
      {
        name: 'Pre-Board Booster',
        duration: '60–90 days',
        idealFor: 'Students preparing near pre-boards/boards',
        includes: ['Sample papers', 'Important questions', 'Checked answers + feedback'],
      },
    ],
    admissionSteps: [
      'Call / visit centre for counselling and subject requirement',
      'Choose regular batch or booster batch based on timeline',
      'Complete admission and get test schedule',
    ],
    faqs: [
      {
        q: 'Which boards do you cover?',
        a: 'We support CBSE/ICSE/State board patterns through concept teaching and writing practice.',
      },
      {
        q: 'Do you check answer sheets?',
        a: 'Yes, checked answers with feedback are provided to improve presentation and step marking.',
      },
    ],
    highlights: [
      {
        title: 'Concept + writing practice',
        desc: 'Learn the concept, then practise answer writing the way boards expect.',
      },
      {
        title: 'Sample papers & mocks',
        desc: 'Regular sample papers and pre-board style tests with checking and feedback.',
      },
      {
        title: 'Doubt support for backlog-free prep',
        desc: 'Weekly doubt slots so chapters are completed on time.',
      },
    ],
    forStudents: [
      'Class 10 students (CBSE/ICSE/State boards) aiming for high percentage',
      'Students who struggle with exam writing or chapter-wise retention',
      'Students targeting scholarships or entrance-focused streams after 10th',
    ],
    deliverables: [
      {
        title: 'Chapter-wise notes & worksheets',
        desc: 'Easy-to-revise notes and practice sets for each chapter.',
      },
      {
        title: 'Answer writing + checking',
        desc: 'Structured writing practice with corrections for presentation and step marking.',
      },
      {
        title: 'Regular tests & reports',
        desc: 'Chapter tests, monthly tests, and performance tracking to keep students accountable.',
      },
      {
        title: 'Parent updates (where required)',
        desc: 'Progress feedback so parents can support routines at home.',
      },
    ],
    structure: [
      'Concept building + daily practice homework',
      'Chapter tests after completion of every unit',
      'Pre-board pattern mock tests + revision timetable',
      'Final revision: important questions, formulas, and common mistakes',
    ],
    whyLakshya: [
      'Focus on fundamentals so Class 11 becomes easier',
      'Writing practice to convert learning into marks',
      'Consistent testing to reduce exam fear',
      'Mentor support to maintain routine and discipline',
    ],
    metaDescription:
      'Class 10 board coaching at Lakshya Classes with concept clarity, answer writing practice, sample papers, and regular tests.',
  },
  {
    slug: 'class-12-boards',
    title: 'XII Boards',
    subtitle: 'Class 12 Board Exam Coaching',
    badge: 'Boards',
    summary:
      'High-scoring board preparation with smart notes, derivations, numericals and sample papers.',
    heroDescription:
      'Class 12 marks matter — for admissions, scholarships, and confidence. This program supports board-focused learning with practice, tests, and presentation improvement.',
    batchOptions: [
      {
        name: 'Regular Board Batch',
        duration: '8–10 months',
        idealFor: 'Students preparing alongside school',
        includes: ['Important derivations & numericals', 'Chapter tests', 'Sample papers'],
      },
      {
        name: 'Pre-Board / Final Revision',
        duration: '60–90 days',
        idealFor: 'Students close to boards needing systematic revision',
        includes: ['Full syllabus papers', 'Evaluation + feedback', 'High-weightage revision'],
      },
    ],
    admissionSteps: [
      'Call / visit centre for counselling and stream confirmation',
      'Choose regular batch or final revision batch based on timeline',
      'Complete admission and start with paper-practice schedule',
    ],
    faqs: [
      {
        q: 'Can I prepare for boards + entrances together?',
        a: 'Yes. We help balance board-focused learning with concept strength that also supports entrances.',
      },
      {
        q: 'Do you provide sample papers and evaluation?',
        a: 'Yes. Students attempt papers in exam conditions and receive checked copies with improvement points.',
      },
    ],
    highlights: [
      {
        title: 'Board pattern coverage',
        desc: 'Important derivations, numericals, and writing formats taught with board marking schemes in mind.',
      },
      {
        title: 'Sample papers + evaluation',
        desc: 'Attempt papers in exam conditions, get checked copies, and improve systematically.',
      },
      {
        title: 'Strong base for entrances',
        desc: 'A board-strong student performs better in JEE/NEET/state entrances too.',
      },
    ],
    forStudents: [
      'Class 12 students (CBSE/ICSE/State boards) targeting 85%+',
      'Students preparing alongside competitive exams who need balance',
      'Students who want strong Physics/Chemistry/Math/Bio foundation',
    ],
    deliverables: [
      {
        title: 'Chapter notes + important questions',
        desc: 'Board-style notes and questions curated from trend and weightage.',
      },
      {
        title: 'Numericals & derivations practice',
        desc: 'Step-by-step practice to match step marking patterns.',
      },
      {
        title: 'Pre-board mocks',
        desc: 'Full syllabus papers with checking and improvement feedback.',
      },
      {
        title: 'Doubt support',
        desc: 'Quick resolution so preparation stays smooth even during school rush.',
      },
    ],
    structure: [
      'Concept building aligned with school schedule',
      'Chapter tests + periodic revision tests',
      'Answer writing, diagrams, and presentation drills',
      'Final sprint: sample papers + repeated revision of high-weightage topics',
    ],
    whyLakshya: [
      'Board marks improvement through practice + evaluation',
      'Smart planning for students juggling school + coaching',
      'Strong fundamentals that help in entrances',
      'Mentor-driven accountability till exams',
    ],
    metaDescription:
      'Class 12 board coaching at Lakshya Classes with derivations, numericals, sample papers, evaluation, and doubt support.',
  },
  {
    slug: 'foundation-6-10',
    title: 'Foundation (Class 6–10)',
    subtitle: 'Early Foundation + Olympiad Preparation',
    badge: 'Foundation',
    summary:
      'Build a strong base in Maths & Science early with conceptual learning, reasoning, and Olympiad practice.',
    heroDescription:
      'A strong foundation in Classes 6–10 makes Class 11–12 and competitive exams easier. This program builds curiosity, concepts, and problem-solving habits early.',
    batchOptions: [
      {
        name: 'Foundation Regular Batch',
        duration: '6–10 months',
        idealFor: 'Class 6–10 students seeking strong Maths/Science basics',
        includes: ['Concept classes', 'Worksheets', 'Monthly tests'],
      },
      {
        name: 'Olympiad/Aptitude Add-on',
        duration: '3–6 months',
        idealFor: 'Students interested in Olympiad-style problem solving',
        includes: ['Higher-order questions', 'Reasoning practice', 'Mock tests'],
      },
    ],
    admissionSteps: [
      'Call / visit centre for counselling based on class & level',
      'Choose regular or regular + Olympiad add-on',
      'Complete admission and start with practice schedule',
    ],
    faqs: [
      {
        q: 'Is this course only for toppers?',
        a: 'No. It’s designed to build basics strongly for every student and improve performance with practice.',
      },
      {
        q: 'Will it help in Class 11–12 later?',
        a: 'Yes. Early concept clarity and problem-solving habits make senior classes and competitive prep much easier.',
      },
    ],
    highlights: [
      {
        title: 'Concept-first learning',
        desc: 'Build strong basics in Maths and Science with clear explanations and practice.',
      },
      {
        title: 'Reasoning + problem solving',
        desc: 'Train students to think, not just memorise — a key advantage for future JEE/NEET.',
      },
      {
        title: 'Olympiad-ready practice',
        desc: 'Optional Olympiad-style questions to improve aptitude and confidence.',
      },
    ],
    forStudents: [
      'Class 6–10 students who want to strengthen Maths & Science',
      'Students who aim for Olympiads/scholarships and strong board performance',
      'Parents looking for disciplined study habits and better grades',
    ],
    deliverables: [
      {
        title: 'Concept classes + practice',
        desc: 'Interactive teaching with regular homework and revision exercises.',
      },
      {
        title: 'Worksheets & activity-based learning',
        desc: 'Practice sets that improve speed, accuracy, and understanding.',
      },
      {
        title: 'Monthly tests',
        desc: 'Consistent assessments to build discipline and reduce exam anxiety.',
      },
      {
        title: 'Mentoring & study routine',
        desc: 'Guidance to build daily study habits and reduce distractions.',
      },
    ],
    structure: [
      'NCERT/board-aligned concept building in Maths & Science',
      'Practice sets + weekly revision schedule',
      'Monthly test + performance discussion',
      'Optional aptitude/Olympiad modules based on batch level',
    ],
    whyLakshya: [
      'Early confidence in Maths/Science = easier senior classes',
      'Problem-solving habit building (not rote learning)',
      'Regular tests create consistency and discipline',
      'Supportive mentoring for students and parents',
    ],
    metaDescription:
      'Foundation coaching for Class 6–10 at Lakshya Classes to build strong Maths & Science basics with regular practice and tests.',
  },
]

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug)
}
