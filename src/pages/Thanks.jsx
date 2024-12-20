import React from "react";
import { AppHeader } from "../components/AppHeader";
import { LinkButton } from "../components/LinkButton";
const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <AppHeader
            headerText="Спасибо за прохождение опроса!"
            headerType="h1"
          />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <LinkButton
            isDisabled={false}
            linkType="button"
            linkText="Получить ссылку"
            linkBtn="/collected"
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
