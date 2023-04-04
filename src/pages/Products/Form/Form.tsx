// Libs
import { Fragment, h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from "react";

// Utils
import { Spacing } from "../../../shared/constants/spacing";
import { FontSize, FontWeight } from "../../../shared/constants/fonts";
import { Color } from "../../../shared/constants/colors";
import { Type } from "../../../shared/constants/size";
import routes from "../../../shared/routes";
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";
import { loadResources } from "../../../shared/redux/features/resource/calls";
import { loadProducts, addProduct } from "../../../shared/redux/features/product/calls";
import { refactorList } from "../../../shared/helpers/utils";

// Components
import AuthCheck from '../../../shared/components/AuthCheck';
import Typography from "../../../shared/components/Typography";
import Space from "../../../shared/components/Space/Space";
import Button from "../../../shared/components/Button";
import Panel from "../../../shared/components/Panel";
import {
  ActionsWrapper,
  ColumnsWrapper,
  Column,
  ColumnsSeparator,
  FlewRowColumn,
} from "../../../styles/common.styles";
import TextField from "../../../shared/components/TextField";
import SelectField from "../../../shared/components/SelectField";
import ProductsSearch from "../../../shared/components/ProductsSearch";
import Size from "./Size";
import LinkedProduct from './LinkedProduct';
import Alert from "../../../shared/components/Alert";
import { Container } from "../../../styles/common.styles";

const initialForm = {
  ['name']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['position']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['color']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['category']: {
    value: {
      value: '',
    },
    errorMessage: '',
    required: true
  },
  ['quantity']: {
    value: '',
    errorMessage: '',
    required: false
  },
  ['gender']: {
    value: {
      value: '',
    },
    errorMessage: null,
    required: true
  },
  ['brand']: {
    value: {
      value: '',
    },
    errorMessage: '',
    required: true
  },
  ['currency']: {
    value: {
      value: '',
    },
    errorMessage: '',
    required: true
  },
  ['description']: {
    value: '',
    errorMessage: '',
    required: false
  },
  ['price']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['buyingPrice']: {
    value: '',
    errorMessage: '',
    required: true
  }
};

const Form = () => {
  const [categoriesList, setCategoriesList] = useState<
    { value: number; text: string }[]
  >([]);
  const [currenciesList, setCurrenciesList] = useState<
    { value: number; text: string }[]
  >([]);
  const [sizesList, setSizesList] = useState<{ value: number | null; text: string }[]>(
    []
  );
  const [brandsList, setBrandsList] = useState<
    { value: number; text: string }[]
  >([]);
  const [gendersList, setGendersList] = useState<
    { value: number; text: string }[]
  >([]);
  const [form, setForm] = useState(initialForm);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizesAndQuantities, setSizesAndQuantities] = useState([]);
  const [sizesAndQuantitiesErrorMessage, setSizesAndQuantitiesErrorMessage] = useState('');
  const [linkedProducts, setLinkedProducts] = useState<{
    text: string,
    category: string,
    value: number,
    image: string
  }[]>([]);

  const { resources } = useAppSelector((state) => state.resource);
  const { products, product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadResources());
  }, []);

  useEffect(() => {
    if (resources.status === "success") {
      const { data } = resources;
      // @ts-ignore
      const { categories, sizes, brands, genders, currencies } = data;
      setCategoriesList(refactorList(categories));
      setSizesList([{
        value: null,
        text: ''
      }, ...refactorList(sizes)]);
      setBrandsList(refactorList(brands));
      setGendersList(refactorList(genders));
      setCurrenciesList(refactorList(currencies));
      dispatch(loadProducts());
    }
  }, [resources.status]);

  const handleChange = (target: string, value: number | string | null) => {
    let newForm = form;
    newForm = {
      ...form,
      [target]: {
        value: value,
        errorMessage: value ? '' : 'Ce champ est obligatoire',
      }
    };
    setForm(newForm);
  };

  const extractIds = () => {
    let ids: number[] = [];
    linkedProducts.filter(item => {
      // @ts-ignore
      ids.push(item.value);
    });
    return ids;
  };

  const onSave = () => {
    setSizesAndQuantitiesErrorMessage('');

    const { data } = product;
    if (!data) {
      Object.values(form).filter((item, index) => {
        const { value, required } = item;
        if (!value && required) {
          handleChange(Object.keys(form)[index], value);
          return;
        }
      });
    }

    if (sizesAndQuantities.length < 1) {
      setSizesAndQuantitiesErrorMessage('Les tailles sont obligatoires');
      return;
    }

    let payload: any = {
      name: form['name'].value,
      price: form['price'].value,
      buyingPrice: form['buyingPrice'].value,
      // @ts-ignore
      published: 1,
      position: form['position'].value,
      color: form['color'].value,
      categories_id: form['category'].value?.value,
      genders_id: form['gender'].value?.value,
      brands_id: form['brand'].value?.value,
      currencies_id: form['currency'].value?.value,
      sizes: [],
      linkedProducts: extractIds()
    };

    let sizes: { size: string, quantity: string}[] = [];
    sizesAndQuantities.filter(item => {
      sizes.push({
        // @ts-ignore
        size: item.size.value,
        // @ts-ignore
        quantity: item.quantity
      });
    });
    payload.sizes = sizes;

    // @ts-ignore
    dispatch(addProduct(payload));
  };

  const removeFromSizesAndQuantities = (size: any) => {
    let arr : any = [];
    sizesAndQuantities.filter(s => {
      // @ts-ignore
      if (s.size !== size) {
        arr.push(s);
      }
    });
    setSizesAndQuantities(arr);
  };

  const getProducts = () => {
    let arr : {
      text: string,
      category: string,
      value: number,
      image: string
    }[] = [];
    products.data.filter(item => {
      if (item.id !== product.data?.id) {
        arr.push({
          text: item.name,
          category: item.category.name,
          value: item.id,
          image: item.pictures[0]?.desktop
        });
      }
    });
    return arr;
  };

  const addToLinkedProducts = (item: {
    text: string,
    category: string,
    value: number,
    image: string
  }) => {
    const product = linkedProducts.find(product => product.value === item.value);
    if (!product) {
      const arr = [...linkedProducts, item];
      setLinkedProducts(arr);
    }
  };

  const removeFromLinkedProducts = (value: string | number) => {
    let arr : any = [];
    linkedProducts.filter(item => {
      // @ts-ignore
      if (item.value !== value) {
        arr.push(item);
      }
    });
    setLinkedProducts(arr);
  };

  useEffect(() => {
    if (product.data) {
      const { sizes, linked_products } = product.data;

      if (sizes) {
        // @ts-ignore
        let arrSizes = [];
        sizes.filter(size => {
          arrSizes.push({
            // @ts-ignore
            size: {
              text: size.name,
              value: size.id
            },
            // @ts-ignore
            quantity: size.pivot.quantity
          });
        });
        // @ts-ignore
        setSizesAndQuantities(arrSizes);
        
        // @ts-ignore
        let arrLinkedProducts = [];
        linked_products.filter(item => {
          arrLinkedProducts.push({
            // @ts-ignore
            text: item.product.name,
            // @ts-ignore
            category: item.product.category.name,
            // @ts-ignore
            value: item.product?.id,
            // @ts-ignore
            image: item.product.pictures[0]?.desktop
          });
        });
        // @ts-ignore
        setLinkedProducts(arrLinkedProducts);
      }

    }
  }, [product]);

  const { type, message } = products.alert;
  const isSubmitting = products.status === 'loading';
  const isLoading = status === 'loading';
  
  const pageTitle = "Add New Product";

  return (
    <div>
      <AuthCheck authenticatable />
      <Alert type={type} text={message} show={!!message} />
      <Container>
        <ActionsWrapper>
          <Typography
            text={isLoading ? "Un instant..." : pageTitle}
            weight={FontWeight.SemiBold}
            color={Color.textDark}
            size={FontSize.XLarge}
          />
          <Button
            text="Products List"
            onClick={() => route(routes.PRODUCTLIST.path)}
            color={Color.white}
            backgroundColor={Color.blue}
            size={Type.Medium}
          />
        </ActionsWrapper>
        <Space size={Spacing.Medium} />
        <Panel size={Type.Large}>
          <ColumnsWrapper>
            <Column flex={2}>
              <ColumnsWrapper>
                <TextField
                  label="Name"
                  id="name"
                  onChange={(text) => handleChange('name', text)}
                  errorMessage={form['name'].errorMessage}
                />
              </ColumnsWrapper>
              <Space size={Spacing.Medium} />
              <ColumnsWrapper>
                <Column flex={1}>
                  <TextField
                    label="Position"
                    id="position"
                    type="number"
                    onChange={(text) => handleChange('position', text)}
                    errorMessage={form['position'].errorMessage}
                  />
                </Column>
                <ColumnsSeparator size={Spacing.Medium} />
                <Column flex={2}>
                  <TextField
                    label="Color"
                    id="color"
                    onChange={(text) => handleChange('color', text)}
                    errorMessage={form['color'].errorMessage}
                  />
                </Column>
              </ColumnsWrapper>
              <Space size={Spacing.Medium} />
              <ColumnsWrapper>
                <Column flex={2}>
                  <SelectField
                    id="category"
                    label="Category"
                    // @ts-ignore
                    onChange={(item) => handleChange('category', item)}
                    errorMessage={form['category'].errorMessage}
                    list={categoriesList}
                  />
                </Column>
                <ColumnsSeparator size={Spacing.Medium} />
                <Column flex={1}>
                  <SelectField
                    id="gender"
                    label="Gender"
                    // @ts-ignore
                    onChange={(item) => handleChange('gender', item)}
                    // @ts-ignore
                    errorMessage={form['gender'].errorMessage}
                    list={gendersList}
                  />
                </Column>
              </ColumnsWrapper>
              <Space size={Spacing.Medium} />
              <SelectField
                id="brand"
                label="Brand"
                // @ts-ignore
                onChange={(item) => handleChange('brand', item)}
                errorMessage={form['brand'].errorMessage}
                list={brandsList}
              />
              <Space size={Spacing.Medium} />
              <SelectField
                id="currency"
                label="Currency"
                // @ts-ignore
                onChange={(item) => handleChange('currency', item)}
                errorMessage={form['currency'].errorMessage}
                list={currenciesList}
              />
              <Space size={Spacing.Medium} />
              <TextField label="Description" id="description" isTextArea />
              <Space size={Spacing.Medium} />
              <ColumnsWrapper>
                <Column flex={1.2}>
                  <TextField
                    label="Price"
                    id="price"
                    type="number"
                    onChange={(text) => handleChange('price', text)}
                    errorMessage={form['price'].errorMessage}
                  />
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <TextField
                    label="Buying Price"
                    id="buyingPrice"
                    type="number"
                    onChange={(text) => handleChange('buyingPrice', text)}
                    errorMessage={form['buyingPrice'].errorMessage}
                  />
                </Column>
              </ColumnsWrapper>
              <Space size={Spacing.Large} />
              <FlewRowColumn>
                <Button
                  text="Save Product"
                  onClick={() => onSave()}
                  color={Color.white}
                  backgroundColor={Color.blue}
                  size={Type.Large}
                  loading={isSubmitting}
                />
              </FlewRowColumn>
            </Column>
            <ColumnsSeparator size={Spacing.Large} />
            <Column flex={2.5}>
              <ColumnsWrapper>
                <Column flex={1}>
                  <SelectField
                    id="size"
                    label="Size"
                    // @ts-ignore
                    onChange={(item) => setSelectedSize(item)}
                    // @ts-ignore
                    list={sizesList}
                    // @ts-ignore
                    value={selectedSize}
                  />
                </Column>
              </ColumnsWrapper>
              {selectedSize && (
                <Fragment>
                  <Space size={Spacing.Medium} />
                  <ColumnsWrapper>
                    <Column flex={3}>
                      <TextField label="Quantity" id="quantity" onChange={(text) => handleChange('quantity', text)} />
                    </Column>
                    <ColumnsSeparator size={Spacing.Large} />
                    <Column flex={1}>
                      <Space size={Spacing.Large} />
                      <Button
                        text="Add Size"
                        onClick={() => {
                          // @ts-ignore
                          setSizesAndQuantities([...sizesAndQuantities, {
                            size: selectedSize,
                            // @ts-ignore
                            quantity: form['quantity'].value
                          }]);
                          setSelectedSize(null);
                          setSizesAndQuantitiesErrorMessage('');
                        }}
                        color={Color.darkBlue}
                        backgroundColor={Color.gray}
                        size={Type.Small}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Fragment>
              )}
              <Space size={Spacing.Large} />
              {sizesAndQuantities.length > 0 && (
                <Fragment>
                  <Typography
                    text="PRODUCT'S SIZES"
                    size={FontSize.XXXSmall}
                    weight={FontWeight.SemiBold}
                    color={Color.default}
                  />
                  <Space size={Spacing.Small} />
                </Fragment>
              )}
              {sizesAndQuantities.map((item: {
                size: {
                  value: number,
                  text: string
                };
                quantity: number;
              }, index) => {
                return (
                  <Size
                    size={item.size}
                    quantity={item.quantity}
                    key={index}
                    onDelete={removeFromSizesAndQuantities}
                  />
                );
              })}
              {!!sizesAndQuantitiesErrorMessage && <Typography size={FontSize.XSmall} text={sizesAndQuantitiesErrorMessage} color={Color.red} />}
              <Space size={Spacing.Large} />
              <ProductsSearch
                id="colors"
                label="Linked Products"
                // @ts-ignore
                onChange={(item) => addToLinkedProducts(item)}
                list={getProducts()}
              />
              <Space size={Spacing.Large} />
              {linkedProducts.length > 0 && (
                <Fragment>
                  <Typography
                    text="LINKED PRODUCTS"
                    size={FontSize.XXXSmall}
                    weight={FontWeight.SemiBold}
                    color={Color.default}
                  />
                  <Space size={Spacing.Small} />
                </Fragment>
              )}
              {linkedProducts.map((item: {
                value: string | number;
                text: string,
                image: string,
                category: string
              }, index) => {
                const { value, text, image } = item;
                return (
                  <LinkedProduct
                    value={value}
                    text={text}
                    image={image}
                    key={index}
                    onDelete={value => removeFromLinkedProducts(value)}
                  />
                );
              })}
            </Column>
          </ColumnsWrapper>
        </Panel>
      </Container>
    </div>
  );
};

export default Form;
