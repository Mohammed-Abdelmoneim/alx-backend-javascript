export default function signUpUser(firstName, lastName) {
  return new Promise((reslove, reject) => {
    const obj = {
      firstName,
      lastName,
    };
    if (firstName && lastName) {
      reslove(obj);
    } else {
      reject(Error());
    }
  });
}
