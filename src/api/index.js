import axios from 'axios';

const $api = axios.create({
  baseURL: 'https://api.anilibria.tv/v3',
});
export const getSchedule = async (text) => {
  const schedule = await $api.get(`/title/${text.length > 0 ? `search?search=${text}` : 'changes?limit=15'}`);

  return schedule
};

export const getTitle = async (code) => {
  const title = await  $api.get(`/title?code=${code}&playlist_type=array`)
  return title
}

export const getUpdate = async () => {
  const update = await  $api.get(`/title//v3/title/updates?limit=20`)
  return update
}

export const getGenres = async () => {
  const genres = await  $api.get(`genres`)
  return genres
}