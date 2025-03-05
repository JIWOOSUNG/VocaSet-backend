const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const setRouter = require('../routes/SetRouter');
const { authMiddleware } = require('../middleware/auth');

// Root - /api/users

// ---------- User ----------

// 회원가입
router.post('/', userController.postUser);

// 회원정보 조회
// router.get('/:userId', userController.getUser);
router.get('/:userId', authMiddleware, userController.getUser);

// 회원정보 수정
router.put('/:userId', userController.updateUser);

// 회원탈퇴
router.delete('/:userId', userController.deleteUser);

// ---------- Voca Set ----------

// 세트 라우터 연결
router.use('/:userId/set', setRouter);

module.exports = router;
