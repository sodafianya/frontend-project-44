import readlineSync from 'readline-sync'

export function greetUser() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export const askQuestion = question =>
  readlineSync.question(`${question}\nYour answer: `)
