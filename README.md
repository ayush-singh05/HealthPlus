# Health Management System App
## Overview
This project is a Health Management System App developed using Next.js, Shadcn UI, Appwrite, and Tailwind CSS. The application provides an easy-to-use platform for patients to schedule appointments with doctors and allows administrators to manage these appointments efficiently.

## Features
- **User Registration:** Patients can register by providing necessary details.
- **Appointment Scheduling:** Users can schedule appointments with their preferred doctors.
- **Confirmation:** Upon successful booking, patients receive a confirmation notification on their mobile devices.
- **Admin Panel:** Admins can view, reschedule, or cancel appointments.
- **Data Management:** The app uses Appwrite to store patient information, appointment details, and doctor information.
## Tech Stack
### Frontend:
- Next.js - For building the user interface and managing routing.
- Shadcn UI - For a consistent and modern UI.
- Tailwind CSS - For styling the application.
### Backend:
- Appwrite - For handling database operations and managing backend services.
## Database Structure
The data in this application is managed using Appwrite, where three primary collections are maintained:

**Patient Information:** Stores all the details related to the patients.
**Appointment Information:** Keeps track of all scheduled appointments.
**Doctor Information:** Contains information about doctors and the patients they are attending.
## How to Run the Project
Clone the Repository:

```bash

git clone https://github.com/your-username/health-management-system.git
cd health-management-system
Install Dependencies:
```
```bash
npm install
Set Up Appwrite:
```
- Follow the Appwrite documentation to set up your backend.
- Ensure you have created the required collections for patient info, appointment info, and doctor info.
- Run the Development Server:

```bash
npm run dev
The app will be available at http://localhost:3000.
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request.


## Acknowledgements
* [Next.js](https://nextjs.org/)
* [Shadcn UI](https://ui.shadcn.com/)
* [Appwrite](https://cloud.appwrite.io/)
* [Tailwind CSS](https://tailwindcss.com/)
