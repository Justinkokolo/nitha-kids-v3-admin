// Libs
import { h } from 'preact';
import { useState } from 'react';
import { route } from 'preact-router';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';
import { deleteProduct } from '../../redux/features/product/calls';
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";
import routes from "../../../shared/routes";

// Components
import {
  DetailsWrapper,
  DetailsInnerWrapper,
  ImagePlaceholder,
  Image,
  Wrapper,
  DefaultWrapper,
  ColorItem,
  ColorsWrapper
} from './ProductListItem.styles';
import { Action } from './../../../styles/common.styles';
import Typography from '../Typography';
import DeletePopUp from '../DeletePopUp';
import Space from '../Space/Space';
import Tag from '../Tag';
import More from '../More';
import { Camera } from 'react-feather';
import ImagesUploader from '../ImagesUploader/ImagesUploader';

interface IProps {
  id: number; 
  category: string;
  gender: string;
  descriptipn?: string;
  price: number;
  buyingPrice: number;
  quantity: number;
  reference: number | string;
  brand: string;
  name: string;
  pictures?: {
    id: number,
    mobile: string,
    desktop: string,
    primary: number
  }[];
  colors: string[]
}

const actions = ['Edit', 'Delete'];

const ProductListItem = ({
  id,
  category,
  gender,
  price,
  buyingPrice,
  quantity,
  reference,
  brand,
  name,
  pictures,
  colors
} : IProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showImagesUploader, setShowImagesUploader] = useState(false);
  let image = null;
  if (pictures && pictures.length > 0) {
    // @ts-ignore
    image = pictures.find(picture => picture.primary.toString() === '1' || picture.primary === true);
  }
  const { product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const onDelete = () => {
    // @ts-ignore
    dispatch(deleteProduct({ id }));
  };

  const { status } = product;

  return (
    <Wrapper>
      <DeletePopUp
        title={`Do you really wanna delete the product '${name}'?`}
        show={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onDelete={onDelete}
        loading={status === 'loading'}
      />
      <DefaultWrapper flex={0.2}>
        <input type="checkbox" id="scales" name="scales" />
      </DefaultWrapper>
      <DefaultWrapper flex={1.8}>
        <DetailsWrapper>
          {!pictures || pictures.length === 0 && (
            <ImagePlaceholder onClick={() => setShowImagesUploader(true)}>
              <Camera size={16} />
            </ImagePlaceholder>
          )}
          {image && (
            <Image
              onClick={() => setShowImagesUploader(true)}
              src={image.mobile} alt={reference.toString()}
            />
          )}
          <DetailsInnerWrapper>
            <Typography
              text={name}
              size={FontSize.Medium}
              weight={FontWeight.SemiBold}
              color={Color.textDark}
            />
            <Space size={Spacing.XSmall} />
            <Typography
              text={brand}
              size={FontSize.XSmall}
              color={Color.default}
            />
          </DetailsInnerWrapper>
        </DetailsWrapper>
      </DefaultWrapper>
      <DefaultWrapper flex={1.2}>
        <Tag text={gender} />
        <Tag text={category} />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <ColorsWrapper>
          {colors.map(color => {
            return <ColorItem color={color} key={colors.indexOf(color)}/>;
          })}  
        </ColorsWrapper>
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={`${price}`}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={`${buyingPrice}`}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={`${quantity}`}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Typography
          text={reference.toString()}
          size={FontSize.Small}
          weight={FontWeight.SemiBold}
          color={Color.textDark}
        />
      </DefaultWrapper>
      <DefaultWrapper flex={0.7}>
        <Action isDeleteButton={false} rightAligned={false} >View</Action>
        <More
          onSelect={item => {
            if (item === 'Delete') {
              setIsDeleting(true);
            } else if (item === 'Edit') {
              route(routes.PRODUCTFORMEDIT.path.replace(':reference', reference.toString()));
            }
          }}
          list={actions}
        />
      </DefaultWrapper>
      <ImagesUploader
        id={id}
        show={showImagesUploader}
        pictures={pictures}
        onCancel={() => setShowImagesUploader(false)}
      />
    </Wrapper>
  );
};

export default ProductListItem;
