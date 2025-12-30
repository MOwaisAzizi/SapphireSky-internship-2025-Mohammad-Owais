//3-Traffic Light System
function trafficLightController(color) {
    if (typeof color !== 'string') return 'We expected an String!'
    color = color.toLocaleLowerCase()
    switch (color) {
        case 'red': return 'Stop'
        case 'green': return 'Go...'
        case 'yellow': return 'Slow down'
        default: return 'Not Valid Color! [red,green,yellow]'
    }
}
console.log(trafficLightController('Red'));
