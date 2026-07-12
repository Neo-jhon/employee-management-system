
const employees = [
    {
      firstName: "John",
      email: "j@j.com",
      password: "123",
      taskCount: {
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
          taskTitle: "Fix Login Bug",
          taskDescription: "Resolve the authentication issue on the login page.",
          taskDate: "2026-07-05",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Update Dashboard",
          taskDescription: "Add weekly analytics section to the dashboard.",
          taskDate: "2026-07-06",
          category: "Frontend"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Code Review",
          taskDescription: "Review PRs submitted by the frontend team.",
          taskDate: "2026-07-02",
          category: "Review"
        }
      ]
    },
    {
      firstName: "Emma",
      email: "e@e.com",
      password: "123",
      taskCount: {
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
          taskTitle: "Design Landing Page",
          taskDescription: "Create a responsive landing page design.",
          taskDate: "2026-07-05",
          category: "UI/UX"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Logo Update",
          taskDescription: "Redesign company logo for branding.",
          taskDate: "2026-06-30",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Client Presentation",
          taskDescription: "Prepare slides for the client meeting.",
          taskDate: "2026-07-01",
          category: "Presentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Create Icons",
          taskDescription: "Design icon set for the mobile app.",
          taskDate: "2026-07-08",
          category: "Graphics"
        }
      ]
    },
    {
      firstName: "Liam",
      email: "liam.johnson@company.com",
      password: "123",
      taskCount: {
        active: 3,
        newTask: 2,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Database Backup",
          taskDescription: "Take weekly backup of production database.",
          taskDate: "2026-07-04",
          category: "Database"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Optimize Queries",
          taskDescription: "Improve slow SQL queries.",
          taskDate: "2026-07-07",
          category: "Backend"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "API Testing",
          taskDescription: "Test all authentication APIs.",
          taskDate: "2026-07-01",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Deploy API",
          taskDescription: "Deploy latest API build to staging.",
          taskDate: "2026-06-29",
          category: "Deployment"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Redis Setup",
          taskDescription: "Configure Redis caching server.",
          taskDate: "2026-07-09",
          category: "Backend"
        }
      ]
    },
    {
      firstName: "Olivia",
      email: "olivia.brown@company.com",
      password: "123",
      taskCount: {
        active: 3,
        newTask: 2,
        completed: 2,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Write Test Cases",
          taskDescription: "Create test cases for payment module.",
          taskDate: "2026-07-05",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Regression Testing",
          taskDescription: "Perform regression testing after release.",
          taskDate: "2026-07-02",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Bug Verification",
          taskDescription: "Verify resolved bugs from sprint 12.",
          taskDate: "2026-06-28",
          category: "Testing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Automation Script",
          taskDescription: "Write Selenium automation scripts.",
          taskDate: "2026-07-10",
          category: "Automation"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Performance Testing",
          taskDescription: "Test application under heavy load.",
          taskDate: "2026-07-12",
          category: "Performance"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Smoke Testing",
          taskDescription: "Execute smoke tests before deployment.",
          taskDate: "2026-07-03",
          category: "QA"
        }
      ]
    },
    {
      firstName: "Noah",
      email: "noah.wilson@company.com",
      password: "123",
      taskCount: {
        active: 4,
        newTask: 2,
        completed: 2,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Content Writing",
          taskDescription: "Write blog for July product release.",
          taskDate: "2026-07-06",
          category: "Marketing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "SEO Optimization",
          taskDescription: "Optimize website pages for SEO.",
          taskDate: "2026-07-08",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Email Campaign",
          taskDescription: "Launch monthly email campaign.",
          taskDate: "2026-07-01",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed:false,
          failed:true,
          taskTitle:"Social Media Ads",
          taskDescription:"Create Facebook and Instagram ads.",
          taskDate:"2026-06-27",
          category:"Advertising"
        },
        {
          active:true,
          newTask:true,
          completed:false,
          failed:false,
          taskTitle:"Competitor Research",
          taskDescription:"Analyze competitors' marketing strategies.",
          taskDate:"2026-07-09",
          category:"Research"
        },
        {
          active:true,
          newTask:false,
          completed:false,
          failed:false,
          taskTitle:"Newsletter Design",
          taskDescription:"Design this month's newsletter.",
          taskDate:"2026-07-11",
          category:"Design"
        },
        {
          active:false,
          newTask:false,
          completed:true,
          failed:false,
          taskTitle:"Customer Survey",
          taskDescription:"Analyze customer feedback survey.",
          taskDate:"2026-07-02",
          category:"Research"
        }
      ]
    }
  ];
  
  const admin = [
    {
      firstName: "Admin",
      email: "admin@me.com",
      password: "123"
    }
  ];

export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
const employees =   JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return{employees,admin}
}