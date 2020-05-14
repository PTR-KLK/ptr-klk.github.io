import portfolioBlogStyled from "../resources/portfolio-blog-styled.png";
import todolistRedux from "../resources/todolist-redux.png";

export const projects = {
  header: "Moje Projekty",
  subheader: "JS/React",
  arr: [
    {
      title: "Todolist-redux",
      repo: "https://github.com/PTR-KLK/todolist-redux",
      image: todolistRedux,
      imageAlt: "project dsecription",
      description:['React',
                   'Redux',
                   'Firebase'],
    },
    {
      title: "Portfolio-blog-styled",
      demo: "https://ptr-klk.github.io/portfolio-blog-styled/",
      repo: "https://github.com/PTR-KLK/portfolio-blog-styled",
      image: portfolioBlogStyled,
      imageAlt: "project dsecription",
      description:['React',
                   'Styled Components'],
    },
  ],
};
