const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also totally acceptable! 😀 ", (answer1) => {
  console.log(`Awesome! Nice to meet you, ${answer1}!! `);
  (rl.question("What is your favourite movie or tv show? ", (answer2) => {
    console.log(`Great choice, ${answer2} is a good one! `);
    rl.question("What is an activity that you enjoy? ", (answer3) => {
      console.log(`Nice, ${answer3} sounds like fun! `);
      rl.question("What do you listen to while you do that? ", (answer4) => {
        console.log(`That sounds awesome, ${answer4} is perfect for that!`); rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer5) => {
          console.log(`Yum, ${answer5} IS the best!`);
          rl.question("What is your favourite thing to eat for that meal? ", (answer6) => {
            console.log(`${answer6} sounds delightful!`);
            rl.question("What animal is your absolute favourite? ", (answer7) => {
              console.log(`Awww, ${answer7} are adorable!`);
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer8) => {
                console.log(`You said: ${answer8}. That is a great superpower and skill to have!\n`);
                console.log(`It was really great to meet you today, ${answer1}! Thank you for taking the time to fill this out. Please see below for your profile summary: \nPlease meet ${answer1}! ${answer1}'s favourite movie/tv show is ${answer2}, and their favourite animal is ${answer7}. In their spare time, ${answer1} enjoys listening to ${answer4} while they are doing their favourite activity, ${answer3}! Their favourite meal is ${answer5}, and their favourite food to eat with that meal is ${answer6}. ${answer1}'s superpower is: ${answer8}. Feel free to reach out to ${answer1}, I am sure they'd love to meet you!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  }));
});
// rl.question("What is your favourite movie or tv show?", (answer) => {
//   console.log(`Great choice, ${answer} is a good one!`);
//   rl.close();
// });
// rl.question("What's an activity that you enjoy?", (answer) => {
//   console.log(`Awesome! Nice to meet you,: ${answer}!!`);
//   rl.close();
// });