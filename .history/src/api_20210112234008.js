// creating a base url (all api requests will use it)
const base_url = 'https://api.rawg.io/api/'

// formatting time
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else { return month }
}

const getCurrentDay = () => {
    const day = new Date().getDate() 
    
    if (day < 10) {
        return `0${day}`
    } else { return day }
}

const getCurrentYear = new Date().getFullYear()
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear;

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=16`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;


export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () =>  `${base_url}${newGames}`;

export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
