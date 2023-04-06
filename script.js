fetch("http://oldfunshinyjoke.neverssl.com/online/", 
{ 
    mode: 'no-cors',
    referrer: "",
    referrerPolicy: "no-referrer",
    redirect: "follow"
}
)
.then((response)=>{
    return response.text();
})
.then((data)=>{
    console.log(data);
})