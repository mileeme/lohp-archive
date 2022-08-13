// function getRandomCategories(arr, num) {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, num);
// }

// topics: getRandomCategories(categories, 2);

const learningGoals = [
  { id:1, category: "start my first career" },
  { id: 2, category:  "advance my career" },
  { id: 3, category:  "switch to a new career" },
  { id: 4, category:  "get a degree" },
  { id: 5, category:  "just exploring" },
];

const topics = [
  {
    id: 1,
    category: "data science",
  },
  {
    id: 2,
    category: "business",
  },
  {
    id: 3,
    category: "computer science",
  },
  {
    id: 4,
    category: "information technology",
  },
  {
    id: 5,
    category: "health",
  },
  {
    id: 6,
    category: "physical science and engineering",
  },
  {
    id: 7,
    category: "social sciences",
  },
  {
    id: 8,
    category: "arts and humanities",
  },
  {
    id: 9,
    category: "math and logic",
  },
];

const courses = [
  { id: 1, 
    topic: "data science",
    product: "course",
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/23/22bc54f77f45a2b057f4ff518d272f/iStock-1169539468.jpg?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "IBM Data Science", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "IBM", 
    rating: "4.6 (65,553)", 
    rating: "4.6 (88,251)", 
    enrolled: "1.1m students", 
    categories: ["Beginner", "Professional Certificate", "3+ Months"], 
    status: [],
    skills: "Data Science, Deep Learning, Machine Learning, Big Data, Data Mining, Github, Python Programming, Jupyter notebooks, Rstudio, Methodology, Data Analysis, Pandas",
    type: "",
    url: "https://www.coursera.org/professional-certificates/ibm-data-science"
  },
  { id: 2,
    topic: "data science",
    product: "course", 
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ba/e14875b76f4e799e067d3551076e8c/1200x600_DA.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Google Data Analytics", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40",
    org: "Google", 
    rating: "4.8 (47,444)", 
    enrolled: "770k students", 
    categories: ["Beginner", "Professional Certificate", "3+ Months"], 
    status: ["Gain credit towards a degree"],
    skills: "Spreadsheet, Data Cleansing, Data Analysis, Data Visualization (DataViz), SQL, Questioning, Decision-Making, Problem Solving, Metadata, Data Collection, Data Ethics, Sample Size Determination",
    type: "plus",
    url: "https://www.coursera.org/professional-certificates/google-data-analytics"
  },
  { id: 3,
    topic: "data science",
    product: "course", 
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/8e18e0a4f111e59ae9c776a3dd0526/jhu-logo-thumb.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Data Science", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/74/7ae340ec6911e5b395490a2a565172/JHU-Logo-Square-Mini_180px.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "Johns Hopkins University", 
    rating: "4.8 (27,138)", 
    enrolled: "480k students", 
    categories: ["Beginner", "Specialization", "3+ Months"], 
    status: [],
    skills: "Github, Machine Learning, R Programming, Regression Analysis, Data Science, Rstudio, Data Analysis, Debugging, Data Manipulation, Regular Expression (REGEX), Data Cleansing, Cluster Analysis",
    type: "plus",
    url: "https://www.coursera.org/specializations/jhu-data-science"
  },
  { id: 4,
    topic: "data science",
    product: "course", 
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c8/8d6df01eb311e6b5f5f786b289d8ba/pythondatascience_specialization_final.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Applied Data Science with Python", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    org: "University of Michigan", 
    rating: "4.5 (31,449)", 
    enrolled: "800k students", 
    categories: ["Intermediate", "Specialization", "3+ Months"], 
    status: [],
    skills: "Text Mining, Python Programming, Pandas, Matplotlib, Numpy, Data Cleansing, Data Virtualization, Data Visualization (DataViz), Machine Learning (ML) Algorithms, Machine Learning, Scikit-Learn, Natural Language Toolkit (NLTK)",
    type: "plus",
    url: "https://www.coursera.org/specializations/data-science-python"
  },
  { id: 5,
    topic: "data science",
    product: "course", 
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/32/d719a2d0d946d59e1151bc10ec29f5/Specialization-Certificate-Emblem---IDS---600x600.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Introduction to Data Science", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "IBM", 
    rating: "4.6 (65,553)", 
    enrolled: "690k students", 
    categories: ["Beginner", "Specialization", "3+ Months"], 
    status: [],
    skills: "Data Science, Relational Database Management System (RDBMS), Cloud Databases, Python Programming, SQL, Deep Learning, Machine Learning, Big Data, Data Mining, Github, Jupyter notebooks, Rstudio",
    type: "credit",
    url: "https://www.coursera.org/specializations/introduction-data-science"
  },
  { id: 6,
    topic: "data science",
    product: "course", 
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/bd/0202c87e244d30bdecd889bd2719ae/DataScienceFundamentalsPythonSQL.png?auto=format%2Ccompress&dpr=2&w=150&h=150&q=25&fit=fill&bg=FFF", 
    title: "Data Science Fundamentals with Python and SQL", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "IBM", 
    rating: "4.6 (43,857)", 
    enrolled: "580k students", 
    categories: ["Beginner", "Specialization", "3+ Months"], 
    status: ["Gain credit towards a degree"],
    skills: "Data Science, Github, Python Programming, Jupyter notebooks, Rstudio, Data Analysis, Pandas, Numpy, Ipython, Probability And Statistics, Regression Analysis, Data Visualization (DataViz)",
    type: "credit",
    url: "https://www.coursera.org/specializations/data-science-fundamentals-python-sql"
  },
  {
    id: 7,
    topic: "business",
    title: "English for career development",
    org: "University of Pennsylvania",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 8,
    topic: "business",
    title: "Financial markets",
    org: "Yale University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 9,
    topic: "business",
    title: "Successful negotiation: essential strategy and skills",
    org: "University of Michigan",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 10,
    topic: "business",
    title: "Speak English professional: in person, online & on the phone",
    org: "Georgia Institute of Technology",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 11,
    topic: "business",
    title: "AI for everyone",
    org: "DeepLearning.AI",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 12,
    topic: "business",
    title: "Write professional email in English",
    org: "Georgia Institute of Technology",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 13,
    topic: "computer science",
    title:
      "Learning how to learn: powerful mental tools to help you master tough subjects",
    org: "Deep Teaching Solutions",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 14,
    topic: "computer science",
    title: "Programming for everybody (getting started with Python)",
    org: "University of Michigan",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 15,
    topic: "computer science",
    title: "Neural networks and deep learning",
    org: "DeepLearning.AI",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 16,
    topic: "computer science",
    title: "Algorithms, part 1",
    org: "Princeton University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 17,
    topic: "computer science",
    title: "Python data structures",
    org: "University of Michigan",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 18,
    topic: "computer science",
    title: "HTML, CSS, and Javascript for web developers",
    org: "Johns Hopkins University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 19,
    topic: "language learning",
    title: "English for career development",
    org: "University of Pennsylvania",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 20,
    topic: "language learning",
    title: "First step Korean",
    org: "Yonsei University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 21,
    topic: "language learning",
    title: "Chinese for beginners",
    org: "Peking University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 22,
    topic: "language learning",
    title: "Speak English professionally: in person, online & on the phone",
    org: "Georgia Institute of Technology",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 23,
    topic: "language learning",
    title: "Write professional emails in English",
    org: "Georgia Institute of Technology",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 24,
    topic: "language learning",
    title: "Grammar and punctuation",
    org: "University of California, Irvine",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 25,
    topic: "health",
    title: "COVID-19 contact tracing",
    org: "Johns Hopkins University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 26,
    topic: "health",
    title: "Introduction to psychology",
    org: "Yale University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 27,
    topic: "health",
    title: "Stanford introduction to food and health",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 28,
    topic: "health",
    title: "Social psychology",
    org: "Wesleyan University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 29,
    topic: "health",
    title: "Child nutrition and cooking",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 30,
    topic: "health",
    title: "Psychological first aid",
    org: "Johns Hopkins University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 31,
    topic: "personal development",
    title: "The science of well-being",
    org: "Yale University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 32,
    topic: "personal development",
    title:
      "Aprendiendo a aprender: poderosas herramientas mentales con las que podrás dominar temas difíciles (learning how to learn)",
    org: "Deep Teaching Solutions",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 33,
    topic: "personal development",
    title: "Writing in the sciences",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 34,
    topic: "personal development",
    title: "Introduction to mathematical thinking",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 35,
    topic: "personal development",
    title: "A life of happiness and fulfillment",
    org: "Indian School of Business",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 36,
    topic: "Personal development",
    title:
      "mindshift: breakthrough obstacles to learning and discover your hidden potential",
    org: "McMaster University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 37,
    topic: "physical science and engineering",
    title: "Understanding research methods",
    org: "University of London",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 38,
    topic: "physical science and engineering",
    title: "Robótica",
    org: "Universidad Nacional Autónoma de México",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 39,
    topic: "physical science and engineering",
    title: "How things work: an introduction to physics",
    org: "University of Virginia",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 40,
    topic: "physical science and engineering",
    title: "Introduction to engineering mechanics",
    org: "Georgia Institute of Technology",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 41,
    topic: "physical science and engineering",
    title: "Astronomy: exploring time and space",
    org: "University of Arizona",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 42,
    topic: "physical science and engineering",
    title: "Computer architecture",
    org: "Princeton University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 43,
    topic: "social sciences",
    title: "Marketing in a digital world",
    org: "University of Illinois at Urbana-Champaign",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 44,
    topic: "social sciences",
    title: "Game theory",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 45,
    topic: "ocial sciences",
    title: "Aprender",
    org: "Universidad Nacional Autónoma de México",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 46,
    topic: "social sciences",
    title: "Cómo hacer una tesis",
    org: "Universidad Nacional Autónoma de México",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 47,
    topic: "social sciences",
    title: "English for journalism",
    org: "University of Penncylvania",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 48,
    topic: "social sciences",
    title: "Moral foundations of politics",
    org: "Yale University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 49,
    topic: "arts and humanities",
    title: "Fundamentals of graphic design",
    org: "California Institute of the Arts",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 50,
    topic: "arts and humanities",
    title: "Introduction to philosophy",
    org: "The University of Edinburgh",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 51,
    topic: "arts and humanities",
    title: "Foundations of user experience (UX) design",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 52,
    topic: "arts and humanities",
    title: "Indigenous Canada",
    org: "University of Alberta",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 53,
    topic: "arts and humanities",
    title: "Modern art & ideas",
    org: "The Museum of Modern Art",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 54,
    topic: "arts and humanities",
    title: "Seeing through photographs",
    org: "The Museum of Modern Art",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 55,
    topic: "math and logic",
    title: "The data scientist's toolbox",
    org: "Johns Hopkins University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 56,
    topic: "math and logic",
    title: "SQL for data science",
    org: "University of California, Irvine",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 57,
    topic: "math and logic",
    title: "Game theory",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 58,
    topic: "math and logic",
    title: "Introduction to mathematical thinking",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 59,
    topic: "math and logic",
    title: "Cryptography I",
    org: "Stanford University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 60,
    topic: "math and logic",
    title: "Data science math skills",
    org: "Duke University",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 61,
    topic: "information technology",
    title: "Technical support fundamentals",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 62,
    topic: "information technology",
    title: "Google cloud fundamentals: core infrastructure",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 63,
    topic: "information technology",
    title: "crash course on Python",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 64,
    topic: "information technology",
    title: "the bits and bytes of computer networking",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 65,
    topic: "information technology",
    title: "ask questions to make data-driven decisions",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 66,
    topic: "information technology",
    title: "operating systems and you: becoming a power user",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "course",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  { id: 67, 
    topic: "data science",
    product: "course",
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/3a/6189bc40a148aca35fed825ccfb891/Specialization-Logo.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Practical Data Science", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b4/5cb90bb92f420b99bf323a0356f451/Icon.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "DeepLearningAI", 
    rating: "4.5 (269)", 
    enrolled: "17k students", 
    categories: ["Advanced", "Specialization", "1-3 Months"], 
    status: ["Gain credit towards a degree"],
    skills: "Natural Language Processing with BERT, ML Pipelines and ML Operations (MLOps), A/B Testing and Model Deployment, Data Labeling at Scale, Automated Machine Learning (AutoML), Statistical Data Bias Detection, Multi-class Classification with FastText and BlazingText, Data ingestion, Exploratory Data Analysis, ML Pipelines and MLOps, Model Training and Deployment with BERT, Model Debugging and Evaluation",
    type: "credit",
    url: "https://www.coursera.org/specializations/practical-data-science"
  }, 
  { id: 68, 
    topic: "data science",
    product: "course",
    course_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/9a/a0d7131af944ebbc335e2f60409e6e/specialization_-CFA-Institute-Data-Science-for-Investment.png?auto=format%2Ccompress&dpr=2&w=150&h=150&fit=fill&bg=FFF&q=25", 
    title: "Data Science for Investment Professionals", 
    org_img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/1e/b944bdb16247cb977a54eb8860f5e9/cfa-logo-360-min.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    org: "CFA Institute", 
    rating: "4.8 (9)", 
    enrolled: "1.7k students", 
    categories: ["Beginner", "Specialization", "3+ Months"], 
    status: ["Gain credit towards a degree"],
    skills: "Data Science, Ethics, Machine Learning, Python Programming, Communication, General Statistics, Statistical Hypothesis Testing, Logistic Regression Modeling, Linear Regression Modeling, Statistical Concepts, Investment",
    type: "credit",
    url: "https://www.coursera.org/specializations/data-science-investment-professionals"
  },
];

const certificates = [
  {
    id: 1,
    topic: "data science",
    title: "Google data analytics",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 2,
    topic: "data science",
    title: "IBM data science",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 3,
    topic: "data science",
    title: "IBM data analyst",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 4,
    topic: "data science",
    title: "IBM data engineering",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 5,
    topic: "data science",
    product: "course",
    title: "IBM applied AI",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 6,
    topic: "data science",
    title: "IBM data warehouse engineer",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 7,
    topic: "business",
    title: "Google project management",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 8,
    topic: "business",
    title: "IBM data analytics with excel and R",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 9,
    topic: "business",
    title: "Google digital marketing & e-commerce",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 10,
    topic: "business",
    title: "Meta social media marketing",
    org: "Meta",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 11,
    topic: "business",
    title: "Intuit bookkeeping",
    org: "Intuit",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 12,
    topic: "business",
    title: "Salesforce sales operations",
    org: "Salesforce",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 13,
    topic: "computer science",
    title: "Google IT support",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 14,
    topic: "computer science",
    title: "Google UX design",
    org: "Google",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 15,
    topic: "computer science",
    title: "IBM DevOps and software engineering",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 16,
    topic: "computer science",
    title: "IBM full stack software developer",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 17,
    topic: "computer science",
    title: "IBM applied AI",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 18,
    topic: "computer science",
    title: "IBM AI engineering",
    org: "IBM",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 19,
    topic: "information technology",
    title: "Preparing for Google cloud certification: Cloud DevOps engineer",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 20,
    topic: "information technology",
    title: "Preparing for Google Cloud certification: Cloud engineer",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 21,
    topic: "information technology",
    title: "Preparing for Google Cloud certification: Cloud security engineer",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 22,
    topic: "information technology",
    title: "Preparing for Google Cloud certification: Cloud network engineer",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 23,
    topic: "information technology",
    title:
      "Preparing for Google Cloud certification: machine learning engineer",
    org: "Google Cloud",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 24,
    topic: "language learning",
    title: "Arizona State University TESOL",
    org: "Arizona State University",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 25,
    topic: "personal development",
    title: "Arizona State University TESOL",
    org: "Arizona State University",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 26,
    topic: "personal development",
    title: "Intuit bookkeeping",
    org: "Intuit",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 27,
    topic: "personal development",
    title: "Salesforce sales development representative",
    org: "Salesforce",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 28,
    topic: "personal development",
    title: "Representante de desarrollo de ventas de Salesforce",
    org: "SV Academy",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 29,
    topic: "social sciences",
    title: "CertNexus certified ethical emerging technologist",
    org: "CertNexus",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 30,
    topic: "social sciences",
    title: "Meta test specialization",
    org: "Coursera",
    rating: "4.6 (65,553)", 
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
];

const degrees = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    org: "Google",
    rating: "4.6 (65,553)", 
    category: "degree",
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
    total_courses: "459 courses and programs"
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science",
    org: "Stanford",
    rating: "4.6 (65,553)", 
    category: "degree",
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/7cc3d09d3f11e698dfff46d35f2da1/Stanford_Coursera_Logo.png?auto=format%2Ccompress&dpr=2&w=120&h=120&q=40",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
    total_courses: "459 courses and programs"
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science",
    org: "University of Illinois",
    rating: "4.6 (65,553)", 
    category: "degree",
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
    total_courses: "459 courses and programs"
  },
  {
    id: 4,
    title: "Bachelor of Science in Computer Science",
    org: "Duke University",
    rating: "4.6 (65,553)", 
    category: "degree",
    product: "certificate",
    org_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/6d/3cb3e06c357d40ef60000fb3d12d72/dukesquare_blue.png?auto=format%2Ccompress&dpr=2&w=72&h=72&fit=crop",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/f0/399ec045ea11e5ba8e4bc295fed462/9990024683_955f8f043b_h.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
    total_courses: "459 courses and programs"
  },
];

