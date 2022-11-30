import student_dump from "../util/student_dump";

export default class StudentService {
  findAll() {
    return new Promise((resolve, reject) => {
        resolve(student_dump);
    });
  }
}
