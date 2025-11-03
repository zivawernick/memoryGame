import { useState } from 'react'
import './App.css'
import zlogo from './assets/zmw-logo.png'
import MatchingGame from './MatchingGame'

function App() {
  //const [count, setCount] = useState(0)
  // State to control game visibility: true to show game, false to show main app content
  const [showGame, setShowGame] = useState(false);
  //const [chatInput, setChatInput] = useState('');

  console.log("App component is rendering!"); // Debugging log for App component

  // Function to set showGame to true, which will render the MatchingGame
  const startGame = () => {
    setShowGame(true);
  };

  // Function to set showGame to false, returning to the main app content
  // This is passed as a prop to MatchingGame and called when the game ends or is exited
  const returnFromGame = () => {
    setShowGame(false);
  };
/*
  const handleChatSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = chatInput.trim().toLowerCase();
    if (normalized.includes('memory')) {
      startGame();
    }
    setChatInput('');
  };
*/
  return (
    <>
      {showGame ? (
        // If showGame is true, only the MatchingGame component is rendered
        <MatchingGame onGameEnd={returnFromGame} />
      ) : (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-4">
          {/* Top row actions */}
          <div className="w-full max-w-5xl flex items-center justify-end gap-3 mb-6">
            <button
              onClick={() => alert('Settings coming soon')}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Settings
            </button>
            <button
              onClick={startGame}
              className="px-4 py-2 rounded-md bg-green-600 text-black font-semibold hover:bg-green-700 transition-colors"
            >
              Memory Game
            </button>
          </div>

          {/* Logo section */}
          <div className="flex gap-8 mb-8">
            <a href="https://zivawernick.wixstudio.com/home" target="_blank">
              <img src={zlogo} className="logo hover:opacity-80 transition-opacity" alt="ZMW logo" />
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Memory Game</h1>

            {/* Button to start the Matching Game */}
            <button
              onClick={startGame}
              className="mt-6 px-8 py-4 bg-green-600 text-black font-bold rounded-lg shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Start Matching Game
            </button>
          </div>
      )}
    </>
  )
}

export default App