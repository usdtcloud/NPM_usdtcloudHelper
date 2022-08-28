const hideLocation = (str, start = 4, num = 4) => {
    return str.substring(0, start - 1) + "****" + str.substr(str.length - num);
}
module.exports   = hideLocation