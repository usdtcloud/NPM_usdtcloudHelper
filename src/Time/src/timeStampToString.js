const timeStampToString = (str, format = "Y-m-d H:i:s") => {
    format = format.toLowerCase();

    let formatArr = ["y", "m", "d", "h", "i", "s"];

    let timeData = format;

    let dateNum = new Date(str * 1000);

    formatArr.forEach((item) => {

        if (format.search(item) != -1) {

            switch (item) {

                case "y": {
                    timeData = timeData.replace(eval("/" + item + "/g"), dateNum.getFullYear())
                    break;
                }

                case "m": {
                    let MM = dateNum.getMonth() + 1;
                    MM = MM < 10 ? ('0' + MM) : MM; //月补0
                    timeData = timeData.replace(eval("/" + item + "/g"), MM)
                    break;
                }

                case "d": {
                    let d = dateNum.getDate();
                    d = d < 10 ? ('0' + d) : d; //天补0
                    timeData = timeData.replace(eval("/" + item + "/g"), d)
                    break;
                }

                case "h": {
                    let h = dateNum.getHours();
                    h = h < 10 ? ('0' + h) : h; //小时补0
                    timeData = timeData.replace(eval("/" + item + "/g"), h)
                    break;
                }

                case "i": {
                    let m = dateNum.getMinutes();
                    m = m < 10 ? ('0' + m) : m; //分钟补0
                    timeData = timeData.replace(eval("/" + item + "/g"), m)
                    break;
                }

                case "s": {
                    let s = dateNum.getSeconds();
                    s = s < 10 ? ('0' + s) : s; //秒补0

                    timeData = timeData.replace(eval("/" + item + "/g"), s)
                    break;
                }

                default:
            }

        }
    })

    return timeData;
}
module.exports = timeStampToString