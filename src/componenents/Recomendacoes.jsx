import { useState, useEffect } from 'react';
import Card from './Card';

function Recomendacoes() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetch('https://orange-evolution.up.railway.app/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);

  return (
    <section>
      <h2>Recomendações</h2>
      <div>
        {courses?.map((course, index) => {
          if (index < 3) return <Card data={course} />;
          return null;
        })}
      </div>
    </section>
  );
}

export default Recomendacoes;

/*
[
    {
        "id": 1,
        "nameCourse": "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
        "type": 2,
        "author": 1,
        "length": "00:06:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 2,
        "nameCourse": "Design Thinking e carreira: como migrei de Psicologia para UX Design",
        "type": 2,
        "author": 1,
        "length": "00:05:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 3,
        "nameCourse": "De advogada a desenvolvedora: um relato sobre minha migração de carreira",
        "type": 2,
        "author": 1,
        "length": "00:06:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/de-advogada-a-desenvolvedora-um-relato-sobre-minha-migra%C3%A7%C3%A3o-de-carreira-e-dicas-para-quem-pretende-45ad5df833b5",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 4,
        "nameCourse": "Culture Code",
        "type": 6,
        "author": 2,
        "length": "01:22:25",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=n0KH8dQSrv0",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 5,
        "nameCourse": "Product Owner e Scrum Master",
        "type": 6,
        "author": 2,
        "length": "01:13:33",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=_ku7bY5GtIY",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 6,
        "nameCourse": "Product Owner",
        "type": 2,
        "author": 3,
        "length": "00:08:00",
        "status": 1,
        "url": "https://www.cursospm3.com.br/product-owner-o-que-faz-salario-habilidades/",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 7,
        "nameCourse": "O que é um scrum master?",
        "type": 2,
        "author": 4,
        "length": "00:06:00",
        "status": 1,
        "url": "https://www.atlassian.com/br/agile/scrum/scrum-master",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 8,
        "nameCourse": "A Day in the Life of a Scrum Master",
        "type": 2,
        "author": 5,
        "length": "00:05:00",
        "status": 1,
        "url": "https://resources.scrumalliance.org/Article/day-life-scrum-master",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 9,
        "nameCourse": "Com grandes códigos, vem grandes responsabilidades",
        "type": 6,
        "author": 2,
        "length": "01:25:20",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=N78-5gHLzbE",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 10,
        "nameCourse": "Como se tornar um desenvolvedor full-stack no próximo ano",
        "type": 2,
        "author": 6,
        "length": "00:05:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 11,
        "nameCourse": "Mas o que é UX?",
        "type": 2,
        "author": 1,
        "length": "00:04:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 12,
        "nameCourse": "UX e UI: conheça as semelhanças e diferenças entre ambos",
        "type": 2,
        "author": 6,
        "length": "00:05:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 13,
        "nameCourse": "UX Rainbow: como nossa equipe trabalha",
        "type": 6,
        "author": 2,
        "length": "01:25:58",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=_RsYz_iKP4k",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 14,
        "nameCourse": "Qual o papel do QA em uma equipe?",
        "type": 2,
        "author": 1,
        "length": "00:04:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/qual-o-papel-do-qa-em-uma-equipe-8e8147be28dd",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 15,
        "nameCourse": "Selo Q.A. de qualidade",
        "type": 6,
        "author": 2,
        "length": "01:23:10",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=pP5M7lf6JmQ",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 16,
        "nameCourse": "O que é \"stakeholder\"",
        "type": 2,
        "author": 3,
        "length": "00:02:00",
        "status": 1,
        "url": "https://www.cursospm3.com.br/glossario/stakeholder/",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 17,
        "nameCourse": "Leandro Karnal em O Futuro da Liderança - BTG Bankers Experience 2021",
        "type": 6,
        "author": 7,
        "length": "00:56:33",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=b9A34yUvzEc",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 18,
        "nameCourse": "Orange Juice Cast #17 - Scrum: uma revolução nas terras da T.I.",
        "type": 5,
        "author": 1,
        "length": "00:57:52",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=TmTupAe14T4",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 19,
        "nameCourse": "Fundamentos iniciais da Metodologia Ágil",
        "type": 2,
        "author": 1,
        "length": "00:04:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/fundamento-iniciais-da-metodologia-%C3%A1gil-a4f3f0a3f025",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 20,
        "nameCourse": "Manifesto Ágil: a Bíblia das Metodologias Ágeis",
        "type": 2,
        "author": 1,
        "length": "00:05:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/manifesto-%C3%A1gil-a-b%C3%ADblia-das-metodologias-%C3%A1geis-1a4ec9f220a",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 21,
        "nameCourse": "Squads - o que é e como funciona?",
        "type": 2,
        "author": 2,
        "length": "00:06:00",
        "status": 1,
        "url": "https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 22,
        "nameCourse": "MVP: o que é e como construir um Produto Mínimo Viável",
        "type": 2,
        "author": 3,
        "length": "00:08:00",
        "status": 1,
        "url": "https://www.cursospm3.com.br/blog/mvp-o-que-e-e-como-construir-um-produto-minimo-viavel/",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 23,
        "nameCourse": "Soft Skills: o que são e os benefícios de desenvolvê-las",
        "type": 2,
        "author": 6,
        "length": "00:04:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/soft-skills-o-que-sao-e-os-beneficios-de-desenvolve-las",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 24,
        "nameCourse": "Aprimorando a comunicação",
        "type": 2,
        "author": 1,
        "length": "00:03:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/aprimorando-a-comunica%C3%A7%C3%A3o-3933cbc886b4",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 25,
        "nameCourse": "Por que melhorar a comunicação",
        "type": 2,
        "author": 1,
        "length": "00:04:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/por-que-um-programador-deve-desconstruir-a-ideia-de-que-n%C3%A3o-precisa-lidar-com-pessoas-e-como-9974bcebf4a9",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 26,
        "nameCourse": "UX Design e Comunicação",
        "type": 2,
        "author": 1,
        "length": "00:05:00",
        "status": 1,
        "url": "https://medium.com/orangejuicefc/ux-design-e-comunica%C3%A7%C3%A3o-b32a44ef7e42",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 27,
        "nameCourse": "Coisas que você deveria saber antes de trabalhar em equipe",
        "type": 6,
        "author": 2,
        "length": "00:59:48",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=gG0zZoj595U",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 28,
        "nameCourse": "A poderosa união entre design de UX e desenvolvimento de software",
        "type": 2,
        "author": 8,
        "length": "00:05:00",
        "status": 1,
        "url": "https://www.linkedin.com/pulse/poderosa-uni%C3%A3o-entre-design-de-ux-e-desenvolvimento-de-oliveira/?originalSubdomain=pt",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 29,
        "nameCourse": "LGPD: Desvendando o bicho de 7 cabeças",
        "type": 6,
        "author": 1,
        "length": "01:01:31",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=KKLDwHyQATA",
        "roadmap": 4,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 30,
        "nameCourse": "Design Para Quem Não é Designer: Princípios de Design",
        "type": 4,
        "author": 55,
        "length": null,
        "status": 1,
        "url": "https://www.amazon.com.br/dp/857416836X/ref=cm_sw_r_tw_dp_4AHBKZPKDK9J290N0T28?_encoding=UTF8&psc=1",
        "roadmap": 5,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 31,
        "nameCourse": "Comunicação não violenta",
        "type": 4,
        "author": 55,
        "length": null,
        "status": 1,
        "url": "https://www.amazon.com.br/dp/8571838267/ref=cm_sw_r_tw_dp_PRXG1BFCP2ZYTXVCVH2Z?_encoding=UTF8&psc=1",
        "roadmap": 5,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 32,
        "nameCourse": "Arrume sua cama",
        "type": 4,
        "author": 55,
        "length": null,
        "status": 1,
        "url": "https://www.amazon.com.br/dp/8542215788/ref=cm_sw_r_tw_dp_CP0QF5VZAEJDP8T5PGGF?_encoding=UTF8&psc=1",
        "roadmap": 5,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 33,
        "nameCourse": "O design do dia a dia",
        "type": 4,
        "author": 55,
        "length": null,
        "status": 1,
        "url": "https://www.amazon.com.br/dp/8532520839/ref=cm_sw_r_tw_dp_0A8Q2AJE82HQ6S4MVFC3?_encoding=UTF8&psc=1",
        "roadmap": 5,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 34,
        "nameCourse": "Mini Curso Javascript do Zero",
        "type": 3,
        "author": 18,
        "length": "03:30:00",
        "status": 1,
        "url": "https://acesse.cubos.academy/minicurso-javascript?hsLang=pt",
        "roadmap": 5,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 35,
        "nameCourse": "O que um Dev júnior pode ensinar?",
        "type": 5,
        "author": 1,
        "length": "00:50:29",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=qZ4ZKJSmf4k",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 36,
        "nameCourse": "Qual a melhor linguagem de programação?",
        "type": 5,
        "author": 1,
        "length": "00:51:06",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=zTMvQD5EtJw",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 37,
        "nameCourse": "Habilidades além do código",
        "type": 5,
        "author": 1,
        "length": "00:45:01",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=Mmukepu3yRs",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 38,
        "nameCourse": "Dúvidas sobre carreira",
        "type": 5,
        "author": 1,
        "length": "00:57:54",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=bZQx1oHMbHg",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 39,
        "nameCourse": "Lógica de programação e algoritmos",
        "type": 3,
        "author": 9,
        "length": "02:20:00",
        "status": 1,
        "url": "https://www.udemy.com/course/logica-de-programacao-e-algoritmos-iniciante/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 40,
        "nameCourse": "Curso de Lógica de Programação",
        "type": 5,
        "author": 10,
        "length": "07:58:07",
        "status": 1,
        "url": "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 41,
        "nameCourse": "Instalar o Linux no Windows com o WSL",
        "type": 2,
        "author": 11,
        "length": "00:20:00",
        "status": 1,
        "url": "https://docs.microsoft.com/pt-br/windows/wsl/install",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 42,
        "nameCourse": "Terminal Linux",
        "type": 3,
        "author": 9,
        "length": "00:55:00",
        "status": 1,
        "url": "https://www.udemy.com/course/terminal-de-comandos-linux/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 43,
        "nameCourse": "Shell Script: Introdução e Como Automatizar Tarefas",
        "type": 2,
        "author": 6,
        "length": "00:15:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/automatizando-tarefas-com-shell-script",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 44,
        "nameCourse": "Versionamento com Git",
        "type": 5,
        "author": 1,
        "length": "01:03:15",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=9k_lIYuRtg8",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 45,
        "nameCourse": "Git e Github para iniciantes",
        "type": 3,
        "author": 9,
        "length": "02:05:00",
        "status": 1,
        "url": "https://www.udemy.com/course/git-e-github-para-iniciantes/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 46,
        "nameCourse": "Introdução a Bancos de Dados e Linguagem SQL",
        "type": 3,
        "author": 9,
        "length": "01:59:00",
        "status": 1,
        "url": "https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 47,
        "nameCourse": "Básico HTML, CSS e Javascript",
        "type": 3,
        "author": 9,
        "length": "02:11:00",
        "status": 1,
        "url": "https://www.udemy.com/course/criando-site-html-css-e-javascript/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 48,
        "nameCourse": "Introdução à linguagem CSS",
        "type": 3,
        "author": 9,
        "length": "01:27:00",
        "status": 1,
        "url": "https://www.udemy.com/course/introducao-a-linguagem-css/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 49,
        "nameCourse": "Curso de SASS",
        "type": 3,
        "author": 12,
        "length": "01:45:59",
        "status": 1,
        "url": "https://www.youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 50,
        "nameCourse": "Curso de HTML, CSS e Bootstrap",
        "type": 3,
        "author": 13,
        "length": "01:53:23",
        "status": 1,
        "url": "https://www.youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 51,
        "nameCourse": "Curso de LESS",
        "type": 3,
        "author": 14,
        "length": "02:45:00",
        "status": 1,
        "url": "https://www.cursa.com.br/home/course/curso-de-less/189",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 52,
        "nameCourse": "Descomplicando SPA's",
        "type": 2,
        "author": 15,
        "length": "00:15:00",
        "status": 1,
        "url": "https://medium.com/trainingcenter/descomplicando-spas-caa8f57bdbf3",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 53,
        "nameCourse": "Single-page application vs. multiple-page application",
        "type": 2,
        "author": 16,
        "length": "00:06:00",
        "status": 1,
        "url": "https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 54,
        "nameCourse": "Curso Javascript + 14 Mini-Projetos",
        "type": 3,
        "author": 9,
        "length": "04:35:31",
        "status": 1,
        "url": "https://www.youtube.com/watch?v=i6Oi-YtXnAU",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 55,
        "nameCourse": "Curso de Java",
        "type": 3,
        "author": 10,
        "length": "11:36:40",
        "status": 1,
        "url": "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 56,
        "nameCourse": "HTTP: Desmistificando o protocolo da Web",
        "type": 2,
        "author": 6,
        "length": "00:45:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 57,
        "nameCourse": "O que é uma API?",
        "type": 2,
        "author": 17,
        "length": "03:00:00",
        "status": 1,
        "url": "https://aws.amazon.com/pt/what-is/api/",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 58,
        "nameCourse": "Qual é a diferença entre HTTP e HTTPS?",
        "type": 2,
        "author": 6,
        "length": "00:15:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/qual-e-diferenca-entre-http-e-https",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    },
    {
        "id": 59,
        "nameCourse": "Métodos de requisição do HTTP",
        "type": 2,
        "author": 6,
        "length": "00:10:00",
        "status": 1,
        "url": "https://www.alura.com.br/artigos/metodos-de-requisicao-do-http",
        "roadmap": 1,
        "createdAt": "2022-11-02T15:00:30.000Z",
        "updatedAt": "2022-11-02T16:00:30.000Z"
    }
]
*/
