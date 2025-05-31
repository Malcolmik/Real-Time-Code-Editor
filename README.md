# Live Editor – Real-Time Collaborative Code Editor

## Overview

**Live Editor** is a real-time collaborative code editing platform designed to improve developer productivity through synchronous collaboration. Built as part of a final-year BSc (Hons) Computer Science project at the University of Wolverhampton, this tool allows multiple users to join a virtual coding space ("room") and edit code simultaneously. The application aims to simulate a seamless, shared programming environment, addressing communication bottlenecks, streamlining code reviews, and enhancing team productivity.

This project also supports academic research into the effectiveness of real-time collaborative tools compared to traditional asynchronous workflows like Git-based version control.

---

## Features

- **Real-Time Editing:** Multiple users can type and see code updates live in a shared workspace.
- **Room-Based Sessions:** Users can create or join a session using a unique room ID.
- **User Presence:** Displays all participants currently active in a room.
- **Conflict Management:** Synchronization algorithms ensure consistency across concurrent edits.
- **CodeMirror Integration:** Provides a rich, syntax-highlighted editing interface.
- **WebSocket Communication:** Enables low-latency, bidirectional messaging between users.

---

## Technologies Used

- **Frontend:** React.js, CodeMirror
- **Backend:** Node.js, Express.js
- **Realtime Communication:** WebSockets
- **Session Management:** UUID for room ID generation
- **Hosting/Deployment:** Vercel (or equivalent)

