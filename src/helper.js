
export const deliveryList = [
  {
    id: 1,
    title: '1 Weeks',
    selected: false, 
  },
  {
    id: 2,
    title: '2 Weeks',
    selected: false, 
  },
  {
    id: 3,
    title: '1 Month',
    selected: false, 
  },
  {
    id: 4,
    title: 'more than 1 month',
    selected: false, 
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