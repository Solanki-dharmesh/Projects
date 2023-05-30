const mainbtn= document.querySelector("button")
const body= document.body;
const curco= document.querySelector(".cuco")
console.log(curco);
  function randomColorGenerator(){
    const red= Math.floor(Math.random()*256)
    const green= Math.floor(Math.random()*256)
    const blue= Math.floor(Math.random()*256)
    const randomco=`rgb(${red},${green},${blue})`
    return randomco;
  }
mainbtn.addEventListener("click",()=> {
      const randomco=randomColorGenerator();
     body.style.backgroundColor=randomco;
     curco.textContent=randomco;
 })
