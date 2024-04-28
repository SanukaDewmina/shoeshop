// Account create and login and open main website
const accountForm = document.getElementById("acountform");
const accouninputName = document.getElementById("uname");
const accouninputpassword = document.getElementById("upassword");
const mainContent = document.getElementById("maincontainer");

let user = "sanuka";
let upassword = 12341234;
// && accouninputpassword.value==upassword
function submitform(){
  if(accouninputName.value==user){
    accountForm.style.display="none";
    mainContent.style.display="inline";
    window.alert(`Hello mr${accouninputName.value}.Welcomeback..`);

  }
  else{
    window.alert(`Wrong user name,try again...`);
  }
}

//Navigation btn activities

const navHome= document.getElementById("navlist-extentionbyid1");
const navshop= document.getElementById("navlist-extentionbyid2");
const navoffer= document.getElementById("navlist-extentionbyid3");
const navabout= document.getElementById("navlist-extentionbyid4");
const navcart= document.getElementById("navlist-extentionbyid5");



function navactive1(){
    navHome.style.visibility="visible";
    navshop.style.visibility="hidden";
    navoffer.style.visibility="hidden";
    navabout.style.visibility="hidden";
    navcart.style.visibility="hidden";
}
function navdedactive(){
    navHome.style.visibility="hidden";
    navshop.style.visibility="hidden";
    navoffer.style.visibility="hidden";
    navabout.style.visibility="hidden";
    navcart.style.visibility="hidden";
}

function navactive2(){
  navshop.style.visibility="visible";
  navHome.style.visibility="hidden";
  navoffer.style.visibility="hidden";
  navabout.style.visibility="hidden";
  navcart.style.visibility="hidden";
}


function navactive3(){
  navHome.style.visibility="hidden";
  navshop.style.visibility="hidden";
  navoffer.style.visibility="visible";
  navabout.style.visibility="hidden";
  navcart.style.visibility="hidden";

}


function navactive4(){
  navHome.style.visibility="hidden";
  navshop.style.visibility="hidden";
  navoffer.style.visibility="hidden";
  navabout.style.visibility="visible";
  navcart.style.visibility="hidden";

}


function navactive5(){
  navHome.style.visibility="hidden";
  navshop.style.visibility="hidden";
  navoffer.style.visibility="hidden";
  navabout.style.visibility="hidden";
  navcart.style.visibility="visible";

}


// add to cart javascript part

const btn = document.getElementById("addcartbtn");

const cartQ = document.getElementById("quentity");
const costwithTax = document.getElementById("cost");
const total = document.getElementById("total");
const cartnotification=document.getElementById("cartnotifi");

let clicked =0;
let oneitemwithtax = 0;
let costoftotal=0;
btn.onclick = function(){
  clicked ++;
  cartnotification.style.visibility="visible";
  cartnotification.textContent=clicked;
  cartQ.textContent=`Quentity: ${clicked}`;
  oneitemwithtax = (45*0.18)+ 45;
  costwithTax.textContent =`Tax amount: ${oneitemwithtax}`;
  costoftotal = Number(clicked) *Number(oneitemwithtax);
  total.textContent = `Total amount: $${costoftotal}`;
}



function resetaddcart(){
  cartnotification.style.visibility="hidden";
  cartQ.textContent=`Quentity: `;
  costwithTax.textContent =`Tax amount:`;
  total.textContent = `Total amount: `;
}