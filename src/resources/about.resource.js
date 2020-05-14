import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faChild, faCubes, faHammer } from "@fortawesome/free-solid-svg-icons";

export const about = {
      header: "Piotr Kielak",
      subheader: "Coś o mnie",
      arr: [
        {
          title: "Kim jestem?",
          icon: [{body: faChild}],
          description: "Jestem początkującym web developerem. W programowaniu zainteresowała mnie możliwość kształtowania przestrzeni wirtualnej, która wpływa na codzienne funkcjonowanie każdego z nas.",
        },
        {
          title: "Technologie",
          icon: [{body:faHtml5, text: "HTML5"}, {body:faCss3Alt,text: "CSS3"}, {body:faJs,text: "JavaScript"}, {body:faReact,text: "React"}, {body:faGitAlt, text: "Git"}],
        },
        {
          title: "Co jeszcze potrafię?",
          icon: [{body:faCubes}],
          description: "Wcześniej zajmowałem się wydrukami 3D na zamówienie. Obsługiwałem sprzęt i wykonywałem zamówione projekty przedmiotów przy użyciu Fusion 360.",
        },
        {
          title: "Hobby",
          icon: [{body:faHammer}],
          description: "Gdy zepsuje mi się jakiś przedmiot, staram się naprawić, zanim go wyrzucę i kupię nowy. Poza tym lubię gotować, czytać nowinki astronomiczne i grzebać w konfiguracji swoich komputerów - zarówno od strony sprzętowej jak i systemowej.",
        },
      ],
};