const path = require("path")
const controller = {
    index: (req, res) => {
        return res.sendFile(path.resolve(__dirname, "../views/index.html"))
    },
}
module.exports = (controller)