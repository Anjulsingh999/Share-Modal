const popup=document.querySelector('.popup');
const overlays=document.querySelector('.overlays');
const followMe=document.querySelector('.followbtn')

const openmodal=()=>
{
    console.log('modal is open');
    popup.classList.add("active");
    overlays.classList.add("overlaysactive");
};


const closemodal=()=>
{
    console.log('modal is close');
    popup.classList.remove("active");
    overlays.classList.remove("overlaysactive");
};

const followed=()=>
{
    console.log('followed');
    followMe.classList.add("activatefollow")
};
