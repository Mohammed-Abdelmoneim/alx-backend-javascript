export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    if (promise) {
      resolve(obj);
    } else {
      reject(Error(''));
    }
  });
}

const promise = handleResponseFromAPI();

function handleResolve(val) {
  console.log(val);
}

function handleReject(reason) {
  return reason;
}

function handleEveryResolve() {
  console.log('Got a response from the API');
}

promise.then(handleResolve).catch(handleReject).finally(handleEveryResolve);
