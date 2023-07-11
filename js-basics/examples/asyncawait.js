function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        reject('rejected');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    try{
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    }catch(err){
        console.log(err)
    }
  }

  asyncCall();
  