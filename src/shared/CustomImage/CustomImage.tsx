import { DeleteButton, StyledImage, Wrapper } from './styled';
import { TCustomImageProps } from './types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiImageOn } from 'react-icons/ci';

export const CustomImage = ({
  defaultIcon: Icon,
  width = '219px',
  height = '219px',
  borderRaduis = '8px',
  withDeleteIcon,
  onClick,
  onSVGClick,
  onDeleteClick,
  src,
  alt,
}: TCustomImageProps) => {
  return (
    <Wrapper
      className="wrapper_image"
      width={width}
      height={height}
      $borderRaduis={borderRaduis}
    >
      {src ? (
        <StyledImage
          width={width}
          height={height}
          $pointer={!!onClick}
          onClick={onClick}
          src={src}
          alt={alt}
          $borderRaduis={borderRaduis}
        />
      ) : (
        Icon || (
          <CiImageOn
            onClick={onSVGClick}
            cursor={onSVGClick ? 'pointer' : undefined}
          />
        )
      )}

      {withDeleteIcon && src && (
        <DeleteButton
          className="delete_button"
          type="button"
          onClick={onDeleteClick}
        >
          <RiDeleteBinLine />
        </DeleteButton>
      )}
    </Wrapper>
  );
};
