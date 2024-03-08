import axios from 'axios'

const spellsEndpoint = 'http://localhost:3210/spells'

export const getAllSpells = () =>
  axios
    .get(spellsEndpoint)
    .then(res => res.data)
    .catch(error => console.error('Error: ', error.message))
