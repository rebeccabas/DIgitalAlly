
# Digital Ally

**Digital Ally for Women’s Rights** is an AI-powered platform that helps activists and communities track, document, and report women’s rights violations. It monitors news, social media, and official reports in real time, connects users to support networks, and provides tools for automated reporting and legal aid. The platform empowers global advocacy for women’s rights and safety.


## Core Features
- Global Incident Map

Track and monitor women's rights violations worldwide
Visualize incident locations on an interactive map
Explore details about the reported incidents

- Report an Incident

Report incidents safely and securely through a user-friendly form
Incident type selection (e.g., harassment)
Provide a detailed description of the incident
Locate the incident on the map
Attach photos and voice notes as evidence
Option to submit the report anonymously

- Resource Hub

Access a wide range of support services and educational resources
 1. Emergency Hotlines: 24/7 crisis support and emergency services
 2. Legal Resources: Free legal aid and documentation
 3. Support Groups: Connect with local support networks
 4. Counseling: Professional mental health support

- Sahayak: Your Digital Support

Receive digital support for inappropriate behavior or comments
Share your concerns and experiences with ....


## Built with
- React
- Node
- FastAPI
- Firebase
- Gemini API


## Installation

### 1. Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/SamipSGz/DIgitalAlly.git
cd DIgitalAlly
```
### 2. Install Dependencies
Install both front-end and back-end dependencies.
```bash
npm install
cd backend 
npm install
```

### 3. Set Up Firebase

Go to your Firebase Console, and create a new project.

Add Firebase configuration to your project. This should include:
-API key
- Auth domain
- Database URL
- Project ID
- Storage bucket
- Messaging sender ID
- App ID

Copy these credentials into your project’s Firebase config file 
(firebaseConfig.js)

### 4. Mail the report and complaint letter
```bash
cd backend
node server.js
node complaint.js
```

### 5. Clone the backend Repository

```bash
https://github.com/rebeccabas/digital-ally-backend.git
cd digital-ally-backend
```
### 6. Install the requirements

```bash
pip install -r requirements.txt
```


### 7. Setup Gemini API
- Sign up for access to the Gemini API and get your API key.
- Add the API key to your back-end .env file or a similar configuration file:

```env
GEMINI_API_KEY=your-gemini-api-key
```
### 8. Run the backend for Chat and complaint generation

```bash
python main.py 
```
### 9. Run the site
```bash
npm run dev
```



## Authors

- [@SamipSGz](https://github.com/SamipSGz)
- [@rebeccabas](https://github.com/rebeccabas)



    
