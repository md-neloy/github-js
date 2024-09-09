const koli = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName:"google"
}
function password(obj) {
    if (obj.birthYear.toString().length != 4 || obj.birthYear === undefined || obj.siteName === undefined || obj.siteName === undefined) return "invalide";
    let passwordString = obj.siteName[0].toUpperCase() +obj.siteName.substring(1) + '#' + obj.name + '@' + obj.birthYear;
    return passwordString;
}

console.log(password(koli));