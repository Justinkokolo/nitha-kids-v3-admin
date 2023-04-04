// Libs
import { h, Fragment } from 'preact';
import { useRef, useState, useEffect } from 'react';
import Resizer from 'react-image-file-resizer';

// Utils
import { Spacing  } from '../../constants/spacing';
import { FontSize } from '../../constants/fonts';
import { Color } from '../../constants/colors';

// Components
import { Image } from 'react-feather';
import { Wrapper, Content, ContentOverlay } from './Uploader.styles';
import Typography from '../Typography';
import Space from '../Space';

interface IProps {
  value?: {
    id: number,
    desktop: string,
    mobile: string
  };
  onUpload: (
    text: string,
    mobile: string,
    value: {
      id: number,
      desktop: string,
      mobile: string
    } | undefined) => void;
  iconSize?: Spacing;
  paddingHorizontal?: Spacing;
  loading?: boolean;
}

const Uploader = ({
  onUpload,
  iconSize = Spacing.Large,
  paddingHorizontal = Spacing.XXXLarge,
  loading,
  value
} : IProps) => {
  const ref = useRef(null);
  const [imageSource, setImageSource] = useState(value ? value.mobile : '');
  const [hovered, setHovered] = useState(false);
  const [url, setUrl] = useState('');
  const [urlMobile, setUrlMobile] = useState('');

  // @ts-ignore
  const compressImage = async (file) => {
    await Resizer.imageFileResizer(
      file, // the file from input
      512, // width
      512, // height
      "JPEG", // compress format WEBP, JPEG, PNG
      70, // quality
      0, // rotation
      (uri) => {
        const image = JSON.stringify(uri);
        setUrlMobile(image);
        // You upload logic goes here
      },
      "base64" // blob or base64 default base64
    );
  };

  // @ts-ignore
  const handleImageImport = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    compressImage(e.target.files[0]);
    fileReader.onload = async (e) => {
      const file = await e.target;
      // @ts-ignore
      if (file.result) {
        // @ts-ignore
        const image = JSON.stringify(file.result);
        // @ts-ignore
        setImageSource(file.result);
        setUrl(image);
      }
    };
  };

  useEffect(() => {
    if (url && urlMobile) {
      onUpload(url, urlMobile, value);
    }
  }, [url, urlMobile]);

  return (
    <Wrapper
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <Content>
        {!imageSource && (
          <Fragment>
            <Image color={Color.darkGray} size={iconSize} />
            <Space size={Spacing.Small} />
            <Typography
              size={paddingHorizontal === Spacing.XXXLarge ? FontSize.XSmall : FontSize.XXSmall}
              text={paddingHorizontal === Spacing.XXXLarge ? "Drop your main image within the area " : "Associated images "}
              color={Color.darkGray}
              paddingHorizontal={paddingHorizontal}
              centered
              link={
                // @ts-ignore
                <a onClick={() => ref.current?.click()}>Click to upload</a>
              }
            />
          </Fragment>
        )}
        {imageSource && (
          <img
            src={imageSource}
            style={{ width: '100%' }}
          />
        )}
      </Content>
      {hovered && !loading && imageSource && (
        <ContentOverlay>
          <Image color={Color.white} size={iconSize} />
          <Typography
            size={paddingHorizontal === Spacing.XXXLarge ? FontSize.XSmall : FontSize.XXSmall}
            text={paddingHorizontal === Spacing.XXXLarge ? "Drop your main image within the area " : "Associated images "}
            color={Color.white}
            paddingHorizontal={paddingHorizontal}
            centered
            link={
              // @ts-ignore
              <a onClick={() => ref.current?.click()}>Click to choose another image</a>
            }
          />
        </ContentOverlay>
      )}
      <input
        type='file'
        accept={'image/png, image/jpeg'}
        ref={ref}
        style={{ display: 'none' }}
        onChange={handleImageImport}
      />
    </Wrapper>
  );
};

export default Uploader;
