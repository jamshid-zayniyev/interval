const Week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

const TimeLine = () =>{
    let date = new Date();

    document.querySelector('.date').innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${Week[date.getDay()]}`

    document.querySelector('.timeline').innerHTML = `${date.getHours()-12 < 10 ? '0' : ''}${date.getHours()-12}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' :''}${date.getSeconds()}:${Math.floor(date.getMilliseconds()/100)}`

}



setInterval(()=>{
    TimeLine()
},100)
