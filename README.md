﻿# CurateVista
 ## Developer Guide

This guide will walk you through the steps to set up the project. 

## Prerequisites

1. **Install Git**

   - Download and install Git from the official website: [Git Downloads](https://git-scm.com/downloads)
   - After installation, set up the environment variable:
     - On Windows:
       - Open the Start Search, type in "env", and select "Edit the system environment variables"
       - In the System Properties window, click on the "Environment Variables" button
       - In the Environment Variables window, highlight the Path variable in the "System variables" section and click the "Edit" button
       - Click "New" and add the path to your Git `bin` and `cmd` folders, e.g., `C:\Program Files\Git\bin` and `C:\Program Files\Git\cmd`

     - On macOS/Linux:
       - Open a terminal window
       - Edit your shell profile file (e.g., `~/.bash_profile`, `~/.bashrc`, `~/.zshrc`, etc.) and add the following line:
         ```sh
         export PATH="/usr/local/git/bin:$PATH"
         ```
       - Save the file and restart your terminal.

## Setting Up the Project

1. **Make a Folder and Open Terminal in VS Code**

   - Create a new folder where you want to clone the project.
   - Open Visual Studio Code.
   - Open the newly created folder in VS Code.
   - Open the terminal in VS Code by pressing `Ctrl + ~` or by navigating to `View` > `Terminal`.

2. **Clone the Repository**

   - Run the following command in the terminal to clone the repository:
     ```bash
     git clone https://github.com/Aloneking789/CurateVista.git
     ```

3. **Navigate to the Project Directory**

   - Change the directory to `LMS`:
     ```bash
     cd LMS
     ```

4. **Install Dependencies**

   - Install the necessary npm packages:
     ```bash
     npm install
     ```

5. **Run the Development Server**

   - Start the development server:
     ```bash
     npm run dev
     ```

## Additional Information

- Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- If you encounter any issues, make sure your Git and Node.js installations are correctly set up and that your environment variables are configured properly.

