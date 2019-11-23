let promise = new Promise(function(resolve, reject) {
    setTimeout(async () => resolve(console.log("Promise is da best")), 5000);
  });

