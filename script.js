
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  //when we call any api it takes time to get executed,
  // promise will return a value when that execution will
  // complete or return error if something went wrong.
  // the data is then get by 'then' method

  .then((res) =>  res.json())

  .then(json=>{
    let li =``; 
        json.map(user => {
            li += `<div id="users" className="bg-slate-100 w-full max-w-48  m-auto rounded-lg p-3 ">
        <h1 className="text-base  font-bold">${user.name}</h1>
        <h2 className="text-base font-normal">${user.email}</h2>
        <p>
          ${user.body}
        </p>
      </div>`; 
    });
    document.getElementById("users").innerHTML = li; 
    
  })

  
