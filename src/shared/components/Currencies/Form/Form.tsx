// Libs
import { h } from 'preact';
import { useState, useEffect } from "react";

// Utils
import { Spacing } from "../../../constants/spacing";
import { Type } from "../../../constants/size";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  addCurrency,
  updateCurrency,
} from "../../../redux/features/currency/calls";
import { setCurrency } from "../../../redux/features/currency/slice";

// Components
import Panel from "../../Panel";
import TextField from "../../TextField";
import Space from "../../Space";
import Button from "../../Button";
import { FlewColumn } from "../../../../styles/common.styles";
import { Color } from "../../../constants/colors";

const Form = () => {
  const dispatch = useAppDispatch();
  const { currencies, currency } = useAppSelector((state) => state.currency);
  const { status } = currencies;

  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [symbolErrorMessage, setSymbolErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const onSubmit = () => {
    setSymbolErrorMessage(symbol ? "" : "Ce champ est obligatoire");
    setNameErrorMessage(name ? "" : "Ce champ est obligatoire");
    if (!name || !symbol) return;
    dispatch(
      currency
        ? // @ts-ignore
          updateCurrency({ id: currency.id, name, symbol })
        : // @ts-ignore
          addCurrency({ name, symbol })
    );
  };

  useEffect(() => {
    if (status === "success") {
      setName("");
      setSymbol("");
    }
  }, [status]);

  useEffect(() => {
    if (currency) {
      setName(currency.name);
      setSymbol(currency.symbol);
    }
  }, [currency]);

  useEffect(() => {
    if (!name || !symbol) {
      dispatch(setCurrency(null));
    }
  }, [name, symbol]);

  return (
    <Panel size={Type.Medium}>
      <FlewColumn>
        <TextField
          id="name"
          value={name}
          label="Currency's name"
          onChange={(text) => setName(text)}
          errorMessage={name ? "" : nameErrorMessage}
        />
        <Space size={Spacing.Medium} />
        <TextField
          id="symbol"
          value={symbol}
          label="Currency's symbol"
          onChange={(text) => setSymbol(text)}
          errorMessage={symbol ? "" : symbolErrorMessage}
          onSubmit={() => onSubmit()}
        />
        <Space size={Spacing.Medium} />
        <Button
          text="Save"
          onClick={onSubmit}
          size={Type.Large}
          color={Color.white}
          backgroundColor={Color.textDark}
          loading={status === "loading"}
        />
      </FlewColumn>
    </Panel>
  );
};

export default Form;
