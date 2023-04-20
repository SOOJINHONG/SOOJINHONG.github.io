const quotes = [
  "삶이 있는 한 희망은 있다.",
  "산다는 것 그것은 치열한 전투이다.",
  "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
  "언제나 현재에 집중할 수 있다면 행복할 것이다.",
  "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 한다.",
  "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
  "신은 용기있는자를 결코 버리지 않는다.",
  "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 열린 문을 보지 못하게 된다.",
  "피할 수 없으면 즐겨라.",
  "당신이 어제 걷지 않아서 늙었다면 오늘 걸어도 한 걸음이다.",
  "배우지 않는 자에게 불행이 찾아온다.",
  "한번의 실패와 영원한 실패를 혼동하지 마라.",
  "자신감 있는 표정을 지으면 자신감이 생긴다.",
  "최고에 도달하려면 최저에서 시작하라.",
  "한 번 실패와 영원한 실패를 혼동하지 마라.",
];

const quoteBox = document.querySelector("#quote");
const generateBtn = document.querySelector("#generate-btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteBox.textContent = `"${randomQuote}"`;
}

generateBtn.addEventListener("click", generateQuote);

