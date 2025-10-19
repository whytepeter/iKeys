# 🎹 iKeys - Interactive Piano Learning App

**Learn piano chords through interactive gameplay and visual feedback**

🌐 **Live Demo**: [iKeys.onrender.com](https://iKeys.onrender.com)

---

## 🎯 What is iKeys?

iKeys is a modern, interactive web application that makes learning piano fun and accessible. Whether you're a complete beginner or looking to improve your chord knowledge, iKeys provides an engaging way to learn piano using just your computer keyboard.

### ✨ Key Features

- 🎵 **Play Piano with Your Keyboard** - Transform your computer keyboard into a virtual piano with an intuitive two-hand layout
- 📚 **Song Library** - Learn popular songs including "Let It Be", "Imagine", "Someone Like You", and more
- 🎓 **Multiple Learning Modes**:
  - **Auto Play** - Watch and listen as chords play automatically
  - **Practice Mode** - Wait for you to play the correct chords
  - **Wait Mode** - Pause until you're ready to play
  - **Free Play** - Explore and experiment without guidance
- 🎼 **Visual Chord Guide** - See falling chords with finger positions and keyboard mappings
- 🎬 **Real-time Feedback** - Visual indicators show you exactly which keys to press
- 📼 **Record & Playback** - Capture your performances and play them back
- 👤 **User Profiles** - Track your progress and achievements (with Appwrite backend)
- 🔐 **Authentication** - Secure user accounts with email/password login
- ☁️ **Cloud Storage** - Save your recordings to the cloud and access them anywhere
- 📤 **Publish & Share** - Share your recordings with the community
- 🔍 **Searchable Library** - Find songs, tutorials, and user recordings easily
- 🎨 **Beautiful UI** - Modern, dark-themed interface with smooth animations

---

## 🚀 How It Works

### Keyboard Layout

iKeys uses an intuitive two-hand keyboard layout:

**Left Hand (Octave 3):**
- White keys: `A` `S` `D` `F` `G` `H` `J`
- Black keys: `W` `E` `T` `Y` `U`

**Right Hand (Octave 4):**
- White keys: `K` `L` `;` `'` `Enter`
- Black keys: `I` `O` `P` `]`

**Extended Range (Octave 5):**
- White keys: `Z` `X` `C` `V` `B` `N` `M`
- Black keys: `Q` `2` `3` `5` `6`

### Learning Flow

1. **Choose a Song** - Browse the song library and select a track to learn
2. **Select Your Mode** - Pick a learning mode that suits your skill level
3. **Follow the Guide** - Watch falling chords and see which keys to press
4. **Practice** - Play along and build muscle memory
5. **Record** - Capture your performance and review later

---

## 🎓 For Beginners

iKeys includes a comprehensive **Piano Basics Tutorial** that teaches:
- The musical scale (Do-Re-Mi-Fa-Sol-La-Ti-Do)
- How to play simple melodies
- Basic chord progressions
- Two-hand coordination

---

## 🛠️ Technology Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Language**: TypeScript
- **Backend**: Appwrite (Authentication, Database, Storage)
- **Audio Engine**: Tone.js
- **State Management**: Pinia (with persistence)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

---

## 💻 Local Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd iKeys

# Install dependencies
npm install

# Set up Appwrite (see APPWRITE_SETUP.md)
# Create .env file with your Appwrite credentials
cp .env.example .env
# Edit .env with your Appwrite project details

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

**Note**: The app will work in offline mode without Appwrite, but cloud features (authentication, cloud storage, publishing) require an Appwrite backend. See `APPWRITE_SETUP.md` for setup instructions.

### Build for Production

```bash
npm run build
```

---

## 🎮 Usage Tips

1. **Use headphones** for the best audio experience
2. **Start with Auto Play** to hear how the song should sound
3. **Practice Mode** helps you learn the correct finger positions
4. **Record yourself** to track your improvement over time
5. **Explore the Chord Dictionary** to learn chord theory

---

## 📱 Device Requirements

iKeys is designed for **desktop use only**. A physical keyboard is required to play the piano. Mobile devices are not currently supported.

**Minimum Requirements:**
- Desktop computer (Windows, Mac, or Linux)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Physical keyboard
- Audio output (speakers or headphones)

---

## 🎵 Song Library

iKeys features three categories:

### 📚 Songs
Pre-loaded popular songs:
- 🎸 Let It Be - The Beatles
- 🎤 Someone Like You - Adele
- 🎹 Imagine - John Lennon
- ❤️ Perfect - Ed Sheeran
- 🎼 All of Me - John Legend
- 🎶 Piano Ballad Demo

### 🎙️ My Songs
Your personal recordings:
- Record your performances
- Publish to share with the community
- Unpublish to keep them private
- Cloud sync when logged in

### 🎓 Tutorials
Step-by-step learning content:
- Piano Basics Tutorial (Do-Re-Mi-Fa-Sol-La-Ti-Do)
- Scale practice
- Simple melodies
- Two-hand coordination

More content is being added regularly!

---

## 🌟 Features in Detail

### Falling Chords Visualization
Watch chords fall down the screen in sync with the music, showing you exactly when to play each note.

### Chord Info Panel
Displays:
- Current chord name
- Keyboard keys to press
- Finger positions (1-5)
- Hand guidance (left/right/both)
- Next chord preview
- Song section (verse, chorus, etc.)

### Recording Engine
- Record your playing in real-time
- Save recordings with custom names
- Play back recordings with full visualization
- Track recording duration and note accuracy

### User Progress
- Create a profile to track your journey
- View songs completed
- Monitor practice time
- Earn achievements
- Cloud sync across devices (with Appwrite)

### Cloud Features (Requires Appwrite Setup)
- **Authentication**: Secure user accounts with email/password
- **Cloud Storage**: Save recordings to the cloud
- **Publishing**: Share your recordings with the community
- **Cross-Device Sync**: Access your data from any device

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Built with ❤️ using Vue.js and Tone.js
- Piano samples from Salamander Grand Piano
- Inspired by the joy of learning music

---

## 🔗 Links

- **Live App**: [iKeys.onrender.com](https://iKeys.onrender.com)
- **Appwrite Setup Guide**: See `APPWRITE_SETUP.md`
- **Report Issues**: Create an issue on GitHub
- **Feedback**: We'd love to hear from you!

---

**Start your piano learning journey today! 🎹✨**

