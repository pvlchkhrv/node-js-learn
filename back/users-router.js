const {addUser, getUsers} = require("./repository");
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', async (req, res) => {
  let users = await getUsers();
  if(!!req.query.search) {
    users = users.filter(u => u.name.indexOf(req.query.search) > -1);
  }
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const users = await getUsers();
  let userId = req.params.id;
  let user = users.find(u => u.id === +userId);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }


});

router.post('/', async(req, res) => {
  let name = req.body.name;
  await addUser(name);
  res.send({success: true});
});

module.exports = router;
