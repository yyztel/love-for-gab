const text = 
`<strong>My dear Gaven,</strong>

Hi baby!

It’s been 2 weeks since we started talking, and honestly, the moment I added you pa lang, I already knew “crush ko na ‘to.” I didn’t expect na magiging everyday thing yung pag-uusap natin, to the point na you always manage to make me smile and feel that little spark of kilig. Even the simplest chats we have, I always look forward to them. The more we talk, the more I realize how happy I am whenever it’s you on the other end. Ang gaan, ang natural, and you always give me a reason to smile. I really love you, Gaven. Kahit ambilis kong ma-fall sayo, I can’t deny it anymore. Gustong-gusto talaga kita, and I want to treat you right, kasi alam kong you have such a pure heart. Ang bait mo, ang gentle mo, and ang dali mong mahalin. 
I know baka mabilis yung mga nangyayari satin, but I swear, every little thing about you makes me fall even harder. 

I love you so much, baby!

Always yours,
ystel`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("message").innerHTML = text.substring(0, i+1);
    i++;
    setTimeout(typeWriter, 40); 
  }
}
typeWriter();

// Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  document.body.appendChild(heart);

  const size = Math.random() * 20 + 15;
  heart.style.fontSize = size + "px";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-20px";

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
