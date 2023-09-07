const headerParser = (req) => {
	return {
		ipaddress: req.ip,
		language: req.headers["accept-language"],
		software: req.headers["user-agent"],
	};
};

module.exports = headerParser;
