var express = require('express');
const cors = require('cors');
var router = express.Router();

/* GET users listing. */
router.get('/donationByGender',cors(), function (req, res) {
  const data = [];
  data.push (["Gender","Amount"]);
  data.push(["male",19000]);
  data.push(["female",28000]);

  res.send(data);
});

router.get('/donationByRange',cors(), function (req, res) {
  let data = [];
  data.push (["amountRange","Count"]);
  data.push(["1000-5000",11]);
  data.push(["5000-10000",8]);
  data.push(["10000-15000",6]);
  data.push(["15000-20000",5]);
  data.push(["20000 & Above",3]);
  res.send(data);
})
module.exports = router;
