Loan Application System
A simple web application that allows users to apply for loans, view their applied loans, and track the status of their applications.

Features
Apply for Loan: Users can apply for a loan by filling out a form with their name, loan amount, and reason for applying.

Dashboard: Displays an overview of applied loans, showing the full name, loan amount, and current status (Pending/Approved/Rejected).

Applied Loans: A page that lists all loans applied by the user with their details and status.

Tech Stack
Frontend: React, React Router, Styled-components

State Management: React useState hook

Routing: React Router

Setup and Installation
Follow these steps to get the project up and running locally.

Prerequisites
Node.js (>= 14.x.x)

npm or yarn (to manage packages)

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/loan-application-system.git
cd loan-application-system
Install dependencies:

bash
Copy
Edit
npm install
Run the application:

bash
Copy
Edit
npm start
The app will be running on http://localhost:3000.

App.js
The main app component that sets up routing for the application and manages the state of applied loans.

Dashboard
Displays the user dashboard, showing applied loans along with their status.

ApplyLoan
The form component where users can apply for loans. It accepts user input for name, loan amount, and reason.

AppliedLoans
Displays a list of all loans that have been applied, showing the details and status of each loan.

Future Enhancements
User Authentication: Add user login/signup functionality to track individual loan applications.

Loan Approval System: Implement logic for loan approval/rejection based on certain conditions.

Persistent Data: Store loan data in a backend database (e.g., MongoDB, Firebase) to persist data across sessions.

Notification System: Add email or in-app notifications when the loan status changes.

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).

Create a pull request.
