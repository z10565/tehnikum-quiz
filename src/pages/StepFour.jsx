import React, { useState} from "react";
import { AppHeader } from "../components/AppHeader";
import {ProgressBar} from "../components/ProgressBar";
import { Answer } from "../components/Answer";
import {LinkButton} from "../components/LinkButton";
const StepFour = () => {
  const variants = [
    {
      id: "variant-1",
      labelText:"1"
    },
    {
      id: "variant-2",
      labelText:"2"
    },
    {
      id: "variant-3",
      labelText:"3"
    },
    {
      id: "variant-4",
      labelText:"4"
    },
    {
      id: "variant-5",
      labelText:"5"
    },
  ]
  const [checkedAnswer, setCheckedAnswer]=useState(null)
  checkedAnswer===null ? localStorage.setItem("satisfaction","") : localStorage.setItem("satisfaction", JSON.stringify(checkedAnswer))
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          
          <ProgressBar currentStep={4}/>
          <div className="question">
          <AppHeader headerText="4. Довольны ли вы учебой у нас?" headerType="h2" />
            <ul className="level-variants">
            {variants.map((elem)=>{
                return <Answer key={elem.id} id={elem.id} labelText={elem.labelText} onChange={()=>setCheckedAnswer(elem.labelText)} checked={checkedAnswer===elem.labelText}/>
              })}
            </ul>
            <LinkButton
              isDisabled={false}
              linkType="button"
              linkText="Далее"
              linkBtn="/thanks"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;


