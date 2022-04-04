// creating a base url (all api requests will use it)
const base_url = "https://api.rawg.io/api/";

// formatting time
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getCurrentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear;

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?key=e52d6b514f5c4472b040fcd5d92859d0&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=64`;
const upcomingGames = `games?key=e52d6b514f5c4472b040fcd5d92859d0&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const newGames = `games?key=e52d6b514f5c4472b040fcd5d92859d0&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const gameScreenshotURL = (game_id) =>
  `${base_url}games?key=e52d6b514f5c4472b040fcd5d92859d0/${game_id}/screenshots`;

export const gameDetailsURL = (game_id) =>
  `${base_url}games?key=e52d6b514f5c4472b040fcd5d92859d0/${game_id}`;

export const searchGameURL = (game_name) =>
  `${base_url}games?key=e52d6b514f5c4472b040fcd5d92859d0&search=${game_name}&page_size=9`;
