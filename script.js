let btns = document.getElementById('btns');
let togg = 1;
btns.addEventListener('click', function(){
    if(togg == 1){
        this.style.backgroundColor = 'blue';
        this.style.color = '#048b2a';
    }
    else{
        this.style.backgroundColor = '#048b2a';
        this.style.color = '#fff';
    }
    togg = ((togg==1) ? 0 : 1);
})