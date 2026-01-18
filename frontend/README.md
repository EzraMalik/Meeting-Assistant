## Getting Started

# 🧠 Smart Meeting Assistant

**Smart Meeting Assistant** built to enhance virtual meetings by providing real-time insights, summaries, and intelligent assistance.  
The application leverages cutting-edge AI models and real-time communication to make meetings more productive and actionable.

---

## 🚀 Features

- 🎙️ **Real-time Meeting Streaming** using Stream
- 🧠 **AI-Powered Insights & Summaries** with Gemini AI Studio
- 👁️ **Vision-Based Analysis** using Vision Agents
- 📝 **Automated Meeting Notes & Highlights**
- ⏱️ **Live Transcription & Context Awareness**
- 🎨 **Modern, Responsive UI** built with Tailwind CSS
- ⚡ **Fast and Scalable Architecture** with Next.js

---

## 🛠️ Tech Stack

### Frontend
- **Next.js**
- **React**
- **Tailwind CSS**

### AI & Intelligence
- **Gemini AI Studio**
- **Vision Agents**

### Communication & Streaming
- **Stream**

---

## 📂 Project Structure

```bash
├── app/                # Next.js app router
├── components/         # Reusable React components
├── lib/                # Utility functions & helpers
├── .env.example        # Environment variables template
└── README.md
```

---

⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-username/smart-meeting-assistant.git
cd smart-meeting-assistant-frontend

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Configure Environment Variables
Create a .env.local file and add the required keys:

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
GEMINI_API_KEY=your_gemini_api_key
VISION_AGENT_API_KEY=your_vision_agent_key
⚠️ Never commit your .env.local file to GitHub.

▶️ Running the Application
npm run dev
# or
yarn dev
Open your browser and navigate to:

http://localhost:3000

---

Built with ❤️ by Abdul using Next.js, React, Tailwind, Stream.io, Gemini AI, Vision Agents.