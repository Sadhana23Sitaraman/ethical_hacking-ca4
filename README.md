 Project Overview
SecureX is a hi-tech full-stack web application developed to demonstrate **Stored Cross-Site Scripting (XSS)** and **SQL Injection (SQLi)**, which are part of the OWASP Top 10 Web Application Security Risks.
The application allows users to submit feedback, which is intentionally stored and rendered without sanitization to demonstrate how Stored XSS attacks work.
It also includes an intentionally vulnerable search feature to demonstrate SQL Injection attacks.

## Technology Stack

Frontend: HTML, CSS (Modern SaaS-style UI)
Backend: Node.js, Express.js
Database: SQLite (Local database)
Security Vulnerabilities: Stored Cross-Site Scripting (XSS), SQL Injection (SQLi)

## Setup Instructions

### Prerequisites

Ensure the following are installed:

* Node.js
* VS Code
* Git (for GitHub submission)


### Step 1: Open Project

Open VS Code
Click **File → Open Folder**
Select the project folder: **hitech-xss-fullstack**


### Step 2: Install Dependencies

Open the VS Code terminal and run:


npm install


## Execution Steps

➤ **Step 3: Start the Server**

npm start

You should see:

Running at http://localhost:3000

➤ **Step 4: Open Application**
Open your browser and visit:

http://localhost:3000

## Demonstrating Stored XSS Attack

Click **Open Dashboard**
In the **Submit Feedback** field, enter the payload below:

<img src=x onerror=alert('XSS')>


Click **Submit**
An alert box appears
Refresh the page — the alert appears again

This confirms the **Stored XSS vulnerability**.


## Vulnerability Explanation (Stored XSS)

* User input is stored in the database without sanitization
* Stored data is rendered directly in the browser
* Malicious JavaScript executes whenever the data is displayed
**image-based payload using the `onerror` event** was used to successfully execute JavaScript.

This demonstrates **Stored Cross-Site Scripting (OWASP Top 10)**.


## Impact (Stored XSS)

* Arbitrary JavaScript execution
* Session hijacking
* Data theft
* User impersonation


## Stored XSS (Persistent XSS)

Stored XSS (Persistent XSS) is a type of Cross-Site Scripting attack where malicious JavaScript is permanently stored on the server (for example, in a database, comment section, or user profile).

When any user later visits the affected page, the stored script automatically executes in their browser without any interaction.

**Key points:**

* The payload is saved on the server
* Affects multiple users
* Executes every time the page loads
* More dangerous than reflected XSS

**Example used in this application:**

<img src=x onerror=alert('XSS')>


## SQL Injection Vulnerability – Demonstration

### Demonstrating SQL Injection Attack

The application contains an intentionally vulnerable search functionality that directly concatenates user input into SQL queries.

Search URL:

http://localhost:3000/search?q=

Enter the payload below in the URL:

' OR 1=1--

The application returns **all database records**, confirming the **SQL Injection vulnerability**.

## Vulnerability Explanation (SQL Injection)

* User input is directly concatenated into SQL queries
* No input validation or parameterized queries are used
* Attackers can manipulate SQL query logic to access database data

This demonstrates **SQL Injection (OWASP Top 10)**.

## Impact (SQL Injection)

* Unauthorized database access
* Data disclosure
* Data manipulation
* Complete database compromise

## Disclaimer

This project is **intentionally vulnerable** and is developed strictly for **educational and ethical security testing purposes only**.
It must **not** be deployed in a production environment.




