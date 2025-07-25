function updateCLOCK ( ) {


    let time = new Date();
    let hours = date.gethours();
    let minuts = date.getminuts();
    let seconds = date.getseconds();

    let currentTime = hours + ":" + minuts + ":" + seconds;


    document.getElementById('clock').innerText = currentTime;
};


setInterval(updateCLOCK, 1000);