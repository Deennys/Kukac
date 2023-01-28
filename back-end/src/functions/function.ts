export function verificaPalindromo (numero: String): Boolean {
    const invertido: String = numero.split('').reverse().join('');
    if (invertido === numero) {
        return true;
    } else {
        return false;
    }
}

export function calculaCedulas(troco: number): number[] {
    let cem = 0;
    let dez = 0;
    let um = 0;
    
    while (troco > 0) {
        if (troco >= 100) {
            troco -= 100;
            cem += 1;
        } else if (troco >= 10) {
            troco -= 10;
            dez += 1;
        } else {
            troco -= 1;
            um += 1;
        }
    }

    return [cem, dez, um];
}