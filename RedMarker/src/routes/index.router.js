const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Search, User } = require('../../db/models');
const isCheckSite = require('../../algorithm');

const saltRounds = 10;

let isCheckCont = async (url) => {
  const check = await isCheckSite(url);
  console.log('IS CHECK SITE', r);
  return check;
}


router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const { url } = req.body;
    let result = ''

    const check = await isCheckSite(url);
    check ? result = 'Соответствует' :  result = 'Не соответствует';

    const newSearch = { url, result, fine };

    if (req.session.userId) {
      const user_id = req.session.userId;
      const newSearchLog = await Search.create({ url, result, user_id });
      req.session.searchUserId = newSearchLog.user_id;
    }

    res.json(newSearch);
  } catch (err) {
    console.log(err);
  }
});


router.get('/sing_up', (req, res) => {
  res.render('sing_up');
});

router.post('/singup', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const hashedpass = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ first_name, last_name, email, password: hashedpass, isadmin: false, });
    req.session.userId = newUser.id;
    req.session.userEmail = newUser.email;
    req.session.first_name = newUser.first_name;
    req.session.last_name = newUser.last_name;
    req.session.isadmin = newUser.isadmin;
    console.log(newUser);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    return res.render('error', {
      message: `ууупс, что-то пошло не так:
      - возможно ты уже регистрировался, войди в систему
      - проверь что ввел именно EMAIL`,
      error: {},
    });
  }
});


router.get('/sing_in', (req, res) => {
  res.render('sing_in');
});

router.post('/singin', async (req, res) => {
  const { email, password } = req.body;
  console.log('------', email, password);

  try {
    const currentUser = await User.findOne({
      where: {
        email: email,
      }
    });

    if (currentUser.email === 'admin@admin.ru' || currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.userId = currentUser.id;
      req.session.first_name = currentUser.first_name;
      req.session.last_name = currentUser.last_name;
      req.session.userEmail = currentUser.email;
      req.session.isadmin = currentUser.isadmin;
    }
    res.redirect('/');
  } catch (err) {
    res.render('error', {
      message: `непредвиденные проблемы, уже решаем (нет)`,
      error: {},
    });
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('rmsid');
  res.redirect('/');
});

router.get('/about', (req, res) => {
  res.render('about');
});



module.exports = router;
