import Typed from "typed.js";

const button = document.querySelector('button');
const cards = document.querySelectorAll('.card');
const front = cards[1] as HTMLDivElement;
const content = document.querySelector('.content') as HTMLDivElement

button?.addEventListener('click', () => {

   new Typed('.text', {
    strings:
      ["형 생일 축하함.", "시간이 정말 어떻게 가는지 모를 정도로 빠르네, 벌써 형 생일이라니.",
        " 올해 얼마 안 남았지만, 현재 계획하고 있는 것들 하나씩 이루어지면 좋겠다.",
        " 늘 생각하지만, 건강 챙기면서 일하고, 행복한 생일날이 되길 바람.",
        " 다시 한 번 생일 축하해~.",
        " Happy birthday 🎉"
      ],
    startDelay: 1000,
    typeSpeed: 50,
    backSpeed: 20,
  });


  front.style.cssText = `
transform-origin: 50% 100%;
transform: translate(-50%,-50%) rotateX(-90deg);
`;

  content.style.cssText = `
visibility: hidden;
`
})

