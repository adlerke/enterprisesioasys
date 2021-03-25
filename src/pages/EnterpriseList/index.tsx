import React, {useState, useEffect, useCallback, useRef} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import api from '../../services/api';
import * as Yup from 'yup';
import {Container, Title} from './styles';
import {useAuth} from '../../hooks/auth';
import Input from '../../components/Input';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import EnterpriseListComponent from '../../components/EnterpriseListComponent';
interface IEnterprise {
  id: number;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  share_price: number;
}
interface ISearch {
  search: string;
}

const EnterpriseList: React.FC = () => {
  const {signOut} = useAuth();
  const [enterprises, setEnterprises] = useState<IEnterprise[]>([]);
  const formRef = useRef<FormHandles>(null);
  const handleSearch = useCallback(async (data: ISearch) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        search: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      const response = await api.get(`/enterprises?name=${data.search}`);
      setEnterprises(response.data.enterprises);
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
  const getEnterprises = useCallback(async () => {
    try {
      const response = await api.get('enterprises');

      if (response.status === 401) {
        signOut();
      }
      setEnterprises(response.data.enterprises);
    } catch (error) {}

    // console.log(response.data);
  }, [signOut]);
  useEffect(() => {
    getEnterprises();
  }, [getEnterprises]);
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Form ref={formRef} style={{marginTop: 10}} onSubmit={handleSearch}>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          name="search"
          icon="search"
          placeholder="Procurar empresas"
          returnKeyType="done"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
      </Form>

      <Title>Empresas</Title>

      {enterprises.length > 0 ? (
        <EnterpriseListComponent enterprises={enterprises} favIcon={true} />
      ) : (
        <View style={{marginTop: 30, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#666" />
        </View>
      )}
    </Container>
  );
};

export default EnterpriseList;
