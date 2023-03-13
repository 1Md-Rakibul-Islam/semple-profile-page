// Three state avaiable in promise
// 1. Panding, 2. Resolved 3. Rejected

const myPromise = new Promise( (resolve, reject) => {
    const user = 1;
    if(!user){
        reject("Somthing went wrong!");
    }
    setTimeout( () => {
        resolve({name: 'Rakibul'});
    }, 1000);
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++){
    const userId = userIds[i];
    // myPromise.then( user => {
    //     userData.push(user);
    // })

    userData.push(myPromise)
}
Promise.all(userData).then(res => {
    console.log(res)
}) 

// console.log(userData);

myPromise
    .then(res => console.log('found in then:'))
    .catch(err => console.log('found in catch:', err))

console.log('Done');