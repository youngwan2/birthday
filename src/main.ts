import Typed from "typed.js";

const button = document.querySelector('button');
const cards = document.querySelectorAll('.card');
const front = cards[1] as HTMLDivElement;
const content = document.querySelector('.content') as HTMLDivElement

button?.addEventListener('click', () => {

  new Typed('.text', {
    strings:
      [" 생일 축하함.",
      " 시간 정말 빠른 듯.",
        " 남은 올해 목표하는거 하나씩 이루어지면 좋겠음.",
        " 건강 챙기며 일하고,",
        " 재밌는 날 되길 바람.",
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

