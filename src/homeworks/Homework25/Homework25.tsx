import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import Button from "components/Button";

import {
  Homework25Wrapper,
  ShopForm,
  ProductCard,
  ProductInfoContainer,
  ProductParBig,
  ProductParSmall,
  Checkbox,
  ErrorContainer,
  Text,
} from "./styles";

interface FormValues {
  productName: string;
  productPrice: string;
  productDescription: string;
  termsOfUse: boolean;
}

interface Product {
  productName: string;
  productPrice: string;
  productDescription: string;
}

function Homework25() {
  // Создаем state, в котором мы будем хранить данные созданного продукта в виде обьект
  // И с помощью этого стейта отображать карточку
  const [product, setProduct] = useState<Product | undefined>(undefined);

  // Создаем валидационную схему
  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("Необходимо ввести название товара")
      .min(2, "Минимальное количество символов: 2")
      .max(50, "Максимальное количество символов: 50"),
    productPrice: Yup.number()
      .typeError("Цена товара длжна быть числом")
      .required("Необходимо ввести цену товара")
      // max в number работает по-другому, 15 - не максимальное количество символов,
      // а максимальное число
      .test("len", "Max 15 numbers", (val) => val.toString().length <= 15),
    // .max(1500, "Максимальная цена: 1500"),
    productDescription: Yup.string().max(
      150,
      "Максимальное количество символов: 150"
    ),
    termsOfUse: Yup.boolean().oneOf([true], 'Необходимо поставить "галочку"'),
  });

  // Создаем обьект formik
  const formik = useFormik({
    // Создаем начальные значения
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
      termsOfUse: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("submit");

      setProduct({
        productName: values.productName,
        productPrice: values.productPrice,
        productDescription: values.productDescription,
      });
    },
  });

  // По вашей просьбе - показываю как динамически можно создавать Input
  // Создаем обьект для map инпутов, ключом будет являться name инпутов, а значением labelName

  const inputsInfo = {
    productName: {
      labelName: "Название товара*",
      placeholder: "Введите название товара",
    },
    productPrice: {
      labelName: "Цена товара*",
      placeholder: "Введите цену товара",
    },
  };

  // Далее делаем map ключец обьекта и возвращаем созданные при мэпе Input
  // этот способ более трудозатратный, однако он очень хороший, когда у нас много однотипных инпутов
  // Например 10 инпутов, почти с идентичной логикой и пропсами
  //keyof typeof - это TypeScript-оператор, который используется для извлечения типа ключей из объекта или типа
  const inputs = Object.keys(inputsInfo).map((inputName) => {
    return (
      <Input
        // Получаем доступ к labelName сначала из productName, затем productPrice у обьекта inputsInfo
        labelName={inputsInfo[inputName as keyof typeof inputsInfo].labelName}
        // Получаем доступ к placeholder сначала из productName, затем productPrice у обьекта inputsInfo
        placeholder={
          inputsInfo[inputName as keyof typeof inputsInfo].placeholder
        }
        name={inputName}
        // Получаем value для каждого компонента Input, через inputName
        value={formik.values[inputName as keyof typeof inputsInfo]}
        onChange={formik.handleChange}
        // Получаем error для каждого компонента Input, через inputName
        error={formik.errors[inputName as keyof typeof inputsInfo]}
      />
    );
  });

  return (
    <Homework25Wrapper>
      <ShopForm onSubmit={formik.handleSubmit}>
        <Text>Создание товара</Text>
        {/* <Input
          labelName="Название товара*"
          placeholder="Введите название товара"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={formik.errors.productName}
        />
        <Input
          labelName="Цена товара*"
          placeholder="Введите цену товара"
          name="productPrice"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={formik.errors.productPrice}
        /> */}
        {inputs}
        <p>Описание товара</p>
        <textarea
          placeholder="Введите описание товара"
          name="productDescription"
          value={formik.values.productDescription}
          onChange={formik.handleChange}
        />
        <ErrorContainer>{formik.errors.productDescription}</ErrorContainer>
        <p>Правило использования*</p>
        <Checkbox
          onChange={formik.handleChange}
          name="termsOfUse"
          type="checkbox"
        />
        <ErrorContainer>{formik.errors.termsOfUse}</ErrorContainer>
        <Button name="Создать товар" type="submit"></Button>
        <Text>* - обязательное поле</Text>
      </ShopForm>
      {product && (
        <ProductCard>
          <ProductInfoContainer>
            <ProductParSmall>Название товара</ProductParSmall>
            <ProductParBig>{product?.productName}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Цена товара</ProductParSmall>
            <ProductParBig>{product?.productPrice}</ProductParBig>
          </ProductInfoContainer>
          <ProductInfoContainer>
            <ProductParSmall>Описание товара</ProductParSmall>
            <ProductParBig>{product?.productDescription}</ProductParBig>
          </ProductInfoContainer>
        </ProductCard>
      )}
    </Homework25Wrapper>
  );
}

export default Homework25;
