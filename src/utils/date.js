
export function getMediumDate(date){
    const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const dt = new Date(date);
    return `${monthList[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
};