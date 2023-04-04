// Libs
import { h } from 'preact';
import { useState, useEffect } from "react";

// Utils
import { Spacing } from "../../../constants/spacing";
import { Type } from "../../../constants/size";
import { capitalizeText } from "../../../helpers/utils";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { addBrand, updateBrand } from "../../../redux/features/brand/calls";
import { setBrand } from "../../../redux/features/brand/slice";

// Components
import Panel from "../../Panel";
import TextField from "../../TextField";
import Space from "../../Space";
import Button from "../../Button";
import { FlewColumn } from "../../../../styles/common.styles";
import { Color } from "../../../constants/colors";

const Form = () => {
  const dispatch = useAppDispatch();
  const { brands, brand } = useAppSelector((state) => state.brand);
  const { status } = brands;

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    setErrorMessage(value ? "" : "Ce champ est obligatoire");
    if (!value) return;
    dispatch(
      brand
        ? // @ts-ignore
          updateBrand({ id: brand.id, name: capitalizeText(value) })
        : // @ts-ignore
          addBrand({ name: capitalizeText(value) })
    );
  };

  useEffect(() => {
    if (status === "success") {
      setValue("");
    }
  }, [status]);

  useEffect(() => {
    if (brand) {
      setValue(brand.name);
    }
  }, [brand]);

  useEffect(() => {
    if (value === "") {
      dispatch(setBrand(null));
    }
  }, [value]);

  return (
    <Panel size={Type.Medium}>
      <FlewColumn>
        <TextField
          id="brand"
          value={value}
          label="Brand's name"
          onChange={(text) => setValue(text)}
          errorMessage={value ? "" : errorMessage}
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
