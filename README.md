# To-Do App (Full-Stack Project)

This is a full-stack To-Do application built with React for the frontend,
Node.js and Express for the backend, and PostgreSQL as the database. The application allows users to create, read, update,
and delete tasks, ensuring data persistence. The project is divided into two main folders: the "client" folder for the React
frontend and the "server" folder for the Node.js backend. The frontend dynamically fetches tasks from the backend API and displays them,
enabling users to add new tasks with a title, description, and due date, mark tasks as complete or undo them, and delete tasks after confirmation.
The backend handles API requests through Express routes: a `GET /api/tasks` route to retrieve tasks, a `POST /api/tasks` route to add tasks, and a `DELETE /api/tasks/:id`
route to remove tasks. The data is stored in a PostgreSQL database, which requires creating a table named `tasks` with fields for `id`, `title`, `description`, `due_date`,
and `completed`. To set up the project, first, configure the backend by running `npm install` in the `server` folder and ensuring PostgreSQL credentials are added to a `.env`
file. Then, start the server using `node server.js` on port 5000. For the frontend, navigate to the `client` folder, install dependencies using `npm install`, and start
the React development server with `npm start` to view the app at `http://localhost:3000`. The frontend fetches tasks on page load using Axios and dynamically
updates the UI when tasks are added, updated, or deleted. The app includes a clean and intuitive UI, with styled task cards, buttons, and confirmation prompts
for deleting tasks. Known issues include ensuring the backend server is running and PostgreSQL credentials are correctly set in the `.env` file.
This project demonstrates full-stack CRUD functionality, combining React, Node.js, and PostgreSQL to create a simple yet effective To-Do application.
For contributions, fork the repository, create a feature branch, make changes, and submit a pull request. The project is licensed under MIT and authored by Enmanuel Santana.

To use the app follow this steps:
open server first and then client to use the app correctly.