const careerAcademy = [
  {
    id: 1,
    title: "Data and analytics academy",
    description: "Data literacy for everyone with advanced learning for data-first teams.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },  
  {
    id: 2,
    title: "Tech academy",
    description: "Upskilling and reskilling for your cloud, IT, engineering and security teams.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  }, 
  {
    id: 3,
    title: "Leadership academy",
    description: "Great for new and senior managers and all employees to learn leadership behaviors.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/87/fb9365e97c4d93a30017ee0bc76883/PM.jpeg?auto=format%2Ccompress&dpr=2&w=330&h=330&q=25&fit=fill",
    url: "#",
  },
  {
    id: 4,
    title: "Marketing academy",
    description: "Data Literacy for everyone and advanced learning for data-first teams.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/33/56fa78ec0542f19eaa977b8854c833/coursera2.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&q=25&fit=fill",
    url: "#",
  },
  {
    id: 5,
    title: "5 Data and analytics academy",
    description: "Data literacy for everyone with advanced learning for data-first teams.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
  {
    id: 6,
    title: "6 Data and analytics academy",
    description: "Data literacy for everyone with advanced learning for data-first teams.",
    product: "academy",
    course_img:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=2&w=330&h=330&fit=fill&q=25",
    url: "#",
  },
]

export { learningGoals, topics, courses, certificates, degrees, careerAcademy };
