// localStorage.clear()

const admin = [ 
  { 
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Project Report",
        description: "Compile Q1 performance report for management review.",
        deadline: "2025-09-05",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Perform full Oracle DB backup for the finance system.",
        deadline: "2025-08-30",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review pull requests for API enhancement.",
        deadline: "2025-08-20",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Bug Fix",
        description: "Fix alignment issues in login page.",
        deadline: "2025-08-28",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Documentation",
        description: "Update Swagger docs for new endpoints.",
        deadline: "2025-08-15",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test Automation",
        description: "Create test cases for user registration flow.",
        deadline: "2025-08-18",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database Optimization",
        description: "Optimize SQL queries for faster response.",
        deadline: "2025-09-02",
        category: "Database"
      }
    ]
  },
  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API Development",
        description: "Implement authentication microservice.",
        deadline: "2025-09-03",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "DevOps Setup",
        description: "Configure CI/CD pipeline using GitHub Actions.",
        deadline: "2025-09-07",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Security Audit",
        description: "Run vulnerability checks for APIs.",
        deadline: "2025-08-21",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    firstname: "Aanya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Meeting",
        description: "Prepare demo slides for client presentation.",
        deadline: "2025-08-27",
        category: "Business"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Bug Fix",
        description: "Resolve issue in payment gateway integration.",
        deadline: "2025-08-31",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Knowledge Transfer",
        description: "Conduct session on API best practices.",
        deadline: "2025-08-12",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Prototype Design",
        description: "Design prototype for new mobile app.",
        deadline: "2025-08-19",
        category: "Design"
      }
    ]
  },
  {
    id: 5,
    firstname: "Diya",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Server Maintenance",
        description: "Upgrade to latest OS patches.",
        deadline: "2025-08-29",
        category: "IT Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Performance Testing",
        description: "Load test the new release build.",
        deadline: "2025-08-22",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Cloud Migration",
        description: "Migrate old services to AWS.",
        deadline: "2025-09-10",
        category: "Cloud"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Code Refactoring",
        description: "Refactor legacy code for maintainability.",
        deadline: "2025-08-17",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "API Monitoring",
        description: "Set up monitoring for production APIs.",
        deadline: "2025-09-06",
        category: "DevOps"
      }
    ]
  }
];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
