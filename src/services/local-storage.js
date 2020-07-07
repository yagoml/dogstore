const pricesKey = 'breeds_prices'
const purchaseKey = 'purchase_data'

export const savePurchaseData = (form) => localStorage.setItem(purchaseKey, JSON.stringify(form))

export const purchaseData = () => JSON.parse(localStorage.getItem(purchaseKey))

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
  localStorage.setItem(pricesKey, JSON.stringify(prices))
}

export const getPrices = () => JSON.parse(localStorage.getItem(pricesKey))

const generatePrice = (min = 10, max = 2000) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2))