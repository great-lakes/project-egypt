// var mqtt = require('mqtt')
// var client = mqtt.connect('wss://GabbyHub.azure-devices.net:443/$iothub/websocket?iothub-no-client-cert=true', 'mqtt')
// // wss://<iothubname>.azure-devices.net/$iothub/websocket?iothub-no-client-cert=true.
// client.on('connect', function () {
//   client.subscribe('presence')
//   client.publish('presence', 'hello mqtt')
//   console.log('connected')
// })

const ws = new WebSocket(
  'wss://GabbyHub.azure-devices.net:443/$iothub/websocket?iothub-no-client-cert=true',
  'mqtt')

ws.binaryType = 'arraybuffer'

ws.onopen = function (event) {
  console.log('opened!!!', event)
}

ws.onmessage = function (data) {
  console.log('message received: ' + data)
}
