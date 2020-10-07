const fs = require("fs");
const files = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

exports.getCodeLabs = (req, res, next) => {
  res.status(200).json({
    success: true,
    mgs: "These are all Entry",
    activity: "VIEWING ALL ENTRY",
    TotalEnrty: files.length,
    data: {
      files,
    },
  });

  next();
};

exports.getCodeLab = (req, res, next) => {
  // const i = req.params.id * 1;
  // const dataInfo = files.find(el.id === id);

  res.status(200).json({
    success: true,

    mgs: `This is the entry of ${req.params.id}`,
    activity: "VIEWING INDIVIDUAL ENTRY",
    // data: {
    //   dataInfo,
    // },
  });

  next();
};

exports.postCodeLab = (req, res, next) => {
  res.status(200).json({
    success: true,
    mgs: `Creating a new Entry `,
    activity: "CREATING ENTRY",
  });

  next();
};

exports.putCodeLab = (req, res, next) => {
  res.status(200).json({
    success: true,
    mgs: `Editing this ${req.params.id} Entry`,
    activity: "EDITING INDIVIDUAL ENTRY",
  });

  next();
};

exports.deleteCodeLab = (req, res, next) => {
  res.status(200).json({
    success: true,
    mgs: `Deleting ${req.params.id} Enrty`,
    activity: "DELETING INDIVIDUAL ENTRY",
  });

  next();
};
