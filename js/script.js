let contaCento = 100;
const conta = document.getElementById('conta');
const row = document.createElement('div');



row.setAttribute('class', 'row g-3 justify-content-center');
conta.append(row);



for (let a = 1; a <= 100; a++){     
    const col = document.createElement('div');
    col.setAttribute('class', "col-12 col-sm-6 col-md-4 col-lg-1");
    
    if(a % 3 === 0) {
        col.innerHTML = 'fizz';
        
        
        
        
    }else if(a % 5 === 0){
        col.innerHTML = 'buzz';
        
        
        
    }else if(){

    }else{
        console.log(a);
        col.innerHTML = a;
    }
    
    



    row.append(col);

}


        

        

















 



