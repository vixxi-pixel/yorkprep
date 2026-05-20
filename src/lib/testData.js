// Decision Making Questions
export const decisionMakingQuestions = [
  {
    id: 1,
    scenario: "A man reported dirty water coming out from the window of the neighbor's apartment.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 3,
    explanation: "Water system issues require Utility services. Public utilities handle supply of water, electricity, and gas."
  },
  {
    id: 2,
    scenario: "A girl's hand got stuck in a vending machine at the mall.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 1,
    explanation: "The Fire Department handles rescue situations involving trapped persons."
  },
  {
    id: 3,
    scenario: "A teacher reported that a boy collapsed during gym class and is unconscious.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 2,
    explanation: "EMS should be dispatched for any medical emergency involving unconsciousness or collapse."
  },
  {
    id: 4,
    scenario: "A spontaneous political demonstration is blocking streets downtown and tensions are rising.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 0,
    explanation: "Police handle crowd control, public safety, and maintaining order during demonstrations."
  },
  {
    id: 5,
    scenario: "A two-vehicle collision on Highway 7 with one driver reporting neck pain.",
    options: ["Police only", "Police + EMS", "Fire + EMS", "Police + Fire + EMS"],
    correct: 1,
    explanation: "A traffic collision requires Police for the scene, and EMS for the reported injury."
  },
  {
    id: 6,
    scenario: "A resident smells natural gas inside their apartment building hallway.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 1,
    explanation: "Gas leaks are hazardous material situations handled by the Fire Department."
  },
  {
    id: 7,
    scenario: "A woman reports her purse was just snatched by a man who ran south on Yonge Street.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 0,
    explanation: "Theft/robbery is a criminal matter requiring Police response."
  },
  {
    id: 8,
    scenario: "A construction worker fell from scaffolding and is lying motionless on the ground.",
    options: ["Police", "Fire", "EMS", "Fire + EMS"],
    correct: 3,
    explanation: "A fall from height with a motionless victim requires both Fire (rescue) and EMS (medical)."
  },
  {
    id: 9,
    scenario: "Multiple street lights on Leslie Street have been flickering and going out.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 3,
    explanation: "Electrical infrastructure issues are handled by Utility services."
  },
  {
    id: 10,
    scenario: "A homeowner reports smoke coming from the attic of their detached garage.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 1,
    explanation: "Smoke/fire situations always require Fire Department response."
  },
  {
    id: 11,
    scenario: "A parent reports their 8-year-old child has been missing for 3 hours after school.",
    options: ["Police", "Fire", "EMS", "Utility"],
    correct: 0,
    explanation: "Missing persons cases are handled by Police."
  },
  {
    id: 12,
    scenario: "A dog has bitten a jogger in a park and the wound is bleeding heavily.",
    options: ["Police", "EMS", "Police + EMS", "Fire"],
    correct: 2,
    explanation: "Police for the animal control issue, and EMS for the bleeding wound requiring medical attention."
  }
];

// Data Entry Exercises
export const dataEntryExercises = [
  {
    id: 1,
    label: "License Plate",
    value: "BKXT 924",
    fieldType: "text"
  },
  {
    id: 2,
    label: "Phone Number",
    value: "(905) 773-4221",
    fieldType: "tel"
  },
  {
    id: 3,
    label: "Address",
    value: "14350 Yonge St, Aurora, ON L4G 1H5",
    fieldType: "text"
  },
  {
    id: 4,
    label: "Name (Last, First)",
    value: "Henderson, Margaret T.",
    fieldType: "text"
  },
  {
    id: 5,
    label: "Date of Birth",
    value: "03/17/1988",
    fieldType: "text"
  },
  {
    id: 6,
    label: "VIN Number",
    value: "1HGBH41JXMN109186",
    fieldType: "text"
  },
  {
    id: 7,
    label: "Badge Number",
    value: "YRP-4827",
    fieldType: "text"
  },
  {
    id: 8,
    label: "Phone Number",
    value: "(289) 500-3817",
    fieldType: "tel"
  },
  {
    id: 9,
    label: "Address",
    value: "220 Mulock Dr, Newmarket, ON L3Y 9C1",
    fieldType: "text"
  },
  {
    id: 10,
    label: "License Plate",
    value: "CDNH 387",
    fieldType: "text"
  }
];

