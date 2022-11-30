import teacher_dump from "../util/teacher_dump";

export default class TeacherService {
  findAll() {
    return new Promise((resolve, reject) => {
        resolve(teacher_dump);
    });
  }
}
