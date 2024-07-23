export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    if (promise) {
      resolve(obj);
    } else {
      reject(new Error(''));
    }
  });
}

const promise = handleResponseFromAPI();

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error('Error:', err); // Handle or log the error appropriately
  })
  .finally(() => {
    console.log('Got a response from the API'); // Executed when the promise settles
  });
