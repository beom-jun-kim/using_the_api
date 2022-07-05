const quotes = [
    {
        quote: "강한 이의 슬픔은 아름답다",
        author: "-김남조-",
    },
    {
        quote: "공부와 실천은 수레의 두 바퀴와 같다. 자기 자신도 이롭게 하고 남도 이롭게 해야 한다",
        author: "-원효-",
    },
    {
        quote: "길가의 민들레는 밟혀도 꽃을 피운다",
        author: "-우장춘-",
    },
    {
        quote: "논리의 검증을 거치지 않은 경험은 잡담이며 경험의 검증을 거치지 않은 논리는 공론이다",
        author: "-김대중-",
    },
    {
        quote: "고통을 거치지 않고 얻은 승리는 영광이 아니다.",
        author: "-나폴레옹-",
    },
    {
        quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
        author: "-크리스티 메튜슨-",
    },
    {
        quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
        author: "-공자-",
    },
    {
        quote: "항상 갈구하라. 바보짓을 두려워마라.",
        author: "-스티브 잡스-",
    },
    {
        quote: "나는 그저 나보다 머리가 좋은 사람들을 채용했을 뿐이다.",
        author: "-록펠러-",
    },
    {
        quote: "리스크를 줄이는 것이 이익을 추구하는 일보다 더 중요하다.",
        author: "-제임스 핑크스-",
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;