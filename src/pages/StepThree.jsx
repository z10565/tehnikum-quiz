import React, { useState} from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { Answer } from "../components/Answer";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const variants = [
    {
      id: "variant-1",
      image: <img src="./img/laugh.png" alt="laugh" />,
      labelText: "Смешной"
    },
    {
      id: "variant-2",
      image: <img src="./img/hearts.png" alt="hearts" />,
      labelText: "Замечательный"
    },
    {
      id: "variant-3",
      image: <img src="./img/smirk.png" alt="smirk" />,
      labelText: "Профессионал"
    },
    {
      id: "variant-4",
      image: <img src="./img/fright.png" alt="fright" />,
      labelText: "Не очень:("
    }
  ];

  const [checkedAnswer, setCheckedAnswer] = useState(null);
  checkedAnswer===null ? localStorage.setItem("emotionsCourse","") : localStorage.setItem("emotionsCourse", JSON.stringify(checkedAnswer))
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3}/>
          <div className="question">
            <AppHeader headerText="3. Опишите учителя одним emoji:" headerType="h2" />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <Answer
                  key={elem.id}
                  id={elem.id}
                  labelText={elem.labelText}
                  onChange={() => setCheckedAnswer(elem.labelText)}
                  checked={checkedAnswer === elem.labelText}
                  image={elem.image} 
                />
              ))}
            </ul>
            <LinkButton
              isDisabled={checkedAnswer === null} 
              linkType="button"
              linkText="Далее"
              linkBtn="/step-four"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;