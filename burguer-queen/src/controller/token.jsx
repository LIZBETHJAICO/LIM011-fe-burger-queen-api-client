const getToken =(email, password) => { 
return fetch('http://138.68.51.45/auth', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({email, password}), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then((res) => {
  if (res.status === 200) {
 console.log(res,'200');
    return res.json();
  } else if (res.status === 400) {
    console.log(res,'400');
    return Promise.reject({ message: 'Ingrese su usuario y/o contraseña' });
  } 
 else {

  return Promise.reject({ message: res.statusText })
}

});
}
    
  export default getToken 
