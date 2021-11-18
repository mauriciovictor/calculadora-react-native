import React, { useEffect, useState } from "react";

import { ThemeSelect } from "../../components/ThemeSelect";
import { Button } from "../../components/Button";
import { Container, Led, Description, Result, Buttons, Footer } from "./styles";
import { Alert } from "react-native";
import { ButtonDelete } from "../../components/ButtonDelete";

export function Principal() {
  const [led, setLed] = useState<string[]>([]);
  const [isExistOperation, setIsExistOperation] = useState(false);

  const [description, setDescription] = useState<string>();
  const [result, setResult] = useState("");

  function handleButton(action: string) {
    const newLed = [...led];

    if (Number(newLed[newLed.length - 1])) {
      newLed[newLed.length - 1] += action;
      setLed(newLed);
    } else {
      setLed([...led, action]);
    }
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

  function calc() {
    let newCalc = [] as string[];

    led.map((item, index) => {
      if (item === "%") {
        let lastItem = newCalc.length - 1;
        let numberWithPercentege = newCalc[lastItem - 2];

        if (!isNaN(Number(numberWithPercentege))) {
          let operation = led[lastItem - 1];
          let percentegeNumber = led[index - 1];

          let calcPercentegeNumber = `${numberWithPercentege}${operation}(${numberWithPercentege} * ${percentegeNumber}) / 100`;
          newCalc.pop();
          newCalc.pop();
          newCalc.pop();

          newCalc.push(calcPercentegeNumber);
        }
      } else {
        newCalc.push(item);
      }
    });

    return newCalc;
  }

  function calcRsult() {
    if (
      getLastItem() !== "%" &&
      getLastItem() !== "0" &&
      !Number(getLastItem())
    ) {
      return Alert.alert("Formato usado inválido");
    }

    const newCalc = calc();

    const operation = eval(newCalc.join("")!);
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

    if (
      isExistOperation &&
      led.length >= 2 &&
      (getLastItem() === "%" || !isNaN(Number(getLastItem())))
    ) {
      const operation = eval(calc().join("")!);
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

    const lastItem = getLastItem() ?? "";

    if (lastItem.length > 1) {
      let lastItemIndex = newLedValue.length - 1;
      newLedValue[lastItemIndex] = newLedValue[lastItemIndex].slice(
        0,
        newLedValue[lastItemIndex].length - 1
      );
    } else {
      newLedValue.pop();
    }

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
        <Footer>
          <ButtonDelete onPress={() => deleteItem()} />
        </Footer>
      </Led>
      <Buttons>
        <Button name="C" isDelete onPress={() => clearLed()} />
        <Button
          name="( )"
          isOperation
          onPress={() => handleAddOperation("()")}
        />
        <Button name="%" isOperation onPress={() => handleAddOperation("%")} />
        <Button name="÷" isOperation onPress={() => handleAddOperation("/")} />

        <Button name="9" onPress={() => handleButton("9")} />
        <Button name="8" onPress={() => handleButton("8")} />
        <Button name="7" onPress={() => handleButton("7")} />
        <Button name="X" isOperation onPress={() => handleAddOperation("*")} />

        <Button name="6" onPress={() => handleButton("6")} />
        <Button name="5" onPress={() => handleButton("5")} />
        <Button name="4" onPress={() => handleButton("4")} />
        <Button name="-" isOperation onPress={() => handleAddOperation("-")} />

        <Button name="3" onPress={() => handleButton("3")} />
        <Button name="2" onPress={() => handleButton("2")} />
        <Button name="1" onPress={() => handleButton("1")} />

        <Button name="+" isOperation onPress={() => handleAddOperation("+")} />

        <Button name="0" isLarge onPress={() => handleButton("0")} />
        <Button name="." isOperation onPress={() => handleButton(".")} />

        <Button name="=" isOperation onPress={() => calcRsult()} />
      </Buttons>
    </Container>
  );
}
