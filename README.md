# 🚨 Emergency & Women Safety Tracker

A real-time emergency response mobile application designed to help users — especially women — trigger **silent SOS alerts**, share **live location**, and automatically collect **audio evidence** during emergencies.

This project focuses on **panic situations**, **low-connectivity scenarios**, and **privacy-first evidence handling**.

---

## 📌 Problem Statement

In emergency situations:
- Unlocking a phone may not be possible
- Internet connectivity may be unstable
- Victims may not be able to speak or call for help
- Evidence is often missing after the incident

Most existing safety apps fail under these real-world constraints.

---

## 🎯 Solution

This system allows users to trigger an SOS using **secret gestures** (button presses, silent triggers) and automatically:
- Alert trusted contacts
- Share live location
- Record audio evidence
- Escalate alerts if no response is received

All while remaining **silent and discreet**.

---

## 🔑 Key Features

### 🆘 SOS Trigger Mechanisms
- In-app SOS button
- Power button press (e.g., 3x press)
- Volume key pattern
- Silent mode support

### 📍 Live Location Tracking
- Real-time GPS updates
- Google Maps live tracking link
- Route history stored securely

### 🎤 Automatic Audio Recording
- Background audio recording during SOS
- Encrypted before upload
- Used as potential evidence

### 📇 Trusted Contacts
- Priority-based contact list
- Auto-call escalation if no response
- SMS fallback when internet is unavailable

### 📞 Fake Call Feature
- Simulated incoming call screen
- Custom caller name
- Works offline

---

## 🏗 System Architecture
Mobile App (React Native)

├── Background Services

├── SOS Triggers

├── GPS & Audio Recorder

└── API Communication

↓

Backend Server (Node.js + Express)

├── Authentication (JWT)

├── SOS Management

├── Notification Engine

├── Evidence Storage

└── Admin Logs

↓

Database (MongoDB)

├── Users

├── Trusted Contacts

├── SOS Events

└── Location History
.....

---

## 🛠 Tech Stack

### Mobile App
- React Native
- Native Android modules
- Background services

### Backend
- Node.js
- Express.js
- MongoDB
- Redis (rate limiting & cooldowns)

### Third-Party Services
- Twilio (SMS / Calls)
- Google Maps API
- Firebase / AWS S3 (media storage)

---

## 🔐 Security & Privacy

- Audio files encrypted before upload
- Location access enabled **only during SOS**
- JWT-based authentication
- Rate-limiting to prevent misuse
- Panic delete option (local data wipe)

---

## ⚠️ Edge Case Handling

| Scenario | Handling |
|-------|--------|
No Internet | SMS fallback |
App killed | Foreground service |
Low battery | Reduced GPS frequency |
False trigger | 10-second cancel window |

---

## 📅 MVP Development Plan

| Day | Task |
|----|----|
Day 1 | Authentication & contacts |
Day 2 | SOS trigger & backend logic |
Day 3 | Live location tracking |
Day 4 | SMS / call alerts |
Day 5 | Audio recording |
Day 6 | Fake call & UI polish |
Day 7 | Testing & documentation |

---

## 📂 Project Structure


---

## 🛠 Tech Stack

### Mobile App
- React Native
- Native Android modules
- Background services

### Backend
- Node.js
- Express.js
- MongoDB
- Redis (rate limiting & cooldowns)

### Third-Party Services
- Twilio (SMS / Calls)
- Google Maps API
- Firebase / AWS S3 (media storage)

---

## 🔐 Security & Privacy

- Audio files encrypted before upload
- Location access enabled **only during SOS**
- JWT-based authentication
- Rate-limiting to prevent misuse
- Panic delete option (local data wipe)

---

## ⚠️ Edge Case Handling

| Scenario | Handling |
|-------|--------|
No Internet | SMS fallback |
App killed | Foreground service |
Low battery | Reduced GPS frequency |
False trigger | 10-second cancel window |

---

## 📅 MVP Development Plan

| Day | Task |
|----|----|
Day 1 | Authentication & contacts |
Day 2 | SOS trigger & backend logic |
Day 3 | Live location tracking |
Day 4 | SMS / call alerts |
Day 5 | Audio recording |
Day 6 | Fake call & UI polish |
Day 7 | Testing & documentation |

---

## 📂 Project Structure

root/

├── backend/

  │ ├── controllers/

│    ├── routes/

│    ├── models/

│ └─ services/

└── mobile/


├── screens/

├── services/

├── hooks/

└── background/

---

## 🧪 Future Enhancements

- Route deviation detection (cab safety)
- Geo-fenced safe zones
- Police / NGO escalation
- Wearable device integration
- iOS support

---

## 💬 Interview Pitch

> “I built a women safety system focusing on silent emergencies, real-time tracking, and evidence collection, designed to work even when the internet is unreliable.”

---

## 📄 License

MIT License

---

## 🤝 Contributions

Contributions, issues, and feature requests are welcome.  
Feel free to fork and improve the project.

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.
