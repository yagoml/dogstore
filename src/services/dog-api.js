// https://dog.ceo/dog-api/documentation/

const url = 'https://dog.ceo/api/'

export const listBreeds = () => {
  return new Promise((resolve, reject) => {
    fetch(url + 'breeds/list/all')
      .then(response => response.json())
      .then(data => resolve(data.message))
      .catch(e => {
        reject(e)
      })
  })
}

export const getBreedImage = (breed) => {
  return new Promise((resolve, reject) => {
    fetch(url + `breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => resolve(data.message))
      .catch(e => {
        reject(e)
      })
  })
}