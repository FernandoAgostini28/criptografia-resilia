const Descriptografa = {
    decriptografa64(elemento) {
        const decriptografa64s = atob(elemento)
        returnFrase.value = `${decriptografa64s}`
        returnFrase.style.backgroundColor = 'green'
        returnFrase.style.color = 'white'

    },
    descriptografaCifraCesar(elemento, num) {
        const cifraCesarDecript = elemento.toLowerCase()
        const alfabetoDecrip = 'abcdefghijklmnopqrstuvwxyz'.split('')
        //Precisa colocar um capo para inserir a quantidade de casas no HTML ex: 5

        let numCasaDecript = num;
        let letraDecript = []
        for (let i = 0; i < cifraCesarDecript.length; i++) {
            if (cifraCesarDecript[i] != ' ') {
                for (let j = 0; j < alfabetoDecrip.length; j++) {
                    if (cifraCesarDecript[i] === alfabetoDecrip[j]) {
                        letraDecript.push(alfabetoDecrip[(j - numCasaDecript) % alfabetoDecrip.length])
                        break
                    }
                }
            } else {
                letraDecript.push(' ')
            }

        }

        const cifraCesarDecriptografada = letraDecript.join("");
        returnFrase.value = `${cifraCesarDecriptografada}`
        returnFrase.style.backgroundColor = 'green'
        returnFrase.style.color = 'white'
        //console.log("cifraCesarDecript", cifraCesarDecriptografada)              
    }
}

const Criptografa = {

    criptografa64(elemento) {
        const cripto64 = btoa(elemento)
        console.log("criptogafa64", cripto64)
        returnFrase.value = `${cripto64}`
        returnFrase.style.backgroundColor = 'red'
        returnFrase.style.color = 'white'
    },
    criptografaCifraCesar(elemento, num) {
        const valorCifraCesar = elemento.toLowerCase()
        const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')

        let numCasa = num;
        let letra = []
        for (let i = 0; i < valorCifraCesar.length; i++) {
            if (valorCifraCesar[i] != ' ') {

                //Percore o array do alfabeto
                for (let j = 0; j < alfabeto.length; j++) {
                    if (valorCifraCesar[i] === alfabeto[j]) {
                        letra.push(alfabeto[(j + numCasa) % alfabeto.length])
                        break
                    }
                }
            } else {
                letra.push(' ')
            }
        }
        const descriptaCesar = letra.join("");
        console.log('letra.join("")', letra.join(""))
        returnFrase.value = `${descriptaCesar}`
        returnFrase.style.backgroundColor = 'red'
        returnFrase.style.color = 'white'
        //document.getElementById('fraseCriptografada').value = `${CriptografiaCesar.cifraCesarCripto}`
        //return letra      
    }
}

const Utils = {

    escolheCripto(options, select, numCesar) {
        const btnCripto = document.getElementById('result')
        const cifra = document.getElementById('cifra')
        const descifra = document.getElementById('decifra')

        if (select === 'base64' && options === 'cripto') {
            Criptografa.criptografa64('lidi')
        } else if (select === 'cifraCesar' && options === 'cripto') {
            Criptografa.criptografaCifraCesar('lidi', numCesar)
        } else if (select === 'base64' && options === 'descripto') {
            Descriptografa.decriptografa64('bGlkaQ==')
        } else if (select === 'cifraCesar' && options === 'descripto') {
            Descriptografa.descriptografaCifraCesar('mjej', numCesar)
        }
    },
    numeroCesar(num) {
        Opcoes.recebenumCesar(num)
        console.log(num)
    },

    selectCriptos(elemento) {
        const aparece = document.getElementById('aparece')
        const existeNumeroCesar = document.getElementById('numeroCesar')
        const existeNumCesar = document.getElementById('numCesar')

        if (elemento === "base64") {
            console.log('A')

            if (existeNumeroCesar && existeNumCesar) {
                aparece.removeChild(existeNumeroCesar)
                aparece.removeChild(existeNumCesar)
            }
        }

        if (elemento === "cifraCesar") {
            console.log('B')

            if (!existeNumeroCesar && !existeNumCesar) {
                aparece.innerHTML += `                
                    <input class="inputFrase" type="number" name="" id="numeroCesar">
                    <button class="btn" id='numCesar'>Numero cesar</button>                
                `
                document.getElementById('numCesar').addEventListener('click', function () {
                    const numeroCesar = document.getElementById('numeroCesar').value
                    Utils.numeroCesar(numeroCesar)

                })
            }
        }

        if (elemento === '') {
            returnFrase.value = ''
            returnFrase.style.backgroundColor = 'white'            
            if (existeNumeroCesar && existeNumCesar) {
                aparece.removeChild(existeNumeroCesar)
                aparece.removeChild(existeNumCesar)
            }
        }
        Opcoes.recebeSelect(elemento)
        return elemento
    },
}

