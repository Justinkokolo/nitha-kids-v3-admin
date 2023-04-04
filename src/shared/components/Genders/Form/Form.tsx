// Libs
import { h } from 'preact';
import { useState, useEffect } from "react";

// Utils
import { Spacing } from "../../../constants/spacing";
import { Type } from "../../../constants/size";
import { capitalizeText } from "../../../helpers/utils";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { addGender, updateGender } from "../../../redux/features/gender/calls";
import { setGender } from "../../../redux/features/gender/slice";

// Components
import Panel from "../../Panel";
import TextField from "../../TextField";
import Space from "../../Space";
import Button from "../../Button";
import { FlewColumn } from "../../../../styles/common.styles";
import { Color } from "../../../constants/colors";

const Form = () => {
  const dispatch = useAppDispatch();
  const { genders, gender } = useAppSelector((state) => state.gender);
  const { status } = genders;

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    setErrorMessage(value ? "" : "Ce champ est obligatoire");
    if (!value) return;
    dispatch(
      gender
        ? // @ts-ignore
          updateGender({ id: gender.id, name: capitalizeText(value) })
        : // @ts-ignore
          addGender({ name: capitalizeText(value) })
    );
  };

  useEffect(() => {
    if (status === "success") {
      setValue("");
    }
  }, [status]);

  useEffect(() => {
    if (gender) {
      setValue(gender.name);
    }
  }, [gender]);

  useEffect(() => {
    if (value === "") {
      dispatch(setGender(null));
    }
  }, [value]);

  return (
    <Panel size={Type.Medium}>
      <FlewColumn>
        <TextField
          id="gender"
          value={value}
          label="gender's name"
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
