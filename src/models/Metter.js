import Student from "./Student";
import Teacher from "./Teacher";

export default class Metter {
    constructor(){
        this.id = null;
        this.name = null;
        this.note = null;
        this.student = new Student();
        this.teacher = new Teacher();
    }
}