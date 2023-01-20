const card = document.getElementById("card");

 function transformAnimation () {
    //Get center of coordinate
    window.addEventListener("mousemove", e => {
        let xHalf = window.innerWidth/2;
        let yHalf = window.innerHeight/2;
        
        let x = e.clientX - xHalf;
        let y = e.clientY - yHalf;

        //Apply rotation to card
        card.style.transform = `rotateY(${x / 90}deg) rotateX(${-y / 90}deg)`;

    }); 
}

transformAnimation();