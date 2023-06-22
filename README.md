![Screenshot 2023-06-22 at 13 18 35](https://github.com/Braggiouy/single-epg-screen/assets/72386708/e0d7a598-4510-437e-af85-23f515f8a425)# EPG Screen Project

by Bruno Aggierni

## About

The EPG (Electronic Program Guide) Screen project is a web application that displays a list of TV channels along with their program schedules. Users can browse through the channels and access detailed information about each program by navigating to the Individual Program Detail Page (IDP).

## Technologies Used

Project was generated entirely from scratch, without using any template, package nor starter pack. The following technologies were used :

- React: JavaScript library for building user interfaces
- Webpack: Module bundler for JavaScript applications
- Babel: JavaScript compiler for converting modern JavaScript code into backward-compatible versions
- JavaScript: Programming language used for the project's logic
- Functional Components and Hooks: Utilized for writing modular and reusable code
- Tailwind CSS: Utility-first CSS framework for styling the application

## How to Run the Project

1. Clone the project repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the command `npm install` to install all project dependencies.
4. Start the API server by running `npm run start:api`. This will retrieve the data required to populate the application.
5. Start the development server by running `npm run start`. This will build the project using Webpack and deploy it on a local server.
6. Open your web browser and visit `http://localhost:5000/` to access the application.

## Challenges

During the development of this project, several challenges were encountered:

- Starting from scratch without using starter packs or templates required setting up the project configuration and build processes manually.
- Implementing the moving timeline marker involved complex logic to synchronize with the program schedule.
- Styling the different overlays, such as channel logos and program details, required careful design considerations and CSS customization.
- Working with Webpack configuration and dependencies required constant troubleshooting and tweaking to ensure a smooth development experience.

## Future Implementations

There are several potential enhancements for the future:

- Make the header transparent when entering the Individual Program Detail Page (IDP) to provide a more immersive experience.
- Improve responsiveness across different screen resolutions, as the main focus of the project was mobile devices based on the provided mockup images.
- Consider integrating TypeScript for improved type checking and development productivity.
- Evaluate the use of Redux or Zustand for state management, especially if the project scales and requires more complex data flow and shared state among components. Recently been reading and learning about zustand, and it might be a better fit.
- Instead of having visible scrolling bars, best would be to implement a drag & drop behaviour, for a better UI, but mostly, a better UX.
- Modify the IDP. Currently its values are hardcoded. Best would be to pass the value of the program we select, and then IDP will be completly populated with those values.
- Within the IDP, identify whether program is currently live, upcoming, or past.

Feel free to explore and contribute to this project. If you have any questions or suggestions, please do not hesitate to reach out.

## Screenshot sample
![Screenshot 2023-06-22 at 13 19 01](https://github.com/Braggiouy/single-epg-screen/assets/72386708/69b59bf8-b093-4ab8-8795-62716653cab6)

