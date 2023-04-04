// Libs
import { h } from 'preact';
import { useEffect } from "react";

// Utils
import { Spacing } from "../../shared/constants/spacing";
import { FontSize, FontWeight } from "../../shared/constants/fonts";
import { Color } from "../../shared/constants/colors";
import { useAppSelector, useAppDispatch } from '../../shared/redux/hooks';
import { loadResources } from "../../shared/redux/features/resource/calls";
import { setSizes } from "../../shared/redux/features/size/slice";
import { setCategories } from "../../shared/redux/features/category/slice";
import { setCurrencies } from "../../shared/redux/features/currency/slice";
import { setBrands } from "../../shared/redux/features/brand/slice";
import { setGenders } from "../../shared/redux/features/gender/slice";

// Components
import AuthCheck from './../../shared/components/AuthCheck';
import Typography from "../../shared/components/Typography";
import Space from "../../shared/components/Space/Space";
import Categories from "../../shared/components/Categories";
import Sizes from "../../shared/components/Sizes";
import Currencies from "../../shared/components/Currencies";
import Brands from "../../shared/components/Brands";
import Genders from "../../shared/components/Genders";
import { Container } from "../../styles/common.styles";

const Resources = () => {
  const { resources } = useAppSelector((state) => state.resource);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadResources());
  }, []);

  useEffect(() => {
    if (resources.status === 'success') {
      const { data } = resources;
      // @ts-ignore
      const { categories, sizes, brands, currencies, genders } = data;
      dispatch(setSizes(sizes));
      dispatch(setCategories(categories));
      dispatch(setCurrencies(currencies));
      dispatch(setBrands(brands));
      dispatch(setGenders(genders));
    }
  }, [resources.status]);

  return (
    <div>
      <AuthCheck authenticatable />
      <Container>
        <Typography
          text="Categories"
          weight={FontWeight.SemiBold}
          color={Color.textDark}
          size={FontSize.Large}
        />
        <Space size={Spacing.Large} />
        <Categories />
        <Space size={Spacing.Large} />
        <Typography
          text="Sizes"
          weight={FontWeight.SemiBold}
          color={Color.textDark}
          size={FontSize.Large}
        />
        <Space size={Spacing.Large} />
        <Sizes />
        <Space size={Spacing.Large} />
        <Typography
          text="Currencies"
          weight={FontWeight.SemiBold}
          color={Color.textDark}
          size={FontSize.Large}
        />
        <Space size={Spacing.Large} />
        <Currencies />
        <Space size={Spacing.Large} />
        <Typography
          text="Brands"
          weight={FontWeight.SemiBold}
          color={Color.textDark}
          size={FontSize.Large}
        />
        <Space size={Spacing.Large} />
        <Brands />
        <Space size={Spacing.Large} />
        <Typography
          text="Genders"
          weight={FontWeight.SemiBold}
          color={Color.textDark}
          size={FontSize.Large}
        />
        <Space size={Spacing.Large} />
        <Genders />
      </Container>
    </div>
  );
};

export default Resources;
