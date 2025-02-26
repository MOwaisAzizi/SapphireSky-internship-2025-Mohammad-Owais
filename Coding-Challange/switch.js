// 9- Use switch to print the corresponding season:
// 12, 1, 2 → Winter
// 3, 4, 5 → Spring
// 6, 7, 8 → Summer
// 9, 10, 11 → Fall
function correspondingSeason(key) {
    let season;

    switch (key) {
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Fall';
            break;
        default:
            season = 'Invalid month';
    }
    return season;
}
console.log(correspondingSeason(5));