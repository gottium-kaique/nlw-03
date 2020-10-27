/* eslint @typescript-eslint/no-var-requires: 'off'*/

import { Icon } from 'leaflet'

let happyMapIcon: Icon

if (process.browser) {
  const { icon } = require('leaflet')
  happyMapIcon = icon({
    iconUrl: '../map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
  })
}

export default happyMapIcon
