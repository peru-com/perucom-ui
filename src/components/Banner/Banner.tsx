import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  Wrapper, 
  Content,
  ActionPrev,
  ActionNext,
  DotsGroup,
  Dot
} from './styled';
import { IconNextArrow, IconPrevArrow } from './../../icons';

interface Props {
  width: string;
  children?: any;
}

export const Banner: React.FC<Props> = ({
  width,
  children
}) => {
  const [ isSlide, setIsSlide ] = useState(false);  
  const [ transition, setTransition ] = useState('');
  const [ widthCarrousel, setWidthCarrousel ] = useState(''); 
  const [ position, setPosition ] = useState(1);

  const isOneItem: boolean = children.length > 1;
  const widthSize: number = Number.parseInt(width, 0);
  const numberOfItems: number = children.length;
  
  const handlePrevItem = () => {
    doSlide(-1);
  };

  const handleNextItem = () => {
    doSlide(1);
  };

  const doSlide = (direction: number) => {
    if(!isSlide) {
      setIsSlide(true);
      setPosition(position + direction);
      setTransition('all 1.2s linear 0s');
    }
  };

  useEffect(() => {
    setWidthCarrousel(`${widthSize * (numberOfItems + 2)}px`);
  }, []);

  useEffect(() => {
    const interval = isOneItem &&
      setInterval(() => {
        doSlide(1);
      }, 5000);
    return() => clearInterval(interval);
  });

  const onTransitionEnd = () => {
    const firstElement: number = 1;
    const lastElement: number = numberOfItems;
    let newPosition: number = position;
    newPosition = position === 0 
      ? lastElement 
      : newPosition;
    newPosition = position > lastElement 
      ? firstElement 
      : newPosition;
    setIsSlide(false);
    setPosition(newPosition);
    setTransition('none');
  };

  const handleClickDot = (position: number) => {
    setIsSlide(true);
    setPosition(position + 1);
    setTransition('all 1.2s linear 0s');
  };

  return(
    <Wrapper width={width}>
      <Content 
        width={widthCarrousel} 
        offset={position * widthSize}
        transition={transition}
        onTransitionEnd={onTransitionEnd}
      >
        { children.filter((child, index) => index === numberOfItems - 1) }
        { children }
        { children.filter((child, index) => index === 0) }
      </Content>
      { isOneItem && (
        <>
          <ActionPrev onClick={handlePrevItem}>
            <IconPrevArrow color="#FFFFFF" width="40" height="50" />
          </ActionPrev>
          <ActionNext onClick={handleNextItem}>
            <IconNextArrow color="#FFFFFF" width="40" height="50" />
          </ActionNext>
          <DotsGroup>
            { children.map((item, index) => (
              <Dot 
                key={index}
                isSelected={position === index + 1}
                onClick={() => handleClickDot(index)} />
            ))}
          </DotsGroup>
        </>
      )}
    </Wrapper>
  );
};

Banner.propTypes = {
  width: PropTypes.string.isRequired,
  children: PropTypes.any
};

Banner.defaultProps = {
  width: '500px'
};

Banner.displayName = 'Banner';