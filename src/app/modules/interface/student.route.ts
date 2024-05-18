import express from 'express';
import { studenControllers } from './student.controller';
const router = express.Router();

router.post('/create-student', studenControllers.createStudent);

router.get('/', studenControllers.getAllStudents);
router.get('/:studenId', studenControllers.getSingleStudents);

export const studentRoutes = router;
