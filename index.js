const emojiChar = document.getElementById('btn');
const emojiName = document.getElementById('emoji-name');

let emojisArr = [];

window.onload = async () => {
  const API_KEY = "773b58f681fb786fafdb8392e8b8a75ddc177fd1";
  const response = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`);
  const data = await response.json();

  for (let i = 0; i < 1000; i++) {
    emojisArr.push({
      emojiName: data[i].unicodeName,
      emojiCharacter: data[i].character
    });
  }
}

btn.addEventListener('click', () => {
  let idx = Math.floor(Math.random() * 1000);
  emojiName.textContent = emojisArr[idx].emojiName;
  emojiChar.textContent = emojisArr[idx].emojiCharacter;
});
