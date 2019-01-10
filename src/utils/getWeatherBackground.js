'use string'

const images = {
  Clear: require('../../assets/bg/clear.png'),
  Hail: require('../../assets/bg/hail.png'),
  'Heavy Cloud': require('../../assets/bg/heavy-cloud.png'),
  'Light Cloud': require('../../assets/bg/light-cloud.png'),
  'Heavy Rain': require('../../assets/bg/heavy-rain.png'),
  'Light Rain': require('../../assets/bg/light-rain.png'),
  Showers: require('../../assets/bg/showers.png'),
  Sleet: require('../../assets/bg/sleet.png'),
  Snow: require('../../assets/bg/snow.png'),
  Thunder: require('../../assets/bg/thunder.png'),
}

export default weather => images[weather]
