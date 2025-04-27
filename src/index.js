import readlineSync from 'readline-sync'

export const runGame = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(rules)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateRound()
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
