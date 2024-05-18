import { Response, Request } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await studentServices.createStudentIntoDb(studentData);

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const studendId = req.params.studentId;
    const result = await studentServices.getOneStudentsFromDb(studendId);
    res.status(200).json({
      success: true,
      message: 'student is find successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studenControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
