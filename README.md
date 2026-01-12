# SecureX  
## Stored XSS Vulnerability – Full Stack Web Application (OWASP Top 10)

## Project Overview
SecureX is a hi‑tech full‑stack web application developed to demonstrate  
**Stored Cross‑Site Scripting (XSS)**, one of the **OWASP Top 10 Web Application Security Risks**.
The application allows users to submit feedback, which is intentionally stored
and rendered without sanitization to demonstrate how Stored XSS attacks work.

## Technology Stack
- **Frontend:** HTML, CSS (Modern SaaS‑style UI)
- **Backend:** Node.js, Express.js
- **Database:** SQLite (Local database)
- **Security Vulnerability:** Stored Cross‑Site Scripting (XSS)

##  Setup Instructions
### Prerequisites
Ensure the following are installed:
- Node.js
- VS Code
- Git (for GitHub submission)

### Step 1: Open Project
1. Open **VS Code**
2. Click **File → Open Folder**
3. Select the project folder:
hitech-xss-fullstack

### Step 2: Install Dependencies
Open the VS Code terminal and run:
npm install

-Execution Steps

Step 3: Start the Server
npm start
You should see:
Running at http://localhost:3000

Step 4: Open Application
Open your browser and visit:
http://localhost:3000

-- Demonstrating Stored XSS Attack
Click Open Dashboard
In the Submit Feedback field, enter the payload below:
<img src=x onerror="alert('XSS Attack')">
Click Submit
An alert box appears
Refresh the page — the alert appears again
This confirms Stored XSS vulnerability

--Vulnerability Explanation
User input is stored in the database without sanitization
Stored data is rendered using innerHTML
Malicious JavaScript executes when data is displayed
This demonstrates Stored Cross‑Site Scripting (OWASP Top 10)

--Impact
Arbitrary JavaScript execution
Session hijacking
Data theft
User impersonation

Stored XSS (Persistent XSS) is a type of Cross-Site Scripting attack where malicious JavaScript is permanently stored on the server (for example, in a database, comment section, or user profile).
When any user later visits the affected page, the stored script automatically executes in their browser without any interaction.
Key points:
•	The payload is saved on the server (database, logs, forum posts).
•	Affects multiple users, not just the attacker.
•	Executes every time the infected page is loaded.
•	Can steal cookies, session tokens, or perform actions on behalf of users.
Simple example:
An attacker posts <script>alert('XSS')</script> in a comment field.
Every user who views that comment triggers the script.
Stored XSS is more dangerous than reflected XSS because it is persistent and spreads to all visitors.


