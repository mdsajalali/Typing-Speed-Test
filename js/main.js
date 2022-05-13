const setOfWords = [
  "My name is md. sajal ali and I am a Frontend Developer",

  "Hope you are having fun this is a simple game you can make.",

  "If you want the source code then link is given in the description so you can create your own version of this challenge.",

  "I know it's not good to be weak and helpless, but I don't think it's good to be too strong either. In our society, they talk about survival of the fittest. But we're not animals. We're human.",
  
  "You'll have some painful, despair-ridden experiences. In fact, most of them will be tragic. But we chose to walk this path. We'll take on the dirty work. And change the world. After we finish, we can disappear.",

  "A love story. Yes: this is a love story. It's about passion, sensual pleasure, deep pulls, lust, fears, yearning hungers. It's about needs so strong they're crippling. It's about saying goodbye to something you can't fathom living without.",

  "Power is power, but what is power? Strength or a title? Being born strong doesn't make you strong, it's the dedication and work you put into making yourself strong that counts. Nobody cares about your Rolex.",
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const palyGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  //   console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);

  let finalMsg = " You typed total at " + speed + " words per minutes. ";

  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

 const compareWords = (str1, str2) =>{
     let words1 = str1.split(" ");
     let words2 = str2.split(" ");
     let cnt = 0;

     words1.forEach(function (item, index){
         if(item == words2[index]){
             cnt++;
         }
     })

     let errorWords = (words1.length - cnt);
     return(cnt + " correct out of " + words1.length + " words and the total number of error are "+ errorWords + ".");
 }


const wordCounter = (str) => {
  let response = str.split(" ").length;
  // console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    palyGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});
