// Libs
import { Fragment, h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from "react";
import { RouterProps } from 'preact-router';

// Utils
import { Spacing } from "../../../shared/constants/spacing";
import { FontSize, FontWeight } from "../../../shared/constants/fonts";
import { Color } from "../../../shared/constants/colors";
import { Type } from "../../../shared/constants/size";
import routes from "../../../shared/routes";
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";
import { loadResources } from "../../../shared/redux/features/resource/calls";
import { loadProducts } from "../../../shared/redux/features/product/calls";
import { refactorList } from "../../../shared/helpers/utils";
import { loadProduct, updateProduct } from "../../../shared/redux/features/product/calls";

// Components
import DetailForm from '../DetailForm';
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
import Size from "./../Form/Size";
import LinkedProduct from './../Form/LinkedProduct';
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

interface IProps extends RouterProps {
  reference: string;
}

const Form = ({ reference }: IProps) => {
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
  const [mainImage, setMainImage] = useState<{
      id: number;
      mobile: string;
      desktop: string;
      primary: number;
    }
  | undefined
  >(undefined);

  const { resources } = useAppSelector((state) => state.resource);
  const { products, product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadResources());
  }, []);

  useEffect(() => {
    if (reference) {
      // @ts-ignore
      dispatch(loadProduct({ reference }));
    }
  }, [reference]); 


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

  useEffect(() => {
    if (product.status === "success") {
      const { data } = product;
      const newForm = {
        ['name']: {
          value: data?.name,
          errorMessage: '',
          required: true
        },
        ['position']: {
          value: data?.position,
          errorMessage: '',
          required: true
        },
        ['color']: {
          value: data?.color,
          errorMessage: '',
          required: true
        },
        ['category']: {
          value: {
            value: data?.category?.id,
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
            value: data?.gender?.id,
          },
          errorMessage: null,
          required: true
        },
        ['brand']: {
          value: {
            value: data?.brand?.id,
          },
          errorMessage: '',
          required: true
        },
        ['currency']: {
          value: {
            value: data?.currency?.id,
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
          value: data?.price,
          errorMessage: '',
          required: true
        },
        ['buyingPrice']: {
          value: data?.buyingPrice,
          errorMessage: '',
          required: true
        }
      };
      // @ts-ignore
      setForm(newForm);
      if (data) {
        const { pictures } = data;
        if (pictures) {
          const mainPicture = pictures.find(
            picture => picture.primary.toString() === '1' || !!picture.primary === true
          );
          setMainImage(mainPicture);
        }
      }
    }
  }, [product.status]);

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
    payload.id = product?.data?.id;

    // @ts-ignore
    dispatch(updateProduct(payload));
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
  const { data } = product;
  const isSubmitting = products.status === 'loading';
  
  const pageTitle = "Edit Product";

  return (
    <div>
      <AuthCheck authenticatable />
      <Alert type={type} text={message} show={!!message} />
      <Container>
        <ActionsWrapper>
          <Typography
            text={pageTitle}
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
                  value={form['name'].value}
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
                    value={form['position'].value}
                  />
                </Column>
                <ColumnsSeparator size={Spacing.Medium} />
                <Column flex={2}>
                  <TextField
                    label="Color"
                    id="color"
                    onChange={(text) => handleChange('color', text)}
                    errorMessage={form['color'].errorMessage}
                    value={form['color'].value}
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
                    // @ts-ignore
                    value={categoriesList.find(c => c.value === form['category'].value.value)}
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
                    // @ts-ignore
                    value={gendersList.find(c => c.value === form['gender'].value.value)}
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
                // @ts-ignore
                value={brandsList.find(c => c.value === form['brand'].value.value)}
              />
              <Space size={Spacing.Medium} />
              <SelectField
                id="currency"
                label="Currency"
                // @ts-ignore
                onChange={(item) => handleChange('currency', item)}
                errorMessage={form['currency'].errorMessage}
                list={currenciesList}
                // @ts-ignore
                value={currenciesList.find(c => c.value === form['currency'].value.value)}
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
                    value={form['price'].value}
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
                    value={form['buyingPrice'].value}
                  />
                </Column>
              </ColumnsWrapper>
              <Space size={Spacing.Large} />
              <FlewRowColumn>
                <Button
                  text="Edit Product"
                  onClick={() => onSave()}
                  color={Color.white}
                  backgroundColor={Color.blue}
                  size={Type.Large}
                  loading={isSubmitting}
                />
                <ColumnsSeparator size={Spacing.Medium} />
                {data && !!reference && (
                  <Button
                    text="Cancel"
                    onClick={() => route(routes.PRODUCTLIST.path)}
                    color={Color.darkBlue}
                    backgroundColor={Color.gray}
                    size={Type.Large}
                    loading={isSubmitting}
                  />
                )}
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
              <Space size={Spacing.Large} />
              {mainImage && (
                <img src={mainImage.mobile} alt="image" style={{
                  width: 256,
                  height: 256,
                  borderRadius: 8
                }}/>
              )}
            </Column>
          </ColumnsWrapper>
        </Panel>
        <Space size={Spacing.XLarge} />
        <DetailForm products_id={product.data?.id} data={product.data?.detail} />
      </Container>
    </div>
  );
};

export default Form;
