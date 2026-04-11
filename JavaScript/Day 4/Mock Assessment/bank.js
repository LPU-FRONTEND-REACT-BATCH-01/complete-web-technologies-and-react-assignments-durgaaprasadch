
let bankAccount = {
    balance: 0,
    transactions: []
}

let totalBalance = bankAccount.balance
let transaction = 0

function deposit(amount){
    if(amount>0){
        bankAccount.balance+=amount
        bankAccount.transactions.push(amount,"deposited")
        console.log(amount,"deposited")
    }
    else {
        console.log("deposit amount must be greater than 0")
    }
}

function withdraw(amount){

     if(amount > bankAccount.balance){
        console.log("insufficient balance")
        return
    }
    if(amount<=0 ){
        console.log("amout must be grater than 0")
        return
    }
    if(amount>=10000){
        console.log("max withdrawl limit is 10000")
        return
    }
    if(bankAccount.balance - amount <500){
        console.log("min balance of 500 must be maintained")
        return
    }
    
    bankAccount.balance-=amount
    bankAccount.transactions.push(-amount,"withdrwan")
    console.log(amount,"withdrawn")
}

function getBalance(){
    return bankAccount.balance
}

function getTransactions(){
     bankAccount.transactions.map((a)=> console.log(a)
)
}

deposit(5000)
deposit(100)
withdraw(600)

getTransactions()

// console.log(getBalance())

