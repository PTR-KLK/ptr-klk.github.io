import portfolioBlogStyled from "../resources/portfolio-blog-styled.png";
import todolistRedux from "../resources/todolist-redux.png";

export const projects = {
  header: "Moje Projekty",
  subheader: "JS/React",
  arr: [
    {
      title: "Portfolio-blog-styled",
      demo: "https://ptr-klk.github.io/portfolio-blog-styled/",
      repo: "https://github.com/PTR-KLK/portfolio-blog-styled",
      image: portfolioBlogStyled,
      imageAlt: "project dsecription",
      description:
        "Szablon strony portfolio zbudowany przy pomocy create-react-app. Do styli wykorzystałem podejście CSS-in-JS zrealizowane przy pomocy biblioteki styled-components.",
    },
    {
      title: "Todolist-redux",
      repo: "https://github.com/PTR-KLK/todolist-redux",
      image: todolistRedux,
      imageAlt: "project dsecription",
      description:
        "Aplikacja todo stworzona przy pomocy create-react-app, biblioteki react-redux i wykorzystująca Fetch API do komunikacji z bazą danych, trzymaną na Firebase.",
    },
  ],
};
