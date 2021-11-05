import React, { useEffect, useState } from "react";

import { ThemeSelect } from "../../components/ThemeSelect";
import { Button } from "../../components/Button";
import { Container, Led, Description, Result, Buttons } from "./styles";
import { Alert } from "react-native";

export function Principal() {
  const [led, setLed] = useState<string[]>([]);
  const [isExistOperation, setIsExistOperation] = useState(false);

  const [description, setDescription] = useState<string>();
  const [result, setResult] = useState("");

  function handleButton(action: string) {
    setLed([...led, action]);
  }

  function handleAddOperation(operation: string) {
    if (Number(getLastItem())) {
      setLed([...led, operation]);
    } else {
      const newLedValue = [...led];

      if (getLastItem() !== "0") newLedValue.pop();

      newLedValue.push(operation);

      setLed(newLedValue);
    }
  }

  function calcRsult() {
    if (getLastItem() !== "0" && !Number(getLastItem())) {
      return Alert.alert("Formato usado inválido");
    }
    const operation = eval(description!);

    setLed([operation]);
    setResult("");
    setIsExistOperation(false);
  }

  useEffect(() => {
    setDescription((oldState) => led.join(""));
    previwResult();
  }, [led]);

  function getLastItem() {
    return led[led.length - 1];
  }

  function previwResult() {
    if (led.length >= 2 && getLastItem() !== "0" && !Number(getLastItem())) {
      setIsExistOperation(true);
    }

    if (isExistOperation && led.length >= 2 && !isNaN(Number(getLastItem()))) {
      const operation = eval(led.join("")!);
      setResult(operation);
    }
  }

  function operation(operation: string) {}

  function clearLed() {
    setLed([]);
    setResult("");
    setIsExistOperation(false);
  }

  function deleteItem() {
    const newLedValue = [...led];
    newLedValue.pop();

    const existOperation = newLedValue.some((item) => isNaN(Number(item)));

    setLed(newLedValue);

    if (!existOperation) {
      setResult("");
      setIsExistOperation(false);
    }
  }

  return (
    <Container>
      <ThemeSelect />
      <Led>
        <Description>{description}</Description>
        <Result> {result}</Result>
        <Button name="x" onPress={() => deleteItem()} />
      </Led>
      <Buttons>
        <Button name="C" onPress={() => clearLed()} />
        <Button name="( )" onPress={() => handleAddOperation("%")} />
        <Button name="%" onPress={() => handleAddOperation("%")} />
        <Button name="÷" onPress={() => handleAddOperation("/")} />

        <Button name="9" onPress={() => handleButton("9")} />
        <Button name="8" onPress={() => handleButton("8")} />
        <Button name="7" onPress={() => handleButton("7")} />
        <Button name="X" onPress={() => handleAddOperation("*")} />

        <Button name="6" onPress={() => handleButton("6")} />
        <Button name="5" onPress={() => handleButton("5")} />
        <Button name="4" onPress={() => handleButton("4")} />
        <Button name="-" onPress={() => handleAddOperation("-")} />

        <Button name="3" onPress={() => handleButton("3")} />
        <Button name="2" onPress={() => handleButton("2")} />
        <Button name="1" onPress={() => handleButton("1")} />

        <Button name="+" onPress={() => handleAddOperation("+")} />

        <Button name="0" isLarge onPress={() => handleButton("0")} />
        <Button name="." onPress={() => handleButton(".")} />

        <Button name="=" onPress={() => calcRsult()} />
      </Buttons>
    </Container>
  );
}
