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
    firstname: "Rish",
    email: "rish@emp.com",
    password: "123",
    taskNumbers: {
      active: 5,
      newTask: 2,
      completed: 3,
      failed: 2
    },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Prepare Project Report", description: "Compile Q1 performance report for management review.", deadline: "2025-09-05", category: "Reporting" },
      { active: true, newTask: false, completed: false, failed: false, title: "Database Backup", description: "Perform full Oracle DB backup for the finance system.", deadline: "2025-08-30", category: "Database" },
      { active: false, newTask: false, completed: true, failed: false, title: "Code Review", description: "Review pull requests for API enhancement.", deadline: "2025-08-20", category: "Development" },
      { active: false, newTask: false, completed: true, failed: false, title: "Unit Testing", description: "Write unit tests for new modules.", deadline: "2025-09-01", category: "QA" },
      { active: true, newTask: true, completed: false, failed: false, title: "Sprint Planning", description: "Prepare agenda for sprint planning.", deadline: "2025-08-27", category: "Agile" },
      { active: true, newTask: false, completed: false, failed: false, title: "Bug Triage", description: "Prioritize incoming bug reports.", deadline: "2025-08-28", category: "Support" },
      { active: false, newTask: false, completed: false, failed: true, title: "Prototype Demo", description: "Build demo for stakeholders.", deadline: "2025-08-18", category: "Design" },
      { active: false, newTask: false, completed: true, failed: false, title: "System Documentation", description: "Update system architecture docs.", deadline: "2025-08-22", category: "Documentation" }
    ]
  },
  {
    id: 2,
    firstname: "Saloni",
    email: "saloni@emp.com",
    password: "123",
    taskNumbers: {
      active: 6,
      newTask: 2,
      completed: 4,
      failed: 2
    },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "UI Bug Fix", description: "Fix alignment issues in login page.", deadline: "2025-08-28", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "API Documentation", description: "Update Swagger docs for new endpoints.", deadline: "2025-08-15", category: "Documentation" },
      { active: false, newTask: false, completed: false, failed: true, title: "Test Automation", description: "Create test cases for user registration flow.", deadline: "2025-08-18", category: "QA" },
      { active: true, newTask: false, completed: false, failed: false, title: "Database Optimization", description: "Optimize SQL queries for faster response.", deadline: "2025-09-02", category: "Database" },
      { active: true, newTask: true, completed: false, failed: false, title: "Responsive Layout", description: "Fix mobile responsiveness of dashboard.", deadline: "2025-09-06", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Email Templates", description: "Design HTML templates for emails.", deadline: "2025-08-24", category: "Design" },
      { active: false, newTask: false, completed: false, failed: true, title: "Integration Tests", description: "Automate API integration tests.", deadline: "2025-09-01", category: "QA" },
      { active: false, newTask: false, completed: true, failed: false, title: "User Manual", description: "Write user guide for employees.", deadline: "2025-08-30", category: "Documentation" }
    ]
  },
  {
    id: 3,
    firstname: "Manisha",
    email: "manish@emp.com",
    password: "123",
    taskNumbers: {
      active: 5,
      newTask: 2,
      completed: 3,
      failed: 1
    },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "API Development", description: "Implement authentication microservice.", deadline: "2025-09-03", category: "Backend" },
      { active: true, newTask: false, completed: false, failed: false, title: "DevOps Setup", description: "Configure CI/CD pipeline using GitHub Actions.", deadline: "2025-09-07", category: "DevOps" },
      { active: false, newTask: false, completed: true, failed: false, title: "Security Audit", description: "Run vulnerability checks for APIs.", deadline: "2025-08-21", category: "Security" },
      { active: false, newTask: false, completed: true, failed: false, title: "API Logs", description: "Setup centralized logging.", deadline: "2025-08-29", category: "DevOps" },
      { active: false, newTask: false, completed: true, failed: false, title: "Code Cleanup", description: "Remove deprecated methods.", deadline: "2025-08-27", category: "Development" },
      { active: false, newTask: false, completed: false, failed: true, title: "Penetration Test", description: "Perform pentest for backend APIs.", deadline: "2025-08-25", category: "Security" },
      { active: true, newTask: true, completed: false, failed: false, title: "API Gateway", description: "Implement gateway for microservices.", deadline: "2025-09-10", category: "Backend" },
      { active: true, newTask: false, completed: false, failed: false, title: "CI/CD Monitor", description: "Add monitoring to CI pipeline.", deadline: "2025-09-11", category: "DevOps" }
    ]
  },
  {
    id: 4,
    firstname: "Suyash",
    email: "suyash@emp.com",
    password: "123",
    taskNumbers: {
      active: 5,
      newTask: 2,
      completed: 3,
      failed: 2
    },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Client Meeting", description: "Prepare demo slides for client presentation.", deadline: "2025-08-27", category: "Business" },
      { active: true, newTask: false, completed: false, failed: false, title: "Bug Fix", description: "Resolve issue in payment gateway integration.", deadline: "2025-08-31", category: "Backend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Knowledge Transfer", description: "Conduct session on API best practices.", deadline: "2025-08-12", category: "Training" },
      { active: false, newTask: false, completed: false, failed: true, title: "Prototype Design", description: "Design prototype for new mobile app.", deadline: "2025-08-19", category: "Design" },
      { active: false, newTask: false, completed: true, failed: false, title: "Market Research", description: "Research competitors' product features.", deadline: "2025-08-25", category: "Business" },
      { active: false, newTask: false, completed: true, failed: false, title: "API Training", description: "Train juniors on API integration.", deadline: "2025-08-29", category: "Training" },
      { active: false, newTask: false, completed: false, failed: true, title: "Prototype Review", description: "Review UI prototypes with client.", deadline: "2025-09-01", category: "Design" },
      { active: true, newTask: true, completed: false, failed: false, title: "Roadmap Prep", description: "Prepare roadmap for next quarter.", deadline: "2025-09-08", category: "Business" }
    ]
  },
  {
    id: 5,
    firstname: "Diya",
    email: "employee@emp.com",
    password: "123",
    taskNumbers: {
      active: 6,
      newTask: 2,
      completed: 3,
      failed: 2
    },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Server Maintenance", description: "Upgrade to latest OS patches.", deadline: "2025-08-29", category: "IT Support" },
      { active: false, newTask: false, completed: true, failed: false, title: "Performance Testing", description: "Load test the new release build.", deadline: "2025-08-22", category: "QA" },
      { active: true, newTask: false, completed: false, failed: false, title: "Cloud Migration", description: "Migrate old services to AWS.", deadline: "2025-09-10", category: "Cloud" },
      { active: false, newTask: false, completed: false, failed: true, title: "Code Refactoring", description: "Refactor legacy code for maintainability.", deadline: "2025-08-17", category: "Development" },
      { active: true, newTask: false, completed: false, failed: false, title: "API Monitoring", description: "Set up monitoring for production APIs.", deadline: "2025-09-06", category: "DevOps" },
      { active: false, newTask: false, completed: true, failed: false, title: "Incident Report", description: "Document root cause of downtime.", deadline: "2025-08-20", category: "IT Support" },
      { active: false, newTask: false, completed: true, failed: false, title: "Load Balancing", description: "Setup load balancing on cloud servers.", deadline: "2025-09-02", category: "Cloud" },
      { active: false, newTask: false, completed: false, failed: true, title: "Database Upgrade", description: "Upgrade PostgreSQL to latest version.", deadline: "2025-09-01", category: "Database" }
    ]
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
