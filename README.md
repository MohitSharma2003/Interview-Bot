#  Interview Bot - AI-Powered Voice Mock Interviews

A next-gen AI Interview Bot that simulates real-time, voice-based interviews using  Vapi AI and OpenAI GPT-4. It allows users to personalize the interview experience, speak with the bot naturally, and receive detailed AI-generated feedback and analytics.

 Live Demo: [https://interview-bot-khaki.vercel.app](https://interview-bot-khaki.vercel.app)

---------------------------------------------------------


##  How It Works

### 1. Login & Authentication
- Users log in securely using **Firebase Authentication** (Google, Email).
- Interview history is stored per user account.

### 2. Personalized Interview Configuration
- Choose:
  -  Role (e.g., Frontend Developer)
  -  Experience Level
  -  Type (Technical / Behavioral / Mixed)
  -  Tech Stack (React, Node.js, etc.)
  -  Number of Questions

### 3.  Voice-Based Interview
- Start a live conversation with an AI Interviewer.
- Built using [Vapi AI](https://www.vapi.ai/) for two-way speech interaction (STT & TTS).
- Bot asks questions out loud; user replies by speaking.

### 4.  Transcript Collection
- Each response is transcribed in real time.
- Transcripts are saved and used to generate feedback.

### 5.  AI-Powered Feedback System
- After the interview, the transcript is sent to OpenAI GPT-4 to evaluate:
  - Communication Skills
  - Technical Knowledge
  - Problem-Solving Ability
  - Confidence
  - Role Fit
- A structured feedback report is generated with scores, strengths, and improvement areas.

-----------------------------------------------------------------

## 🛠 Tech Stack

| Tech            | Purpose                                      |
|-----------------|----------------------------------------------|
| **Next.js 14**  | App routing, frontend, backend API handling  |
| **TypeScript**  | Type-safe development                        |
| **Tailwind CSS**| Styling and layout                           |
| **Vapi AI**     | Voice interaction (speech-to-text, TTS)      |
| **OpenAI GPT-4**| Question generation & feedback analysis      |
| **Firebase**    | Authentication & Firestore database          |
| **shadcn/ui**   | Modern and responsive UI components          |
| **Zod**         | Schema validation                            |

------------------------------------------------------------------




