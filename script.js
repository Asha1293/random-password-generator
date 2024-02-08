let passwordBox = document.getElementById("password")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"
const length = 12



const allChars = upperCase + lowerCase + numbers + symbols

function generatePassword(){
    let passWord = ""
    passWord += upperCase[Math.floor(Math.random()*upperCase.length)]
    passWord += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    passWord += numbers[Math.floor(Math.random()*numbers.length)]
    passWord += symbols[Math.floor(Math.random()*symbols.length)]

    while(length> passWord.length){
        passWord += allChars[Math.floor(Math.random()*allChars.length)]
    }
    
    passwordBox.value = passWord

}

function copyPassword(){
     passwordBox.select()
     document.execCommand("copy")
}
