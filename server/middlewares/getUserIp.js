const getUserIP = (req, res) => {
    const userIpAddress = req.ip;
    console.log("Getting IP:", userIpAddress);
    res.json({ userIpAddress });
};

module.exports = { getUserIP };
