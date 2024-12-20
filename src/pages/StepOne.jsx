import React, { useState, useEffect } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [userError, setUserError] = useState(false);
  const [buttonError, setButtonError] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!userAnswer) {
      setUserError(true);
    } else {
      setUserError(false);
      navigate("/step-two");
      localStorage.setItem("userOrigin", JSON.stringify(userAnswer));
    }
  };

  useEffect(() => {
    if (!userAnswer) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  }, [userAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <AppHeader
              headerText="1. Откуда вы про нас узнали?"
              headerType="h2"
            />
            <AppInput
              inputPlaceholder="Введите текст"
              inputValue={userAnswer}
              hasError={userError}
              inputChange={setUserAnswer}
            />
            <AppButton
              style="margin: 30px"
              onClick={handleClick}
              isDisabled={buttonError}
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
