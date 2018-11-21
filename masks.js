		/**
	 * Only letters or only numbers
	 */
$('#id-letters').keyup(function () { 
    this.value = this.value.replace(/[^a-zA-Z.^ .*\.]/g,'');
});
$('#id-numbers').keyup(function () { 
    this.value = this.value.replace(/[^0-9.]/g,'');
});

	/**
	 *  END
	 */

/* Máscaras telefone */


$("#tel").bind('input propertychange',function(){
    // pego o valor do telefone
    var texto = $(this).val();
    // Tiro tudo que não é numero
    texto = texto.replace(/[^\d]/g, '');
    // Se tiver alguma coisa
    if (texto.length > 0)
    {
    // Ponho o primeiro parenteses do DDD    
    texto = "(" + texto;

        if (texto.length > 3)
        {
            // Fecha o parenteses do DDD
            texto = [texto.slice(0, 3), ") ", texto.slice(3)].join('');  
        }
        if (texto.length > 12)
        {      
            // Se for 13 digitos ( DDD + 9 digitos) ponhe o traço no quinto digito            
            if (texto.length > 13) 
                texto = [texto.slice(0, 10), "-", texto.slice(10)].join('');
            else
             // Se for 12 digitos ( DDD + 8 digitos) ponhe o traço no quarto digito
                texto = [texto.slice(0, 9), "-", texto.slice(9)].join('');
        }   
            // Não adianta digitar mais digitos!
            if (texto.length > 15)                
               texto = texto.substr(0,15);
    }
    // Retorna o texto
   $(this).val(texto);     
})

/*  F I M Máscaras telefone */


/* Máscaras CPF */


$("#cpf").bind('input propertychange',function(){
    // pego o valor do telefone
    var texto = $(this).val();
    // Tiro tudo que não é numero
    texto = texto.replace(/[^\d]/g, '');
    // Se tiver alguma coisa
    if (texto.length > 0)
    {
    // Ponho o primeiro parenteses do DDD    

        if (texto.length > 3)
        {
            // Fecha o parenteses do DDD
            texto = [texto.slice(0, 3), ".", texto.slice(3)].join('');  
        }
        if ((texto.length > 6) && (texto.length > 3)){
        	 texto = [texto.slice(0, 7), ".", texto.slice(7)].join(''); 
        }
        if ((texto.length > 9) && (texto.length > 6)){
        	 texto = [texto.slice(0, 11), "-", texto.slice(11)].join(''); 
        }

            // Não adianta digitar mais digitos!
            if (texto.length > 14)                
               texto = texto.substr(0,14);
    }
    // Retorna o texto
   $(this).val(texto);     
})

/*  F I M Máscaras CPF */

$("#cnpj").bind('input propertychange',function(){
    // pego o valor do telefone
    var texto = $(this).val();
    // Tiro tudo que não é numero
    texto = texto.replace(/[^\d]/g, '');
    // Se tiver alguma coisa
    if (texto.length > 0)
    {
    // Ponho o primeiro parenteses do DDD    

        if (texto.length > 2)
        {
            // Fecha o parenteses do DDD
            texto = [texto.slice(0, 2), ".", texto.slice(2)].join('');  
        }
        if ((texto.length > 6) && (texto.length > 2)){
        	 texto = [texto.slice(0, 6), ".", texto.slice(6)].join(''); 
        }
        if ((texto.length > 10) && (texto.length > 6)){
        	 texto = [texto.slice(0, 10), "/", texto.slice(10)].join(''); 
        }
        if ((texto.length > 15) && (texto.length > 9)){
        	 texto = [texto.slice(0, 15), "-", texto.slice(15)].join(''); 
        }

            // Não adianta digitar mais digitos!
            if (texto.length > 18)                
               texto = texto.substr(0,18);
    }
    // Retorna o texto
   $(this).val(texto);     
})