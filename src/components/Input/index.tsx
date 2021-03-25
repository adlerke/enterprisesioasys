import React, { useCallback, useEffect, useRef, useState } from "react";
import {  TextInputProps } from "react-native";

import { Container, TextInput, Icon,TextError, Divider } from "./style";
import { useField } from "@unform/core";
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
interface InputRef {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, fieldName, error, defaultValue = "" } = useField(name);
  const inputRef = useRef<InputRef>({ value: defaultValue });
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        inputRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);
  return (
    <>
      <Container isFocused={isFocused} isErrored={!!error}>
        <Icon isFilled={isFilled} isFocused={isFocused} name={icon} size={20} />
        <Divider />
        <TextInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          {...rest}
          onChangeText={(value) => {
            inputRef.current.value = value;
          }}
        />
      </Container>
      {error && <TextError> {error} </TextError>}
    </>
  );
};

export default Input;
