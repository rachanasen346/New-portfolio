export const curriculumData = {
  python: {
    title: "Python Programming & Practical Problem Solving",
    subtitle: "Beginner to Intermediate Hands-on Curriculum",
    pedagogy: [
      {
        heading: "Concept First, Syntax Second",
        desc: "Har topic ko real-world examples se introduce karte hain taki students theoretical concepts ko visualize kar sakein."
      },
      {
        heading: "Daily Hands-on Lab Sessions",
        desc: "30-minute lecture ke baad compulsory 45-minute practical lab coding jisme students dry-run aur live debugging seekhte hain."
      },
      {
        heading: "Modular Assignments & Code Reviews",
        desc: "Har module ke baad real problem-solving tasks diye jaate hain aur personalized feedback provide kiya jaata hai."
      }
    ],
    syllabus: [
      { module: "Module 1", title: "Python Fundamentals & Logic Building", topics: ["Variables, Data Types, Type Casting", "Operators & Expressions", "Conditional Statements (if-else, match-case)"] },
      { module: "Module 2", title: "Loops & Iterations", topics: ["while & for loops", "Nested loops & Pattern programming", "break, continue, pass statements"] },
      { module: "Module 3", title: "Core Data Structures", topics: ["Lists & Tuples (Indexing, Slicing, Operations)", "Dictionaries & Sets", "List Comprehensions"] },
      { module: "Module 4", title: "Functions & Modular Code", topics: ["User-defined functions, *args & **kwargs", "Scope of variables & Lambda functions", "Built-in Modules (math, random, os)"] },
      { module: "Module 5", title: "File Handling & Database (SQLite/MySQL)", topics: ["Reading/Writing text & CSV files", "Connecting Python with SQL databases", "CRUD operations using Python"] }
    ],
    mcqs: [
      {
        topic: "Basics & Data Types",
        questions: [
          { q: "What is the output of type(5 / 2) in Python 3?", options: ["int", "float", "double", "None"], correct: 1 },
          { q: "Which of the following is an immutable data type?", options: ["List", "Dictionary", "Tuple", "Set"], correct: 2 }
        ]
      },
      {
        topic: "Loops & Conditions",
        questions: [
          { q: "What will range(1, 6, 2) generate?", options: ["[1, 2, 3, 4, 5]", "[1, 3, 5]", "[1, 3, 5, 7]", "[2, 4, 6]"], correct: 1 }
        ]
      }
    ],
    mockTests: [
      { id: "mock-1", title: "Python Fundamentals Mock Test", questionsCount: 25, duration: "30 Mins", level: "Beginner" },
      { id: "mock-2", title: "Data Structures & Functions Assessment", questionsCount: 30, duration: "45 Mins", level: "Intermediate" }
    ]
  }
};

export const pythonAssessmentQuestions = [
  {
    q: "What will be the output of print(type(5 / 2)) in Python 3?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
    correct: 1,
    category: "Data Types & Operators",
    explanation: "In Python 3, the single forward slash `/` operator performs float division, always returning a float even if numbers divide evenly."
  },
  {
    q: "Which of the following data types is mutable in Python?",
    options: ["Tuple", "String", "List", "Integer"],
    correct: 2,
    category: "Data Structures",
    explanation: "Lists are mutable, meaning their elements can be changed, appended, or removed in place without creating a new object."
  },
  {
    q: "What does the range(1, 10, 3) function produce?",
    options: ["[1, 4, 7]", "[1, 3, 5, 7, 9]", "[1, 4, 7, 10]", "[3, 6, 9]"],
    correct: 0,
    category: "Loops & Iterations",
    explanation: "range(start, stop, step) starts at 1 and increments by 3 up to (but not including) 10: 1, 1+3=4, 4+3=7."
  },
  {
    q: "What keyword is used to define a function in Python?",
    options: ["func", "function", "def", "lambda"],
    correct: 2,
    category: "Functions & Scope",
    explanation: "The `def` keyword introduces a function definition and must be followed by the function name and parenthesized parameters."
  }
];