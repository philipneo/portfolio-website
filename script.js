const projects = [
  {
    title: 'Job Application Tracker',
    description: 'Track roles, companies, statuses, notes, and follow-ups in the browser.',
    url: 'https://github.com/philipneo/job-application-tracker'
  },
  {
    title: 'Budget Tracker',
    description: 'Log income and expenses, then review balance and category summaries.',
    url: 'https://github.com/philipneo/budget-tracker'
  },
  {
    title: 'Task Manager',
    description: 'Plan tasks with priority, due dates, filters, and completion status.',
    url: 'https://github.com/philipneo/task-manager'
  },
  {
    title: 'C++ Practice Library',
    description: 'Small C++ programs for fundamentals, files, classes, and debugging.',
    url: 'https://github.com/philipneo/cpp-practice-library'
  }
];

const grid = document.querySelector('#projectGrid');

grid.innerHTML = projects.map(project => `
  <article class="card">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.url}">View repository</a>
  </article>
`).join('');
