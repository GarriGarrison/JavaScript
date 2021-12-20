const router = require('express').Router();
const { User, Search } = require('../../db/models');


router.get('/', async (req, res) => {
  const { userId } = req.session;
  let user;
  let search;
  let name;
  let lastName

  try {
    user = await User.findAll({
      raw: true,
      attributes: ['first_name', 'last_name', 'isadmin'],
      where: { id: userId },
    });
    req.session.isadmin = user[0].isadmin;

    name = user[0].first_name;
    lastName = user[0].last_name;
    search = await Search.findAll({
      raw: true,
      where: { user_id: userId },
      order: [['id', 'DESC']],
    });
    for (const key of search) {
      key.createdAt = key.createdAt.toString().slice(0, 25);
    }
  } catch (error) {
    res.render('error', {
      message: 'Не удалось получить запись из базы данных.',
      error: {},
    });
  }
  res.render('lk', { name, search, lastName });
});

router.post('/', async (req, res) => {
  try {
    const { email } = req.body
    const findUser = await User.findOne({
      raw: true,
      where: {
        email,
      },
      attributes: ["id", "first_name", "last_name", "isadmin"]
    })
    const listSearch = await Search.findAll({
      raw: true,
      where: {
        user_id: findUser.id,
      },
    })

    res.json({ findUser, listSearch })
  } catch (error) {
    console.log(error);

  }
})

router.put('/', async (req, res) => {
  let status;

  try {
    status = await User.update({isadmin: req.body.isadmin},{where:{id:req.body.id}, returning: true, plain: true})
  } catch (error) {
    console.log(error);
  }
  const respont = await User.findOne({
    raw: true,
    where: {
      id:req.body.id,
    },
    attributes: ["isadmin"]
  })
  res.status(201).json(respont)
})


module.exports = router;
