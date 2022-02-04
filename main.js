const elemm = async(elem) =>{
    return await document.querySelector(elem).children;
}

const fontSt = (fontSelector) =>{
 const font = document.querySelectorAll(fontSelector);

 font.forEach(font =>{
     font.addEventListener('click',(e)=>{
        elemm('.box').then(res =>{
           
           for(let i = 0; i < res.length; i++){
               res[i].style.fontWeight = e.target.getAttribute ('data-font');
           }
           for(let i = 0; i < res.length; i++){
            res[i].style.fontStyle = e.target.getAttribute ('data-font');
        }
        for(let i = 0; i < res.length; i++){
            res[i].style.textDecoration = e.target.getAttribute ('data-font');
        }
        })
     })
 })
};
fontSt('.font [data-font]')

const localSt = (localSekector) =>{
    const local = document.querySelectorAll(localSekector);
      
    local.forEach(local=>{
        local.addEventListener('click',(e)=>{
            elemm('.box').then(res=>{
                for(let i = 0; i < res.length; i++){
                    res[i].style.textAlign = e.target.getAttribute ('data-local');

                }
                for(let i = 0; i < res.length; i++){
                    res[i].style.marginLeft = e.target.getAttribute ('data-local');

                }
            })
        })
    })

}

localSt('.local [data-local]')