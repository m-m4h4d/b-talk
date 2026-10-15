// Sample tutors used by the listing and profile pages until there is a backend.
const instructorData = [
  {
    name: "Eve",
    age: 35,
    gender: "Female",
    country: "Turkey",
    languages: ["Turkish", "English"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.5,
    expertise: ["Everyday English", "Business English"],
    price: 50,
    availableHours: ["09:00-12:00", "13:00-15:00"],
    availableDays: ["Monday", "Tuesday"],
    bio: "Eve is an experienced English teacher with a passion for helping students improve their language skills. She has a friendly and patient teaching style and is dedicated to making the learning process enjoyable and effective. In her free time, she enjoys reading, hiking, and trying new foods.",
    students: 3,
    courses: 8,
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "SQL",
      "MongoDB",
    ],
    experience: "Software Engineer, Company A, Jan 2020 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Lucas Smith",
        date: "Jan 1, 2023",
        rating: 5,
        comment:
          "Maria is a fantastic teacher. She explains complex concepts in a way that's easy to understand. Her coding examples are clear and well-documented. I highly recommend her for anyone looking to improve their programming skills.",
      },
      {
        name: "Emma Johnson",
        date: "Dec 20, 2022",
        rating: 5,
        comment:
          "Maria is an excellent instructor. She's knowledgeable about a wide range of topics and provides detailed explanations. She's also patient and supportive, which makes the learning process enjoyable. I've learned a lot from her and would definitely take more courses in the future.",
      },
    ],
  },
  {
    name: "John",
    age: 40,
    gender: "Male",
    country: "USA",
    languages: ["English"],
    isNative: true,
    isSuperTeacher: true,
    rating: 4.8,
    expertise: ["Business English", "IELTS"],
    price: 70,
    availableHours: ["10:00-12:00", "14:00-16:00"],
    availableDays: ["Wednesday", "Thursday"],
    bio: "John is a seasoned English teacher with over 15 years of experience. He specializes in Business English and IELTS preparation. John is dedicated to helping his students achieve their goals.",
    students: 20,
    courses: 15,
    skills: ["Public Speaking", "Business Communication", "TOEFL", "Grammar"],
    experience: "Senior English Teacher, Language School, Jan 2005 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Sophia Brown",
        date: "Feb 2, 2023",
        rating: 5,
        comment:
          "John is an outstanding teacher. His lessons are well-structured and very informative. Highly recommended!",
      },
      {
        name: "Michael Davis",
        date: "Jan 15, 2023",
        rating: 4,
        comment:
          "John helped me prepare for my IELTS exam and I scored higher than expected. Great teacher!",
      },
    ],
  },
  {
    name: "Maria",
    age: 29,
    gender: "Female",
    country: "UK",
    languages: ["English", "Spanish"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.3,
    expertise: ["Beginner", "English for Kids"],
    price: 40,
    availableHours: ["08:00-10:00", "12:00-14:00"],
    availableDays: ["Friday", "Saturday"],
    bio: "Maria is passionate about teaching English to young learners. She creates fun and engaging lessons that help kids learn effectively. Maria loves traveling and exploring new cultures.",
    students: 12,
    courses: 5,
    skills: ["Creative Teaching", "Storytelling", "Interactive Learning"],
    experience: "English Teacher, Elementary School, Sep 2015 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Emma Wilson",
        date: "Mar 10, 2023",
        rating: 5,
        comment:
          "Maria is amazing with kids. My daughter loves her classes and has improved a lot!",
      },
      {
        name: "Olivia Martinez",
        date: "Feb 22, 2023",
        rating: 4,
        comment:
          "Great teacher for kids. Maria makes learning fun and interactive.",
      },
    ],
  },
  {
    name: "David",
    age: 32,
    gender: "Male",
    country: "Australia",
    languages: ["English", "French"],
    isNative: true,
    isSuperTeacher: true,
    rating: 4.9,
    expertise: ["TOEFL", "Advanced English"],
    price: 60,
    availableHours: ["11:00-13:00", "16:00-18:00"],
    availableDays: ["Sunday", "Monday"],
    bio: "David has a wealth of experience teaching English to non-native speakers. He specializes in TOEFL preparation and advanced English. In his free time, he enjoys surfing and photography.",
    students: 25,
    courses: 10,
    skills: ["TOEFL Preparation", "Advanced Grammar", "Essay Writing"],
    experience: "English Instructor, University, Jan 2012 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "William Johnson",
        date: "Jan 30, 2023",
        rating: 5,
        comment:
          "David's TOEFL prep course was incredibly helpful. I scored very well thanks to his guidance.",
      },
      {
        name: "Isabella Lee",
        date: "Feb 18, 2023",
        rating: 5,
        comment:
          "David is a great instructor for advanced English. His lessons are very detailed and informative.",
      },
    ],
  },
  {
    name: "Anna",
    age: 28,
    gender: "Female",
    country: "Canada",
    languages: ["English", "French"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.6,
    expertise: ["Everyday English", "TOEFL"],
    price: 55,
    availableHours: ["10:00-12:00", "14:00-16:00"],
    availableDays: ["Tuesday", "Thursday"],
    bio: "Anna is an enthusiastic English teacher with a knack for making learning enjoyable. She has helped many students prepare for TOEFL and improve their everyday English skills.",
    students: 18,
    courses: 9,
    skills: [
      "Communication Skills",
      "TOEFL Preparation",
      "Interactive Learning",
    ],
    experience: "English Teacher, Private School, Jan 2016 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Liam Smith",
        date: "Jan 5, 2023",
        rating: 5,
        comment:
          "Anna's classes are very engaging. I improved my English skills significantly.",
      },
      {
        name: "Sophia Brown",
        date: "Feb 14, 2023",
        rating: 4,
        comment:
          "Great teacher for TOEFL preparation. Anna provided valuable tips and resources.",
      },
    ],
  },
  {
    name: "Mark",
    age: 36,
    gender: "Male",
    country: "Germany",
    languages: ["English", "German"],
    isNative: true,
    isSuperTeacher: true,
    rating: 4.7,
    expertise: ["Business English", "Advanced English"],
    price: 65,
    availableHours: ["09:00-11:00", "15:00-17:00"],
    availableDays: ["Wednesday", "Friday"],
    bio: "Mark has extensive experience teaching Business English and advanced English courses. He is known for his practical approach and effective teaching methods.",
    students: 30,
    courses: 12,
    skills: [
      "Business Communication",
      "Advanced Grammar",
      "Presentation Skills",
    ],
    experience: "Corporate Trainer, International Company, Jan 2010 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "James Miller",
        date: "Mar 2, 2023",
        rating: 5,
        comment:
          "Mark is an excellent teacher. His business English classes have been very beneficial for my career.",
      },
      {
        name: "Emily Wilson",
        date: "Feb 25, 2023",
        rating: 4,
        comment:
          "Mark's advanced English course helped me improve my grammar and writing skills.",
      },
    ],
  },
  {
    name: "Linda",
    age: 34,
    gender: "Female",
    country: "France",
    languages: ["English", "French"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.4,
    expertise: ["Beginner", "English for Kids"],
    price: 45,
    availableHours: ["08:00-10:00", "13:00-15:00"],
    availableDays: ["Monday", "Wednesday"],
    bio: "Linda enjoys teaching English to beginners and kids. She makes learning fun and interactive, helping students build a strong foundation in the language.",
    students: 15,
    courses: 6,
    skills: ["Interactive Learning", "Storytelling", "Grammar Basics"],
    experience: "English Teacher, Language Center, Jan 2017 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Oliver Brown",
        date: "Mar 5, 2023",
        rating: 5,
        comment:
          "Linda is great with kids. My son looks forward to her classes every week.",
      },
      {
        name: "Charlotte Davis",
        date: "Feb 20, 2023",
        rating: 4,
        comment:
          "Linda's beginner English course is perfect for new learners. Highly recommend!",
      },
    ],
  },
  {
    name: "Michael",
    age: 38,
    gender: "Male",
    country: "Italy",
    languages: ["English", "Italian"],
    isNative: true,
    isSuperTeacher: true,
    rating: 4.8,
    expertise: ["IELTS", "Advanced English"],
    price: 70,
    availableHours: ["11:00-13:00", "16:00-18:00"],
    availableDays: ["Tuesday", "Thursday"],
    bio: "Michael specializes in IELTS preparation and advanced English courses. He has a track record of helping students achieve high scores and improve their language proficiency.",
    students: 22,
    courses: 11,
    skills: ["IELTS Preparation", "Advanced Grammar", "Academic Writing"],
    experience: "English Instructor, University, Jan 2013 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Amelia White",
        date: "Jan 12, 2023",
        rating: 5,
        comment:
          "Michael's IELTS prep course was invaluable. I achieved a high band score thanks to his guidance.",
      },
      {
        name: "Henry Wilson",
        date: "Feb 28, 2023",
        rating: 5,
        comment:
          "Michael's advanced English classes have greatly improved my language skills.",
      },
    ],
  },
  {
    name: "Emily",
    age: 30,
    gender: "Female",
    country: "Spain",
    languages: ["English", "Spanish"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.5,
    expertise: ["Everyday English", "TOEFL"],
    price: 50,
    availableHours: ["09:00-11:00", "13:00-15:00"],
    availableDays: ["Monday", "Thursday"],
    bio: "Emily is dedicated to helping her students improve their everyday English and prepare for TOEFL. She uses practical examples and interactive methods to make learning effective.",
    students: 17,
    courses: 7,
    skills: ["TOEFL Preparation", "Conversational English", "Grammar Basics"],
    experience: "English Teacher, Private Institute, Jan 2018 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Jack Martin",
        date: "Mar 1, 2023",
        rating: 5,
        comment:
          "Emily is a great teacher. Her TOEFL prep course helped me score well on the exam.",
      },
      {
        name: "Grace Lee",
        date: "Feb 15, 2023",
        rating: 4,
        comment:
          "Emily's everyday English classes are very practical and useful.",
      },
    ],
  },
  {
    name: "James",
    age: 42,
    gender: "Male",
    country: "Netherlands",
    languages: ["English", "Dutch"],
    isNative: true,
    isSuperTeacher: true,
    rating: 4.7,
    expertise: ["Business English", "Advanced English"],
    price: 75,
    availableHours: ["10:00-12:00", "14:00-16:00"],
    availableDays: ["Wednesday", "Friday"],
    bio: "James is an expert in Business English and advanced English courses. He has over 20 years of teaching experience and is known for his effective teaching methods.",
    students: 35,
    courses: 14,
    skills: [
      "Business Communication",
      "Advanced Grammar",
      "Presentation Skills",
    ],
    experience: "Corporate Trainer, International Company, Jan 2000 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Lucas Smith",
        date: "Mar 3, 2023",
        rating: 5,
        comment:
          "James is an outstanding teacher. His business English classes have been very beneficial for my career.",
      },
      {
        name: "Mia Brown",
        date: "Feb 28, 2023",
        rating: 4,
        comment:
          "James's advanced English course helped me improve my grammar and writing skills.",
      },
    ],
  },
  {
    name: "Sophia",
    age: 27,
    gender: "Female",
    country: "Brazil",
    languages: ["English", "Portuguese"],
    isNative: true,
    isSuperTeacher: false,
    rating: 4.4,
    expertise: ["Beginner", "English for Kids"],
    price: 45,
    availableHours: ["08:00-10:00", "12:00-14:00"],
    availableDays: ["Tuesday", "Thursday"],
    bio: "Sophia is passionate about teaching English to beginners and kids. She makes learning fun and interactive, helping students build a strong foundation in the language.",
    students: 16,
    courses: 6,
    skills: ["Interactive Learning", "Storytelling", "Grammar Basics"],
    experience: "English Teacher, Language Center, Jan 2019 - Present",
    videoUrl:
      "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4",
    reviews: [
      {
        name: "Liam Clark",
        date: "Mar 5, 2023",
        rating: 5,
        comment:
          "Sophia is great with kids. My son looks forward to her classes every week.",
      },
      {
        name: "Olivia Davis",
        date: "Feb 20, 2023",
        rating: 4,
        comment:
          "Sophia's beginner English course is perfect for new learners. Highly recommend!",
      },
    ],
  },
];

// `id` is the URL slug used by /instructors/:id.
export const instructors = instructorData.map((instructor) => ({
  ...instructor,
  id: instructor.name.toLowerCase(),
}));

export const findInstructor = (id) =>
  instructors.find((instructor) => instructor.id === id);
