
export const deliveryList = [
  {
    id: 1,
    title: '1 Weeks',
    selected: false,
    key: 'location',
  },
  {
    id: 2,
    title: '1 Weeks',
    selected: false,
    key: 'location',
  },
  {
    id: 3,
    title: '1 Month',
    selected: false,
    key: 'location',
  },
  {
    id: 4,
    title: 'more than 1 month',
    selected: false,
    key: 'location',
  },
];

export const loadImage = image => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image()
    loadImg.src = image
    loadImg.onload = () =>
      setTimeout(() => {
        resolve(image.url)
      }, 2000)
    loadImg.onerror = err => reject(err)
  })
}