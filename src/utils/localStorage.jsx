// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Preet",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Review Reports",
        description: "Review the quarterly financial reports for accuracy.",
        category: "Finance",
        date: "2024-10-20",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Records",
        description: "Update client records in the database.",
        category: "Data Entry",
        date: "2024-10-25",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Abhisan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for the upcoming project meeting.",
        category: "Project Management",
        date: "2024-11-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the team sync-up meeting.",
        category: "Meeting",
        date: "2024-11-02",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review code submitted by team members.",
        category: "Development",
        date: "2024-11-03",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write Documentation",
        description: "Update the project documentation.",
        category: "Documentation",
        date: "2024-11-05",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Review Reports",
        description: "Review the quarterly financial reports for accuracy.",
        category: "Finance",
        date: "2024-10-20",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Market Research",
        description: "Conduct research on industry trends and competitor analysis.",
        category: "Research",
        date: "2024-11-01",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Vihaan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for the upcoming project meeting.",
        category: "Project Management",
        date: "2024-11-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the team sync-up meeting.",
        category: "Meeting",
        date: "2024-11-02",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 6,
    firstName: "Rohan",
    email: "employee6@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review code submitted by team members.",
        category: "Development",
        date: "2024-11-03",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write Blog",
        description: "Update the project Blog within tomorrow.",
        category: "Documentation",
        date: "2024-11-05",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  // Continue for other employees
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// set data in local
export const setLocalStorage= ()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage= ()=>{
    const employeesData=JSON.parse(localStorage.getItem("employees"));
    const adminData=JSON.parse(localStorage.getItem("admin"));
    
    return{employeesData, adminData}
    // for checking the data as an array
    // console.log(JSON.parse(data))

}