// Call Summarization Scenarios
export const callSummarizationQuestions = [
  {
    id: 1,
    transcript: "Caller reports a break-in at 47 Brownridge Drive, Thornhill. The caller, Mrs. Patricia Liu, age 62, returned home at approximately 3:15 PM to find the back door forced open. She noticed her laptop, a silver Dell, and a gold necklace are missing. She did not see anyone inside. Her phone number is (905) 882-1134. A neighbor mentioned seeing a white van parked in the driveway around 1:00 PM.",
    questions: [
      { q: "What is the location of the incident?", options: ["47 Brownridge Drive, Thornhill", "74 Brownridge Drive, Thornhill", "47 Brown Ridge Ave, Thornhill", "47 Brownridge Drive, Markham"], correct: 0 },
      { q: "What time did the caller arrive home?", options: ["1:00 PM", "3:15 PM", "2:45 PM", "3:50 PM"], correct: 1 },
      { q: "Which items were reported missing?", options: ["Laptop and phone", "TV and jewelry", "Laptop and gold necklace", "Silver necklace and laptop"], correct: 2 },
      { q: "What vehicle was seen at the property?", options: ["Blue sedan", "White van", "Black truck", "Red SUV"], correct: 1 }
    ]
  },
  {
    id: 2,
    transcript: "911 call received at 7:42 PM. Male caller, Robert Dominguez, age 34, reporting a domestic disturbance at 118 Eagle Street West, Unit 5, Newmarket. Caller states he can hear yelling and items breaking in the unit next door (Unit 6). Two adults and at least one child appear to be present. Caller's contact number is (289) 231-0098. No weapons seen. The disturbance has been ongoing for approximately 20 minutes.",
    questions: [
      { q: "What unit is the disturbance occurring in?", options: ["Unit 4", "Unit 5", "Unit 6", "Unit 8"], correct: 2 },
      { q: "How long has the disturbance been ongoing?", options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"], correct: 2 },
      { q: "What is the caller's name?", options: ["Roberto Dominguez", "Robert Dominguez", "Robert Domingo", "Richard Dominguez"], correct: 1 },
      { q: "Were any weapons reported?", options: ["Yes, a knife", "Yes, a firearm", "No weapons seen", "Unknown"], correct: 2 }
    ]
  },
  {
    id: 3,
    transcript: "Caller is a store manager at the Vaughan Mills Mall, Maria Santos, reporting a shoplifter who fled the store at 11:20 AM. The suspect is described as a male, approximately 5'10\", wearing a red hoodie and dark jeans, Caucasian, mid-20s. He stole electronics valued at approximately $850 from the Best Buy location. The suspect ran toward the north parking lot and may have gotten into a grey Honda Civic. Store phone: (905) 669-2200.",
    questions: [
      { q: "What was the approximate value of stolen items?", options: ["$500", "$750", "$850", "$950"], correct: 2 },
      { q: "What was the suspect wearing?", options: ["Blue hoodie and jeans", "Red hoodie and dark jeans", "Red jacket and khakis", "Black hoodie and dark jeans"], correct: 1 },
      { q: "Where did the suspect run toward?", options: ["South entrance", "East parking lot", "North parking lot", "West parking lot"], correct: 2 },
      { q: "What type of vehicle was the suspect seen entering?", options: ["Grey Honda Civic", "Grey Toyota Corolla", "White Honda Civic", "Grey Honda Accord"], correct: 0 }
    ]
  }
];

// Memory Recall Questions
export const memoryRecallSets = [
  {
    id: 1,
    studyInfo: {
      name: "David Anthony Morales",
      dob: "June 14, 1991",
      address: "305 River Glen Blvd, Vaughan",
      vehicle: "2019 Black Toyota Camry",
      plate: "BYNR 628",
      phone: "(905) 417-3350"
    },
    questions: [
      { q: "What is the subject's last name?", options: ["Morales", "Moralis", "Moreles", "Moralez"], correct: 0 },
      { q: "What year is the vehicle?", options: ["2017", "2018", "2019", "2020"], correct: 2 },
      { q: "What is the license plate number?", options: ["BYNR 628", "BYRN 628", "BYNR 682", "BNYR 628"], correct: 0 },
      { q: "What is the subject's date of birth?", options: ["June 14, 1991", "June 14, 1990", "July 14, 1991", "June 4, 1991"], correct: 0 }
    ]
  },
  {
    id: 2,
    studyInfo: {
      name: "Karen Michelle Petrova",
      dob: "November 3, 1985",
      address: "72 Clearmeadow Blvd, Newmarket",
      vehicle: "2022 White Honda CR-V",
      plate: "AXLM 451",
      phone: "(289) 803-6612"
    },
    questions: [
      { q: "What is the subject's phone number?", options: ["(289) 803-6612", "(289) 830-6612", "(289) 803-6621", "(289) 803-6162"], correct: 0 },
      { q: "What color is the vehicle?", options: ["Silver", "Grey", "White", "Black"], correct: 2 },
      { q: "What street does the subject live on?", options: ["Clearview Blvd", "Clearmeadow Blvd", "Clearfield Blvd", "Clearwood Blvd"], correct: 1 },
      { q: "What is the subject's middle name?", options: ["Marie", "Michele", "Michelle", "Michaela"], correct: 2 }
    ]
  }
];

// Prioritization Questions
export const prioritizationQuestions = [
  {
    id: 1,
    instructions: "Rank these calls from HIGHEST to LOWEST priority (1 = most urgent):",
    calls: [
      { id: "a", text: "Report of a cat stuck in a tree for 2 hours", priority: 4 },
      { id: "b", text: "Woman reporting chest pains and difficulty breathing", priority: 1 },
      { id: "c", text: "Noise complaint about loud music at 11 PM", priority: 3 },
      { id: "d", text: "Two-car collision with minor injuries on Highway 404", priority: 2 }
    ]
  },
  {
    id: 2,
    instructions: "Rank these calls from HIGHEST to LOWEST priority (1 = most urgent):",
    calls: [
      { id: "a", text: "Structure fire reported at an occupied apartment building", priority: 1 },
      { id: "b", text: "Shoplifting suspect fled the store 10 minutes ago", priority: 4 },
      { id: "c", text: "Elderly man found unconscious on a park bench", priority: 2 },
      { id: "d", text: "Vehicle blocking a fire hydrant on a residential street", priority: 3 }
    ]
  },
  {
    id: 3,
    instructions: "Rank these calls from HIGHEST to LOWEST priority (1 = most urgent):",
    calls: [
      { id: "a", text: "Person threatening others with a knife at a bus stop", priority: 1 },
      { id: "b", text: "Fender bender in a parking lot, no injuries", priority: 4 },
      { id: "c", text: "Child reported missing from school for 1 hour", priority: 2 },
      { id: "d", text: "Broken traffic light at a busy intersection", priority: 3 }
    ]
  }
];

// Character Comparison Questions
export const characterComparisonQuestions = [
  { id: 1, original: "KJ4N-8827-PQXL", options: ["KJ4N-8827-PQXL", "KJ4N-8872-PQXL", "KJ4N-8827-PQXI", "KJ4M-8827-PQXL"], correct: 0 },
  { id: 2, original: "MRXT9021-BCV3", options: ["MRXT9021-BVC3", "MRXT9021-BCV3", "MRXT9012-BCV3", "MRTX9021-BCV3"], correct: 1 },
  { id: 3, original: "5F7H-KLNP-2290", options: ["5F7H-KLNP-2290", "5F7H-KNLP-2290", "5F7H-KLNP-2209", "5F7H-KLMP-2290"], correct: 0 },
  { id: 4, original: "QW82-JLTG-49X6", options: ["QW82-JLTG-49X9", "QW28-JLTG-49X6", "QW82-JLTG-49X6", "QW82-JLTG-4X96"], correct: 2 },
  { id: 5, original: "AB12-MNOP-7845", options: ["AB12-MNOP-7854", "AB12-MNPO-7845", "AB21-MNOP-7845", "AB12-MNOP-7845"], correct: 3 },
  { id: 6, original: "9GHT-VWXZ-1034", options: ["9GHT-VWXZ-1034", "9GHT-VWZX-1034", "9GHT-VWXZ-1043", "9GTH-VWXZ-1034"], correct: 0 },
  { id: 7, original: "PLR4-88NV-CDWQ", options: ["PLR4-88NV-CDQW", "PLR4-88NV-CDWQ", "PRL4-88NV-CDWQ", "PLR4-88MV-CDWQ"], correct: 1 },
  { id: 8, original: "XZ06-TYBQ-3319", options: ["XZ06-TYBQ-3391", "XZ06-TYBQ-3319", "XZ60-TYBQ-3319", "XZ06-TYQB-3319"], correct: 1 }
];

// Reading Comprehension
export const readingComprehensionQuestions = [
  {
    id: 1,
    passage: "York Regional Police operates one of the largest police services in Ontario, serving over 1.2 million residents across nine municipalities. The Communications Centre handles approximately 500,000 calls annually, with trained dispatchers managing both emergency (911) and non-emergency lines. Dispatchers must assess the nature and severity of each call within seconds, determining the appropriate response while maintaining contact with the caller. During peak hours, dispatchers may handle multiple calls simultaneously, requiring exceptional multitasking abilities and composure under pressure.",
    question: "Approximately how many calls does the York Region Communications Centre handle per year?",
    options: ["250,000", "500,000", "750,000", "1,200,000"],
    correct: 1
  },
  {
    id: 2,
    passage: "When a 911 call is received, the dispatcher must first determine whether the situation is a police, fire, or medical emergency. If the call involves an immediate threat to life, it is classified as Priority 1 and units are dispatched immediately. Priority 2 calls involve serious but non-life-threatening situations, while Priority 3 calls are for less urgent matters that still require police response. Priority 4 calls are for routine matters that can be handled through scheduled appointments or online reporting.",
    question: "A call about a break-in that occurred last night while the homeowner was away would most likely be classified as:",
    options: ["Priority 1", "Priority 2", "Priority 3", "Priority 4"],
    correct: 2
  },
  {
    id: 3,
    passage: "The Ten-Code system is a set of codes used by law enforcement to communicate efficiently over radio channels. While many agencies have transitioned to plain language communication, some codes remain in common use. Code 10-4 means 'acknowledged' or 'message received.' Code 10-20 refers to a person's location. Code 10-33 signals an emergency at the station. Dispatchers must be proficient in both coded and plain language communication to ensure clear information exchange with officers in the field.",
    question: "What does Code 10-20 refer to?",
    options: ["Message received", "Emergency at station", "Person's location", "Request for backup"],
    correct: 2
  }
];

// Math Questions
export const mathQuestions = [
  {
    id: 1,
    question: "A patrol car travels at 80 km/h. How far will it travel in 45 minutes?",
    options: ["50 km", "55 km", "60 km", "65 km"],
    correct: 2,
    explanation: "80 km/h × 0.75 hours = 60 km"
  },
  {
    id: 2,
    question: "If a dispatcher handles an average of 42 calls per 6-hour shift, how many calls does that average per hour?",
    options: ["6", "7", "8", "9"],
    correct: 1,
    explanation: "42 calls ÷ 6 hours = 7 calls per hour"
  },
  {
    id: 3,
    question: "A suspect's vehicle was clocked at 135 km/h in an 80 km/h zone. How much over the speed limit was the vehicle traveling?",
    options: ["45 km/h", "50 km/h", "55 km/h", "65 km/h"],
    correct: 2,
    explanation: "135 - 80 = 55 km/h over the limit"
  },
  {
    id: 4,
    question: "An officer's shift starts at 18:00 and ends at 06:00. How many hours is the shift?",
    options: ["10 hours", "11 hours", "12 hours", "8 hours"],
    correct: 2,
    explanation: "From 18:00 to 06:00 = 12 hours"
  },
  {
    id: 5,
    question: "If 15% of 911 calls in a region are prank calls, and the center receives 1,200 calls per day, how many are estimated to be prank calls?",
    options: ["150", "165", "180", "200"],
    correct: 2,
    explanation: "1,200 × 0.15 = 180 prank calls"
  },
  {
    id: 6,
    question: "An ambulance must travel 24 km to reach the hospital. If it averages 60 km/h, how many minutes will the trip take?",
    options: ["20 minutes", "22 minutes", "24 minutes", "26 minutes"],
    correct: 2,
    explanation: "24 km ÷ 60 km/h = 0.4 hours = 24 minutes"
  }
];

// Map Reading Questions
export const mapReadingQuestions = [
  {
    id: 1,
    description: "A patrol unit is at the intersection of Main St and Davis Dr, facing East. They need to reach the hospital located 3 blocks East and 2 blocks North.",
    question: "What is the most direct route?",
    options: [
      "Go East 3 blocks, then turn Left and go 2 blocks North",
      "Go North 2 blocks, then turn Right and go 3 blocks East",
      "Go East 2 blocks, then North 3 blocks",
      "Go North 3 blocks, then East 2 blocks"
    ],
    correct: 0,
    explanation: "Going East 3 blocks then turning Left (North) for 2 blocks is the most direct route."
  },
  {
    id: 2,
    description: "A unit is traveling North on Yonge St. They receive a call to head to an address that is West of their current position.",
    question: "Which direction should they turn?",
    options: ["Turn right", "Turn left", "Make a U-turn", "Continue straight"],
    correct: 1,
    explanation: "When facing North, West is to your Left."
  },
  {
    id: 3,
    description: "An officer is at the corner of Bayview Ave and 16th Ave, facing South. They must reach the school which is 1 block West and 4 blocks South.",
    question: "What is the shortest route?",
    options: [
      "Turn right, go 1 block West, turn left, go 4 blocks South",
      "Go 4 blocks South, turn right, go 1 block West",
      "Turn left, go 1 block East, then South 4 blocks",
      "Go 2 blocks South, turn right 1 block, then 2 blocks South"
    ],
    correct: 0,
    explanation: "Facing South, right is West. Go 1 block West, turn left (South), go 4 blocks. This is optimal."
  },
  {
    id: 4,
    description: "Dispatch needs to send the closest unit to 100 Wellington St. Unit A is 5 km North, Unit B is 3 km East, Unit C is 7 km South, and Unit D is 4 km West.",
    question: "Which unit should be dispatched?",
    options: ["Unit A", "Unit B", "Unit C", "Unit D"],
    correct: 1,
    explanation: "Unit B is closest at 3 km away."
  }
];