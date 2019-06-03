const todos = [
  {
    title: "Learn React",
    complete: false,
    id: 1
  },
  {
    title: "Complete the PIP",
    complete: false,
    id: 2
  },
  {
    title: "Be Awesome",
    complete: true,
    id: 3
  },
  {
    title: "Change The World",
    complete: false,
    id: 4
  }
];

const api = {
  fetchTodos: async function fetchTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(todos);
      }, 2000);
    });
  }
};

export { todos, api };
