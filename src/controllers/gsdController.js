import gsdDao from "../dao/gsd.js";

let gsdController = {};

gsdController.getUser = async (req, res) => {
    const output = await gsdDao.getUser(req.params.id);
    res.send(output);
}

export default gsdController;