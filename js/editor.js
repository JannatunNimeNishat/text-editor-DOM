// bold
document.getElementById('bold-btn').addEventListener('click',function(){
   

    const input = getInputElementById('textArea-input');
    if( input.style.fontWeight ==='bold'){
        
        input.style.fontWeight='normal';
        return;
    }
    input.style.fontWeight='bold';
    
    setInputValueById('textArea-input',input);
});

//italic
document.getElementById('italic-btn').addEventListener('click',function(){
    

  const italic = getInputElementById('textArea-input');
  if( italic.style.fontStyle === 'italic' ){

    italic.style.fontStyle = 'normal';
    return;
  }
  italic.style.fontStyle = 'italic';
  setInputValueById('textArea-input',italic);

});

//underline
document.getElementById('underline-btn').addEventListener('click',function(){
  

    const underline = getInputElementById('textArea-input');
   if(underline.style.textDecoration ==='underline'){
    underline.style.textDecoration='none';
    return;
   }
   underline.style.textDecoration='underline';
   setInputValueById('textArea-input',underline);

});

//align left
document.getElementById('a-left').addEventListener('click',function(){
    
    const aLeft = getInputElementById('textArea-input');
    if(aLeft.style.textAlign==='left'){
        aLeft.style.textAlign='';
        return;
    }
    aLeft.style.textAlign='left';
    setInputValueById('textArea-input',aLeft);
});

//align center
document.getElementById('a-center').addEventListener('click',function(){
    const aCenter = getInputElementById('textArea-input');
    if(aCenter.style.textAlign==='center'){
        aCenter.style.textAlign='';
        return;
    }
    aCenter.style.textAlign='center';
    setInputValueById('textArea-input',aCenter);
});

//align right
document.getElementById('a-right').addEventListener('click',function(){
    const aRight = getInputElementById('textArea-input');
    if(aRight.style.textAlign==='right'){
        aRight.style.textAlign='';
        return;
    }
    aRight.style.textAlign='right';
    setInputValueById('textArea-input',aRight);
});

//font size change
document.getElementById('font-change-field').addEventListener('change',function(){
   const fontChangeElement = getInputElementById('textArea-input');
   
    const fontChangeFieldValue = getInputValueById('font-change-field');
    
    fontChangeElement.style.fontSize = fontChangeFieldValue+'px';

    setInputValueById('textArea-input',fontChangeElement);

});

//font case change
document.getElementById('font-case-change').addEventListener('click',function(){
    const input = getInputElementById('textArea-input');
    if(input.style.textTransform === 'uppercase'){
        input.style.textTransform = '';
        return;
    } 
    input.style.textTransform = 'uppercase';
    setInputValueById('textArea-input',input); 
});

//font color change
document.getElementById('font-color-change').addEventListener('change',function(){
    const input = getInputElementById('textArea-input');
    const newColor = document.getElementById('font-color-change').value;
    input.style.color = newColor;

    setInputValueById('textArea-input',input);
});








