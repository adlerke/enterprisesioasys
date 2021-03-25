import React, {useCallback, useRef} from 'react';
import * as Yup from 'yup';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import {FormHandles} from '@unform/core';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import {useAuth} from '../../hooks/auth';
import imgLogo from '../../assets/logo_ioasys.png';
import {Form} from '@unform/mobile';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const {signIn, user} = useAuth();

  console.log(user);

  const handleSignIn = useCallback(async (data: SignInData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um E-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        console.log(errors);
        formRef.current?.setErrors(errors);

        return;
      }
      Alert.alert(
        'Erro na autenticação',
        'Erro na autenticação, cheque as credenciais',
      );
    }
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={imgLogo} />
            <Title>Faça seu logon</Title>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="done"
              />
              <Input
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Entrar
              </Button>
            </Form>
            <ForgotPassword onPress={() => {}} activeOpacity={0.5}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
