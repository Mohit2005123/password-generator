let number= document.querySelector('.number');
console.dir(number);
let length= document.querySelector('.length');
number.addEventListener('input', ()=>{
    length.innerText= `Password Length: ${number.value}`;
});
let passgenerated= false;
let finalpassword= document.querySelector('.finalpassword');
let button= document.querySelector('button');
let lowercase= document.querySelector('.lowercase');
let uppercase= document.querySelector('.uppercase');
let numbers= document.querySelector('.numbers');
let special= document.querySelector('.special');
button.addEventListener('click', ()=>{
    finalpassword.innerText= generatepassowrd(lowercase.checked,uppercase.checked, numbers.checked, special.checked, number.value);
});
let copy= document.querySelector('.copy');
copy.addEventListener('click', async()=>{
    if(passgenerated== true){
        try{
            await navigator.clipboard.writeText(finalpassword.innerText);
            copy.classList.remove('fa');
            copy.classList.remove('fa-copy');
            copy.innerHTML='&#x2713;';
            setTimeout(()=>{
                copy.classList.add('fa');
                copy.classList.add('fa-copy');
                copy.innerHTML='';
            }, 3000);
        }
        catch(err){
            alert('Failed to copy text');
        }
    }
});
let lower="abcdefghijklmnopqrst";
let upper=" ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums="1234567890";
let spec= "!@#$%^&*()_+{}[]|;:,.<>?";
function generatepassowrd(lowercase, uppercase, numbers, special, len){
    let array=[lower, upper, nums, spec];
    if(lowercase== false){
        let indextoremove=-1;
        for(let i=0; i<array.length; i++){
            if(array[i]==lower){
                indextoremove=i;
            }
        }
        if(indextoremove!=-1){
            array.splice(indextoremove, 1);
        }
    }
    if(uppercase== false){
        let indextoremove=-1;
        for(let i=0; i<array.length; i++){
            if(array[i]==upper){
                indextoremove=i;
            }
        }
        if(indextoremove!=-1){
            array.splice(indextoremove, 1);
        }
    }
    if(numbers== false){
        let indextoremove=-1;
        for(let i=0; i<array.length; i++){
            if(array[i]==nums){
                indextoremove=i;
            }
        }
        if(indextoremove!=-1){
            array.splice(indextoremove, 1);
        }
    }
    if(special== false){
        let indextoremove=-1;
        for(let i=0; i<array.length; i++){
            if(array[i]==spec){
                indextoremove=i;
            }
        }
        if(indextoremove!=-1){
            array.splice(indextoremove, 1);
        }
    }
    if(array.length==0){
        return "No password will be generated";
    }
    let string="";
    for(let i=0; i<len; i++){
        let index= Math.floor(Math.random()*array.length);
        let str= array[index];
        let strindex= Math.floor(Math.random()*str.length);
        string= string + str[strindex];
    }
    passgenerated= true;
    return string;
}