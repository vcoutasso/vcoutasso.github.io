const desc = document.querySelector('#desc')
const who = document.querySelector('#who')
const who_ = document.querySelector('#who_')
const about1 = document.querySelector('#about1')
const about2 = document.querySelector('#about2')
const skills = document.querySelector('#skills')
const skills_ = document.querySelector('#skills_')
const data = document.querySelector('#data')
const data_ = document.querySelector('#data_')
const langs = document.querySelector('#langs')
const langs_ = document.querySelector('#langs_')
const prog = document.querySelector('#prog')
const prog_ = document.querySelector('#prog_')
const electronics = document.querySelector('#electronics')
const electronics_ = document.querySelector('#electronics_')
const soft_ = document.querySelector('#soft_')
const misc = document.querySelector('#misc')
const misc_ = document.querySelector('#misc_')
const last = document.querySelector('#last')
const last_ = document.querySelector('#last_')

const button = document.querySelector('#btn-change-lang');
const flagBr = document.querySelector('#language-br');
const flagUs = document.querySelector('#language-en');

let lang = 'pt';

const languages = {
  pt: 
    {
      desc: "21 anos. Técnico em eletrônica e futuro engenheiro.<br> Pesquisador, programador e fã de gatos nas horas vagas.",
      who: "Quem sou eu",
      who_: "Sobre um jovem curitibano",
      about1: 'Nascido e criado na capital do Paraná, sou um estudante de Engenharia Eletrônica na <a href="http://portal.utfpr.edu.br/">UTFPR</a>. Cursando o 4º período da faculdade, atualmente sou bolsista de Iniciação Científica com foco em Inteligência Computacional. ',
      about2: "Fascinado por tecnologia desde cedo, descobri minha paixão por eletrônica e programação aos 14 anos. Seja para sistemas embarcados, softwares de alto desempenho ou outras aplicações diferentes, se há programação envolvida, eu tenho interesse. ",
      skills: "Habilidades",
      skills_: "Um cinto de ferramentas que não para de crescer",
      data: "Ciência de dados",
      data_: "Mineração de dados<br/>Computação evolucionária<br/>Visão computacional<br/>Aprendizado de máquina",
      langs: "Idiomas",
      langs_: "<b>Português</b> nativo<br/><b>Inglês</b> avançado<br/><b>Alemão</b> básico",
      prog: "Programação e Computadores",
      prog_: "Linguagens C, C++, Rust e Python<br/> Scripts em bash quando necessário<br/>Sistema operacional GNU/Linux<br/>Redes de computadores",
      electronics: "Eletrônica",
      electronics_: "Eletrônica digital e analógica<br/>Design de placas de circuito impresso<br/>Sistemas microcontrolados",
      soft_: "Trabalho em equipe<br/>Resiliência<br/>Vontade de aprender",
      misc: "Diversos",
      misc_: "Markdown e LaTeX<br/>Sistema de versionamento git<br/>Pacote Office e similares",
      last: "Gostou do que viu?",
      last_: "Entre em contato comigo!",
    },
  en: 
    {
      desc: "21 years. Electronics technician and future engineer.<br> Researcher, programmer and cat lover in my spare time.</p> ",
      who: "Who am I",
      who_: "",
      about1: 'Born and raised in Curitiba, I\'m an Electronic Engineering student at <a href="http://portal.utfpr.edu.br/">UTFPR</a>. Currently I\'m a 2nd-year grad student holding a scholarship for research purposes in Computational Intelligence.',
      about2: "Fascinated by technology ever since I was a child, I discovered my passion for electronics and programming at the age of 14. Be it for embedded systems, high-performance software, or something that's new to me, if programming is involved, I'm all for it.",
      skills: "Skills",
      skills_: "",
      data: "Data science",
      data_: "Data mining<br/>Evolutionary computation<br/>Computer vision<br/>Machine learning",
      langs: "Languages",
      langs_: "<b>Portuguese</b> native<br/><b>English</b> advanced<br/><b>German</b> basic",
      prog: "Programming and computers",
      prog_: "Programming languages C, C++, Python and Rust<br/> Bash Scripting <br/>Windows and GNU/Linux<br/>Computer networks",
      electronics: "Electronics",
      electronics_: "Digital and analogic<br/>PCB design<br/>Embedded systems",
      soft_: "Teamwork<br/>Resilience<br/>Will to learn",
      misc: "Miscellaneous",
      misc_: "Markdown and LaTeX<br/>git version control system<br/>Office Pack and similar",
      last: "Enjoy what you see?",
      last_: "Contact me!",
    }
}

const showLang = (language) =>{
  desc.innerHTML = languages[language].desc;
  who.innerHTML = languages[language].who;
  who_.innerHTML = languages[language].who_;
  about1.innerHTML = languages[language].about1;
  about2.innerHTML = languages[language].about2;
  skills.innerHTML = languages[language].skills;
  skills_.innerHTML = languages[language].skills_;
  data.innerHTML = languages[language].data;
  data_.innerHTML = languages[language].data_;
  langs.innerHTML = languages[language].langs;
  langs_.innerHTML = languages[language].langs_;
  prog.innerHTML = languages[language].prog;
  prog_.innerHTML = languages[language].prog_;
  electronics.innerHTML = languages[language].electronics;
  electronics_.innerHTML = languages[language].electronics_;
  soft_.innerHTML = languages[language].soft_;
  misc.innerHTML = languages[language].misc;
  misc_.innerHTML = languages[language].misc_;
  last.innerHTML = languages[language].last;
  last_.innerHTML = languages[language].last_;
};

const changeButton = () =>{
  flagBr.classList.toggle('active');
  flagUs.classList.toggle('active');
}

try {
  button.addEventListener('click', () =>{
    lang = lang === 'pt' ? 'en' : 'pt';
    showLang(lang);
    changeButton();
  });

  showLang(lang);
}
catch(err) {
}