const Opcoes = {
    options: null,
    select: null,
    numCesar: 0,
    recebenumCesar(num) {
        Opcoes.numCesar = num
    },

    recebeOptions(elemento) {
        Opcoes.options = elemento
        console.log(Opcoes.options)
    },
    recebeSelect(elemento) {
        Opcoes.select = elemento
        console.log(Opcoes.select)
    },

    enviaElementos() {
        let sel = Opcoes.select
        let opt = Opcoes.options

        if (sel === 'base64' && opt === 'cripto') {
            btnId.id = "base64cripto"
            btnId.textContent = "Codificar mensagem!"
            document.getElementById("base64cripto").addEventListener('click', function () {
                Opcoes.buscaTextoBtn64('base64cripto')
            })
            console.log("btnId.id 1", btnId.id)
        } else if (sel === 'cifraCesar' && opt === 'cripto') {
            console.log('02')
            btnId.id = "cifraCesarCripto"
            btnId.textContent = "Codificar mensagem!"
            document.getElementById("cifraCesarCripto").addEventListener('click', function () {
                Opcoes.buscaTextoBtnCifraCesar('cifraCesarCripto')
            })
        } else if (sel === 'base64' && opt === 'descritografa') {

            btnId.id = "base64Descripto"
            btnId.textContent = "Decodificar mensagem!"            
            document.getElementById("base64Descripto").addEventListener('click', function () {
                Opcoes.buscaTextoBtn64('base64Descripto')
            })
            console.log("btnId.id", btnId.id)
        } else if (sel === 'cifraCesar' && opt === 'descritografa') {
            console.log('04')
            btnId.id = "cifraCesarDescripto"
            btnId.textContent = "Decodificar mensagem!"
            document.getElementById("cifraCesarDescripto").addEventListener('click', function () {
                Opcoes.buscaTextoBtnCifraCesar('cifraCesarDescripto')
            })
        }
    },
    buscaTextoBtn64(elemento) {
        if (elemento === 'base64cripto') {
            const inputDigitado = document.getElementById('frase').value;
            Criptografa.criptografa64(inputDigitado)
        } else if (elemento === 'base64Descripto') {
            const inputDigitado = document.getElementById('frase').value;
            Descriptografa.decriptografa64(inputDigitado)
        }
    },
    buscaTextoBtnCifraCesar(elemento) {
        numEscolhido = Number(Opcoes.numCesar)
        console.log(numEscolhido)
        if (elemento === 'cifraCesarCripto') {
            const inputDigitado = document.getElementById('frase').value;            
            Criptografa.criptografaCifraCesar(inputDigitado, numEscolhido)
        } else if (elemento === 'cifraCesarDescripto') {
            const inputDigitado = document.getElementById('frase').value;            
            Descriptografa.descriptografaCifraCesar(inputDigitado, numEscolhido)
        }
    }
}
/* esta imprimindo dois resultados ao clicar no botão criptogarfa*/
//========== DOM ===========================================
const limpaDigitado = document.getElementById('frase')
const btnOpcao = document.getElementById('apareceBtn')
const divResult = document.getElementById('result')
btnOpcao.innerHTML += `<button class="btn" id='01' class='btnOpt'>Escolha uma opção</button>`
divResult.innerHTML += `<input class="inputFraseDiv" type="text" name="" id="returnFrase" value="">`
const returnFrase = document.getElementById('returnFrase')
const btnId = document.getElementById('01')


document.getElementById('selectCripto').addEventListener('change', function () {
    const value = selectCripto.options[selectCripto.selectedIndex].value;
    limpaDigitado.value = ''            
    Opcoes.recebeSelect(value)
    Utils.selectCriptos(value)
    Opcoes.enviaElementos("", "")
})

document.getElementById('rc').addEventListener('click', function () {
   
    limpaDigitado.value = ''     
    returnFrase.value = ''
    returnFrase.style.backgroundColor = 'white'   
    Opcoes.recebeOptions('cripto')
    Opcoes.enviaElementos()
})

document.getElementById('rd').addEventListener('click', function () {    
    limpaDigitado.value = ''    
    returnFrase.value = ''
    returnFrase.style.backgroundColor = 'white'    
    Opcoes.recebeOptions('descritografa')
    Opcoes.enviaElementos()
})




