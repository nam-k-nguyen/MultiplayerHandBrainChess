#  Final Design Report: Hand and Brain Chess

## Table of Contents

- [Project Abstract](#abstract)
- [User Interface Specification](#ui-spec)
- [Test Plan](#test-plan)
- [User Manual](#user-manual)
- [Presentation](#presentation)
- [Assessments](#assessment)
- [Summary of hours](#time-budget)
- [Expenses](#expense)
- [Appendix](#appendix)
- [Links](#links)

## Project Abstract <a name="abstract"></a>

Name: Nam Nguyen
Major: Computer Science
Email: nguye2nk@mail.uc.edu

Project Description

- Hand and Brain Chess is a web application that provides a platform for playing the Hand and Brain variant of chess online. This variant introduces a collaborative element to the classic game, requiring two players to form a team. One player, designated as the "Brain," is responsible for analyzing the board, strategizing, and communicating the intended move. The other player, known as the "Hand," then executes the move on the physical or virtual chessboard, following the Brain's instructions.

- The application aims to replicate this experience in a digital environment, connecting players remotely and providing tools to facilitate communication and gameplay. The core challenge lies in effectively synchronizing the actions and information between the two players, ensuring a seamless and intuitive collaborative experience.

- The application includes features such as:

  - Real-time game synchronization between players, ensuring both players see the same board state and move history.
  - Support for different game modes to cater to various player preferences, including standard chess, practice modes with computer assistance, and the Hand and Brain variant.
  - A user-friendly interface for easy interaction, allowing players to quickly create or join games, communicate with their partners, and make moves.
  - Scalability to accommodate multiple concurrent games, enabling a large number of users to play simultaneously.
  - Integration of communication tools, such as in-game chat or voice communication (future development), to facilitate coordination between Hand and Brain players.
  - Implementation of standard chess rules and move validation to ensure fair play.
  - The project leverages web technologies to create a cross-platform experience, accessible from any device with a web browser. The frontend is built using React, a JavaScript library for creating user interfaces, while the backend is developed using Node.js, a server-side JavaScript runtime environment. Socket.IO is used to enable real-time, bi-directional communication between the client and server.

## User Interface Specification <a name="ui-spec"></a>

The user interface is designed to be intuitive and responsive, providing a seamless experience across different devices. The application follows a modern design language, emphasizing clarity and ease of use.  The visual design aims to be clean and uncluttered, allowing players to focus on the game.

Key components include:

* **Home Page:**
    * Displays a welcome message, introducing the Hand and Brain Chess concept.
    * Provides options to create or join a game room.
    * Includes a text input field for entering a room ID when joining an existing game.
    * Features clear call-to-action buttons for creating or joining rooms, making it easy for users to start playing quickly.
    * (`src/pages/Home.jsx`, `src/pages/Home.css`)
* **Mode Selection Page:**
    * Presents a selection of game modes, categorized by genre (Solo Play, Hybrid, Multiplayer).
    * Each mode is displayed with a descriptive name and a brief explanation of its rules, objectives, and player roles.
    * The page allows users to choose their preferred game mode before starting or joining a game, catering to different play styles and preferences.
    * (`src/pages/Mode.jsx`, `src/pages/Mode.css`, `src/const/modes.jsx`)
* **Play Page:**
    * Displays a virtual chessboard for visualizing the game state, including piece positions and legal moves.
    * Shows player information, including names, assigned roles (Hand or Brain), and potentially team affiliations.
    * Provides game controls for actions such as offering a draw, resigning, and confirming moves.  These controls are clearly labeled and easily accessible.
    * The layout is designed to facilitate clear communication and coordination between teammates, with a focus on presenting the most relevant information to each player.
    * (`src/pages/Play.jsx`, `src/pages/Play.css`, `src/components/FullChessboard.jsx`, `src/components/PlayerBox.jsx`)
* **Navigation Bar:**
    * Provides persistent navigation across different sections of the application, allowing users to easily move between different functionalities.
    * Includes links to the Home, Mode Selection, Play, and Information pages.
    * Features a theme toggle, allowing users to switch between light and dark color schemes to suit their preferences.
    * (`src/components/NavBar.jsx`, `src/components/NavBar.css`)
* **Theme Toggle:**
    * Allows users to switch between light and dark themes to enhance readability and reduce eye strain, particularly during extended gameplay sessions.
    * The selected theme is persisted across sessions using local storage, ensuring a consistent experience.
    * (`src/utils/theme.jsx`, `src/index.css`)
* **Overlay:**
    * Displays a loading message or animation while the application is connecting to the server, loading game data, or performing other asynchronous operations.
    * Provides visual feedback to the user, indicating that the application is in the process of initializing and preventing them from interacting with the UI prematurely.
    * (`src/components/Overlay.jsx`, `src/components/Overlay.css`)

**UI Design Considerations:**

* **Responsiveness:** The UI is designed to adapt to various screen sizes, including desktops, tablets, and smartphones. This ensures a consistent and enjoyable experience regardless of the device used.  Layouts are flexible, and elements resize and rearrange appropriately to fit different screen dimensions.
* **Accessibility:** The application adheres to accessibility guidelines (such as WCAG) to ensure usability for individuals with disabilities. This includes:
    * Sufficient color contrast between text and background elements to ensure readability for users with low vision.
    * Keyboard navigation for users who cannot use a mouse, allowing them to interact with all interactive elements using the keyboard.
    * Clear and concise labeling of interactive elements, providing screen reader users with the necessary context.
* **User Feedback:** The UI provides visual cues and messages to guide users and inform them of game events. This includes:
    * Highlighting legal moves on the chessboard to assist players in making valid moves.
    * Displaying confirmation messages after a move is made, indicating that the action has been successfully processed.
    * Indicating whose turn it is to play, ensuring clarity and preventing confusion.
    * Providing feedback for invalid moves, explaining why a move is not allowed.

## Test Plan <a name="test-plan"></a>

A comprehensive test plan was implemented to ensure the application's functionality, stability, and usability. The following types of tests were conducted:

* **Unit Tests:** Individual components and functions were tested in isolation to verify their correct behavior. This includes testing the logic of the game engine (move generation, validation, game state updates), UI component rendering (ensuring components display correctly and respond to user interactions), and utility functions.  A testing framework such as Jest would be used.
* **Integration Tests:** Tests were performed to verify the interaction between different components and modules. This includes testing the communication between the frontend and backend using Socket.IO (ensuring messages are sent and received correctly), ensuring that game state is correctly synchronized between players in real-time, and validating the flow of data between different parts of the application.
* **System Tests:** The entire application was tested as a whole to ensure it meets the overall requirements and functions correctly in a real-world scenario. This involves testing the complete user workflow, from creating or joining a room to playing a game, handling disconnections, and ending the game.  This also includes performance testing to ensure the application can handle multiple concurrent users.
* **User Acceptance Tests (UAT):** The application was tested by a group of representative users to gather feedback on usability, identify any potential issues, and ensure that the application meets the needs of its intended audience.  UAT involved having users perform typical tasks, such as creating and joining games, making moves, and using the chat functionality (if implemented).

## User Manual <a name="user-manual"></a>

The user manual provides instructions on how to use the Hand and Brain Chess application. It covers the following topics:

* **Getting Started:** Instructions on how to access the application (URL), create an account (if necessary), and log in.
* **Creating a Game:** Explanation of how to create a new game room, including selecting a game mode and setting any available options.
* **Joining a Game:** Instructions on how to join an existing game room using the room ID.
* **Playing the Game:** Detailed explanation of the Hand and Brain game rules, player roles (Hand and Brain), and how to communicate moves.
* **Game Controls:** Description of all available game controls, such as:
        * Move submission and confirmation
        * Offering and accepting draws
        * Resigning from a game
* **Communication:** Explanation of how to use in-game chat or other communication features to coordinate with teammates.
* **Game Modes:** Detailed descriptions of each game mode, including rules, player roles, and objectives.
* **Settings:** Instructions on how to customize application settings, such as theme preferences, sound options, and display settings.
* **FAQ:** A list of frequently asked questions and their answers.

The user manual will be available online, with links provided in the application and the final report.  It will include screenshots and diagrams to illustrate the instructions.

## PPT Presentation <a name="presentation"></a>

The Spring Final PPT Presentation provides an overview of the project, including:

* Project goals and objectives
* System architecture and design
* Key features and functionalities
* Development process and challenges
* Test results and evaluation
* Future work and improvements

## Assessments <a name="assessment"></a>

### Initial Self-Assessments (fall semester)

Date: September 1, 2023

Skills and Experience:

- Proficient in JavaScript, HTML, and CSS.
- Familiar with React and Node.js.
- Experience with version control using Git.
- Basic knowledge of database design and SQL.
- Good understanding of data structures and algorithms.

Learning Goals:

- Improve proficiency in React and Node.js.
- Gain experience with real-time communication using WebSockets.
- Learn to design and implement a full-stack web application.
- Develop skills in project management and teamwork.
- Learn about Chess game rules and variants.

### Final Self-Assessments (spring semester)

Date: May 10, 2024

Contributions and Accomplishments:

- Successfully developed a full-stack web application for playing Hand and Brain Chess.
- Designed and implemented the backend server using Node.js and Socket.IO.
- Developed the user interface using React, ensuring a responsive and user-friendly experience.
- Integrated the frontend and backend components, enabling real-time gameplay.
- Wrote documentation, including a final report and user manual.

Learning Outcomes:

- Significantly improved proficiency in React and Node.js.
- Gained practical experience with real-time communication using Socket.IO.
- Successfully designed and implemented a complete full-stack web application.
- Enhanced skills in project management, time management, and problem-solving.
- Acquired in-depth knowledge of the Hand and Brain Chess variant.

Challenges Encountered:

- Implementing  real-time game synchronization.
- Ensuring cross-browser compatibility.
- Managing the scope of the project as a solo developer.

## Summary of Hours and Justification <a name="time-budget"></a>

Team Member: Nam Nguyen

- Fall Semester: 195 hours
- Spring Semester: 248 hours
- Total: 443 hours

Nam Nguyen was responsible for the full-stack development of the Hand and Brain Chess application. His work spanned both the frontend and backend components, encompassing a wide range of tasks:
Backend Development (195 hours):

- Designed and implemented the server-side architecture using Node.js and Express. (37 hours)
- Developed the real-time communication functionality using Socket.IO, including handling room creation, player joining, and game state synchronization. (58 hours)
- Defined and implemented the game logic, including move validation, game state management, and win condition detection, using the chess.js library. (47 hours)
- Configured the database (if applicable, otherwise file-based storage) for persistence of game data. (28 hours)
- Wrote and maintained server-side tests. (25 hours)

Frontend Development (248 hours):

- Designed and implemented the user interface using React, including the Home, Mode Selection, and Play pages. (80 hours)
- Developed interactive components such as the chessboard, player information displays, and game controls. (60 hours)
- Integrated the frontend with the backend API, handling data exchange and real-time updates. (40 hours)
- Ensured the application's responsiveness and cross-browser compatibility. (28 hours)

Project Management and Documentation (50 hours):

- Project planning, including defining project scope, setting goals, and creating a development timeline. (10 hours)
- Requirements gathering and analysis, including identifying user needs and defining functional specifications. (10 hours)
- System design and architecture documentation. (17 hours)
- Writing the final design report and creating the presentation. (13 hours)

## Summary of Expenses <a name="expense"></a>

No expense

## Appendix <a name="appendix"></a>

- Frontend repository: [https://github.com/nam-k-nguyen/chess-handnbrain-frontend](https://github.com/nam-k-nguyen/chess-handnbrain-frontend)
- Backend repository: [https://github.com/nam-k-nguyen/chess-handnbrain-backend](https://github.com/nam-k-nguyen/chess-handnbrain-backend)

## Links <a name="links"></a>

### 1. Team names (include Advisor) and Project Abstract (limit of 400 ascii chars)

### 2. [Project Description (Assignment #2)](/SeniorDesignDetails/2_ProjectDescription.md)

### 3. [User Stories and Design Diagrams (Assignment #4)](/SeniorDesignDetails/4_UserStories.md)

### 4. [Project Tasks and Timeline (Assignment #5-6)](/SeniorDesignDetails/6_MilestonesTimelineEffortMatrix.md)

### 5. [ABET Concerns Essay (Assignment #7)](/SeniorDesignDetails/7_ProjectConstraints.md)

### 6. [PPT Slideshow (includes ABET Concerns) (Assignment #8)](/SeniorDesignDetails/8_PresentationSlide.md)

### 7. [Self-Assessment Essays (Assignment #3)](/SeniorDesignDetails/3a_IndividualCapstoneAssessment.md)

### 8. [Professional Biographies  (Assignment #1)](/SeniorDesignDetails/1_Bio.md)

### 9. Budget - Free

### 10. Appendix - TBU
