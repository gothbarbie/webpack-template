import big from './assets/img/big.jpg'
import small from './assets/img/small.jpg'
import './styles/image_viewer.css'

const image = document.createElement('img')
image.src = 'http://lorempixel.com/400/400'

const bigImage = document.createElement('img')
bigImage.src = big

document.body.appendChild(bigImage)
