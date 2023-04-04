// Libs
import { h } from 'preact';
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
import { loadProducts } from "../../../shared/redux/features/product/calls";
import { refactorList } from "../../../shared/helpers/utils";
import { setProduct } from '../../../shared/redux/features/product/slice';

// Components
import AuthCheck from '../../../shared/components/AuthCheck';
import ProductListHeader from "../../../shared/components/ProductListHeader";
import ProductListItem from "../../../shared/components/ProductListItem";
import Typography from "../../../shared/components/Typography";
import DropDown from "../../../shared/components/Dropdown";
import Space from "../../../shared/components/Space/Space";
import Button from "../../../shared/components/Button";
import {
  ActionsWrapper,
  ActionsRightWrapper,
} from "../../../styles/common.styles";
import { Container } from "../../../styles/common.styles";

const ProductList = () => {
  const [categoriesList, setCategoriesList] = useState<
    { value: number; text: string }[]
  >([]);
  const [sizesList, setSizesList] = useState<{ value: number; text: string }[]>(
    []
  );
  const [brandsList, setBrandsList] = useState<
    { value: number; text: string }[]
  >([]);
  const [gendersList, setGendersList] = useState<
    { value: number; text: string }[]
  >([]);

  const { resources } = useAppSelector((state) => state.resource);
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(setProduct(null));
    dispatch(loadResources());
  }, []);

  useEffect(() => {
    if (resources.status === "success") {
      const { data } = resources;
      // @ts-ignore
      const { categories, sizes, brands, genders } = data;
      setCategoriesList(refactorList(categories));
      setSizesList(refactorList(sizes));
      setBrandsList(refactorList(brands));
      setGendersList(refactorList(genders));
      dispatch(loadProducts());
    }
  }, [resources.status]);

  const handleColors = (color: string, products: { product: { color: string } }[] | []) => {
    let arr = [];
    arr.push(color);
    products.filter(item => {
      arr.push(item.product.color);
    });

    return arr;
  };

  // @ts-ignore
  const returnQuantity = (sizes) => {
    let quantity = 0;
    // @ts-ignore
    sizes.filter(size => {
      // @ts-ignore
      quantity = parseFloat(quantity) + parseFloat(size.pivot.quantity);
    });

    return quantity;
  };

  const { data } = products;

  return (
    <div>
      <AuthCheck authenticatable />
      <Container>
        <ActionsWrapper>
          <Typography
            text="Products"
            weight={FontWeight.SemiBold}
            color={Color.textDark}
            size={FontSize.XLarge}
          />
          <Button
            text="New Product"
            onClick={() => route(routes.PRODUCTFORM.path)}
            color={Color.white}
            backgroundColor={Color.blue}
            size={Type.Medium}
          />
        </ActionsWrapper>
        <Space size={Spacing.Medium} />
        <ActionsWrapper>
          <div />
          <ActionsRightWrapper>
            <DropDown
              placeholder="Category"
              value={null}
              onChange={(item) => console.log("item", item)}
              list={categoriesList}
              withMargin
            />
            <DropDown
              placeholder="Gender"
              value={null}
              onChange={(item) => console.log("item", item)}
              list={gendersList}
              withMargin
            />
            <DropDown
              placeholder="Size"
              value={null}
              onChange={(item) => console.log("item", item)}
              list={sizesList}
              withMargin
            />
            <DropDown
              placeholder="Brand"
              value={null}
              onChange={(item) => console.log("item", item)}
              list={brandsList}
              withMargin
            />
          </ActionsRightWrapper>
        </ActionsWrapper>
        <ProductListHeader />
        {data.map((product, index) => {
          const {
            id,
            price,
            name,
            buyingPrice,
            category,
            brand,
            gender,
            reference,
            pictures,
            color,
            sizes,
            linked_products
          } = product;
          const colors = handleColors(color, linked_products);
          return (
            <ProductListItem
              id={id}
              name={name}
              category={category.name}
              gender={gender.name}
              brand={brand.name}
              price={price}
              buyingPrice={buyingPrice}
              quantity={returnQuantity(sizes)}
              reference={reference}
              key={index}
              pictures={pictures}
              colors={colors}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default ProductList;
