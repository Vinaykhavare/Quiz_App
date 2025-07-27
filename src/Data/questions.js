const questions = [
  // ReactJS (5)
  {
    question: "What is React primarily used for?",
    options: ["Building mobile apps", "Styling HTML pages", "Building user interfaces", "Database management"],
    answer: "Building user interfaces"
  },
  {
    question: "Which hook is used for state management in functional components?",
    options: ["useEffect", "useContext", "useReducer", "useState"],
    answer: "useState"
  },
  {
    question: "What is JSX?",
    options: ["A CSS framework", "A syntax extension for JavaScript", "A state management library", "A React hook"],
    answer: "A syntax extension for JavaScript"
  },
  {
    question: "Which method is used to navigate between routes in React Router v6?",
    options: ["history.push", "router.push", "useNavigate()", "navigateTo()"],
    answer: "useNavigate()"
  },
  {
    question: "What is the virtual DOM in React?",
    options: ["A browser API", "A duplicate of the actual DOM", "A JavaScript representation of the real DOM", "An extension of the HTML DOM"],
    answer: "A JavaScript representation of the real DOM"
  },

  // HTML (5)
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "HighText Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: "<a>"
  },
  {
    question: "What tag is used to insert an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>"
  },
  {
    question: "Which attribute is used to provide alternate text for an image?",
    options: ["title", "alt", "src", "href"],
    answer: "alt"
  },
  {
    question: "What tag is used for creating a dropdown list?",
    options: ["<select>", "<input type='dropdown'>", "<dropdown>", "<optionbox>"],
    answer: "<select>"
  },

  // CSS (5)
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Syntax", "Colorful Style Script", "Computer Styled Sections"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["text-color", "font-color", "color", "textStyle"],
    answer: "color"
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color"
  },
  {
    question: "Which selector targets all paragraph elements?",
    options: ["p", ".p", "#p", "*p"],
    answer: "p"
  },
  {
    question: "How do you select an element with id 'main'?",
    options: ["#main", ".main", "main", "*main"],
    answer: "#main"
  },

  // JavaScript (5)
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "##", "--"],
    answer: "//"
  },
  {
    question: "What is the correct syntax to create a function?",
    options: ["function myFunc()", "create function myFunc()", "func myFunc()", "def myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "Which keyword declares a variable?",
    options: ["var", "int", "dim", "declare"],
    answer: "var"
  },
  {
    question: "How do you write 'Hello' in an alert box?",
    options: ["alertBox('Hello')", "alert('Hello')", "msg('Hello')", "message('Hello')"],
    answer: "alert('Hello')"
  },
  {
    question: "What type is returned by typeof null?",
    options: ["object", "null", "undefined", "number"],
    answer: "object"
  },

  // Bootstrap (5)
  {
    question: "What is Bootstrap mainly used for?",
    options: ["Data storage", "Responsive design", "Server-side scripting", "API creation"],
    answer: "Responsive design"
  },
  {
    question: "Which class makes an element responsive in Bootstrap?",
    options: [".responsive", ".img-responsive", ".img-fluid", ".fluid"],
    answer: ".img-fluid"
  },
  {
    question: "What is the default grid system in Bootstrap?",
    options: ["8 columns", "10 columns", "12 columns", "16 columns"],
    answer: "12 columns"
  },
  {
    question: "Which class centers text in Bootstrap?",
    options: [".text-left", ".center", ".text-center", ".align-text"],
    answer: ".text-center"
  },
  {
    question: "Which Bootstrap class makes a button blue by default?",
    options: [".btn-blue", ".btn-primary", ".btn-info", ".btn-success"],
    answer: ".btn-primary"
  },

  // jQuery (5)
  {
    question: "What does jQuery primarily simplify?",
    options: ["HTML writing", "CSS usage", "JavaScript DOM manipulation", "PHP scripting"],
    answer: "JavaScript DOM manipulation"
  },
  {
    question: "What symbol is used for jQuery?",
    options: ["?", "$", "@", "#"],
    answer: "$"
  },
  {
    question: "Which method hides an element in jQuery?",
    options: ["display('none')", "hide()", "visible(false)", "invisible()"],
    answer: "hide()"
  },
  {
    question: "How do you run jQuery code when the page is ready?",
    options: ["$(document).onReady()", "$(window).load()", "$(document).ready()", "$(page).ready()"],
    answer: "$(document).ready()"
  },
  {
    question: "Which function is used to change HTML content?",
    options: ["setHTML()", "html()", "changeHTML()", "updateHTML()"],
    answer: "html()"
  }
];

export default questions;
