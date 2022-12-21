export default function handleResponseFromAPI(promise) {
  let myPromise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'Success' });
    reject(new Error());
    });

   myPromise.then(
     () => { console.log('Got a response from the API')},
     (error) => {}
   );
   return myPromise;
}
