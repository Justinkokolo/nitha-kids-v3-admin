// Libs
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';
import { addPicture, editPicture } from '../../redux/features/product/calls';
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";

// Components
import { Content, PopUp, Wrapper, IconWrapper, LoadingWrapper } from './ImagesUploader.styles';
import Typography from '../Typography';
import Space from '../Space';
import { X } from 'react-feather';
import Uploader from '../Uploader';
import Alert from '../Alert/Alert';
import {
  ColumnsWrapper,
  Column,
  ColumnsSeparator,
  FlewWrapColumn,
} from "../../../styles/common.styles";

interface IProps {
  id: number;
  show: boolean;
  pictures?: {
    id: number,
    mobile: string,
    desktop: string,
    primary: number
  }[];
  onCancel: () => void;
};

const ImagesUploader = ({
  id,
  pictures,
  show,
  onCancel,
} : IProps) => {
  const [principal, setPrincipal] = useState(null);
  const [images, setImages] = useState([]);
  const { picture } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const { alert, status } = picture;
  const { type, message } = alert;

  const loading = status === 'loading';

  const onUpload = (image: string, mobile: string,  primary: boolean, value: {
    id: number,
    desktop: string,
    mobile: string
  } | undefined) => {
    if (!value) {
      const payload = {
        image: JSON.parse(image),
        imageMobile: JSON.parse(mobile),
        primary,
        products_id: id
      };
      // @ts-ignore
      dispatch(addPicture(payload));
    } else {
      const payload = {
        image: JSON.parse(image),
        imageMobile: JSON.parse(mobile),
        id: value.id
      };
      // @ts-ignore
      dispatch(editPicture(payload));
    }
  };

  useEffect(() => {
    if (pictures && pictures.length > 0) {
      // @ts-ignore
      const pic = pictures.find(picture => picture.primary.toString() === '1' || picture.primary === true);
      let pics: {
        id: number,
        mobile: string,
        desktop: string,
        primary: number
      }[] = [];
      pictures.filter(picture => {
        // @ts-ignore
        if (picture.primary.toString() === '0' || picture.primary === false) {
          pics.push(picture);
        }
      });
      // @ts-ignore
      setImages(pics);
      // @ts-ignore
      setPrincipal(pic);
    }
  }, [pictures]);

  return (
    <Fragment>
      <Alert type={type} text={message} show={!!message} />
      {show && (
        <Wrapper>
          <PopUp>
            {loading && (
              <LoadingWrapper>
                <Typography
                  size={FontSize.XSmall}
                  text="Please wait..."
                  color={Color.green}
                  centered
                />
              </LoadingWrapper>
            )}
            <Content>
              <Typography
                text="IMAGES"
                size={FontSize.XXSmall}
                color={Color.darkGray}
              />
              {!loading && (
                <IconWrapper>
                  <X size={16} onClick={onCancel} />
                </IconWrapper>
              )}
              <Space />
              <ColumnsWrapper>
                <Column flex={1}>
                  <Uploader
                    value={principal || undefined}
                    onUpload={(data, mobile, value) => onUpload(data, mobile, true, value)}
                  />
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <FlewWrapColumn>
                    <ColumnsWrapper>
                      <Column flex={1}>
                        <Uploader
                          loading={loading}
                          iconSize={Spacing.Medium}
                          onUpload={(data, mobile, value) => onUpload(data, mobile, false, value)}
                          paddingHorizontal={Spacing.Small}
                          value={images[0]}
                        />
                        <Space size={Spacing.Medium} />
                      </Column>
                      <ColumnsSeparator size={Spacing.Medium} />
                      <Column flex={1}>
                        <Uploader
                          loading={loading}
                          onUpload={(data, mobile, value) => onUpload(data, mobile, false, value)}
                          paddingHorizontal={Spacing.Small}
                          value={images[1]}
                        />
                        <Space size={Spacing.Medium} />
                      </Column>
                    </ColumnsWrapper>
                    <ColumnsWrapper>
                      <Column flex={1}>
                        <Uploader
                          loading={loading}
                          iconSize={Spacing.Medium}
                          onUpload={(data, mobile, value) => onUpload(data, mobile, false, value)}
                          paddingHorizontal={Spacing.Small}
                          value={images[2]}
                        />
                      </Column>
                      <ColumnsSeparator size={Spacing.Medium} />
                      <Column flex={1}>
                        <Fragment />
                      </Column>
                    </ColumnsWrapper>
                  </FlewWrapColumn>
                </Column>
              </ColumnsWrapper>
            </Content>
          </PopUp>
        </Wrapper>
      )}
    </Fragment>
  );
};

export default ImagesUploader;