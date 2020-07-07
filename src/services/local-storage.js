const lsKey = 'breeds_prices'

export const setPrices = (dogs) => {
  const prices = {}

  for(const dog of Object.entries(dogs)) {
    const [breed, subBreeds] = dog
    if (subBreeds.length) {
      const subPrices = {}
      for (const sub of subBreeds) subPrices[sub] = generatePrice(10, 500)
      prices[breed] = {
        price: generatePrice(),
        subBreeds: subPrices
      }
    } else prices[breed] = generatePrice()
  }
  localStorage.setItem(lsKey, JSON.stringify(prices))
}

export const getPrices = () => JSON.parse(localStorage.getItem(lsKey))

const generatePrice = (min = 10, max = 2000) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2))