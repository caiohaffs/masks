
function applyMask(input, mask) {
    let value = input.replace(/[^\d]/g, '');
    let masked = '';
    let maskIndex = 0;

    for (let i = 0; i < value.length && maskIndex < mask.length; i++) {
        if (mask[maskIndex] !== '#') {
            masked += mask[maskIndex++];
        }
        masked += value[i];
        maskIndex++;
    }

    return masked;
}

function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
}


function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
}

// cpf mask
$('#cpf').on('input', function () {
    const masked = applyMask($(this).val(), '###.###.###-##');
    $(this).val(masked);

    if (masked.length === 14 && !isValidCPF(masked)) {
        alert('CPF inválido!');
    }
});
//cnpj mask
$('#cnpj').on('input', function () {
    const masked = applyMask($(this).val(), '##.###.###/####-##');
    $(this).val(masked);

    if (masked.length === 18 && !isValidCNPJ(masked)) {
        alert('CNPJ inválido!');
    }
});

// phone mask
$('#tel').on('input', function () {
    const masked = applyMask($(this).val(), '(##) #####-####');
    $(this).val(masked);
});

// only letters
$('#id-letters').on('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

// only numbers
$('#id-numbers').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
