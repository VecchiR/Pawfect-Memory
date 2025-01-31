<h1 align="center">Pawfect Memory 🐶</h1>

## What is it?

Pawfect Memory is a memory card game where players must click on each unique card only once to win. Every time a card is clicked, the board is shuffled, making it a challenge to remember which cards have already been selected. The game features three levels, each progressively more difficult with additional cards. 
It sounds easy, but it's more challenging than it seems — [give it a try! ](https://memory-card-game-seven-rho.vercel.app/)


## Why was it made?

This project was created as part of [The Odin Project](https://www.theodinproject.com/)'s React course curriculum. The primary goal was to practice using React's `useState` and `useEffect` hooks to manage state effectively while fetching and utilizing data from an external API.


## How was it made?

This project was built using:

- **React** with **Vite** for a fast development environment
    
- **HTML, CSS, and vanilla JavaScript** for structuring, styling, and logic
    
- **Dog API** ([dog.ceo](https://dog.ceo/dog-api/)) to fetch random dog images
    
- **Generative AI** for the logo design
  

## How it works

- When the app starts, it fetches a set number of dog images (based on the hardest level) and stores them.
    
- To ensure a good fit on the cards, images are filtered based on their aspect ratio.
    
- The cards are displayed on the game board, and every click updates the gamestates (if the card is clicked or not, the current score, the highest score achieved in each level)

    - **Records** that the card was clicked.
        
    - **Tracks the current score** and the **highest score** achieved in each level.

- Shuffles the cards or shows the game over screen if conditions are met (WIN - all cards were clicked, or LOSE - a card was clicked twice)


## Major Functions

- `fetchDogs` - Fetches random dog images and filters them by aspect ratio.
    
- `shuffleCards` - Randomly shuffles the card order after each selection.
    
- `handleCardClick` - Manages game logic when a card is clicked.

- `updateScoreboard` - Updates the current score and the highest score achieved in each level. 
        
- **React Hooks (**`useState`**,** `useEffect`**)** - Manage state updates and API calls.
    

## Dependencies

This project requires:

- [React](https://react.dev/) - Frontend framework
    
- [Vite](https://vitejs.dev/) - Build tool
    
- [Dog API](https://dog.ceo/dog-api/) - Source of random dog images
    
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - For styling
    

## Build & Deploy Instructions

### Running Locally

1. **Clone the repository:**
    
    ```
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    cd YOUR_REPOSITORY
    ```
    
2. **Install dependencies:**
    
    ```
    npm install
    ```
    
3. **Start the development server:**
    
    ```
    npm run dev
    ```

### Deployment

This project is deployed using [Vercel](https://vercel.com/) and you can check the [live demo here](https://memory-card-game-seven-rho.vercel.app/)

To deploy on Vercel:

1. Push your repository to GitHub.
    
2. Import the repository into Vercel.



## 👤 Contact info - let's connect!

- **E-mail:** vecoding@gmail.com
- **LinkedIn:** [@rafaelvecchisilva](https://www.linkedin.com/in/rafaelvecchisilva/)
- **Discord:** @vecchit0
