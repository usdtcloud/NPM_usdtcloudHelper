const replaceAll = (text, repstr, newstr) => {
    return text.replace(new RegExp(repstr, "gm"), newstr);
}
module.exports   = replaceAll