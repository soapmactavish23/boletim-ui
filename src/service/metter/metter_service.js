import metter_dump from "../util/metter_dump";

export default class MetterService {
  findAll() {
    return new Promise((resolve, reject) => {
        resolve(metter_dump);
    });
  }
}
