import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  Wrapper, 
  Content,
  ActionPrev,
  ActionNext,
  DotsGroup,
  Dot,
  Circle
} from './styled';
import { IconNextArrow, IconPrevArrow } from './../../icons';

interface Props {
  width: string;
  children?: any;
}

export const Slider: React.FC<Props> = ({
  width,
  isDot,
  timer,
  children
}) => {
  const [ isSlide, setIsSlide ] = useState(false);  
  const [ transition, setTransition ] = useState('');
  const [ widthCarrousel, setWidthCarrousel ] = useState(''); 
  const [ position, setPosition ] = useState(1);

  const isMoreThanOneItem: boolean = children.length > 1;
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
    const interval = (isMoreThanOneItem && timer)
      && setInterval(() => {
        doSlide(1);
      }, timer);
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
      { isMoreThanOneItem && (
        <>
          <ActionPrev onClick={handlePrevItem}>
            <Circle>
              <IconPrevArrow color="#FFFFFF" width="20" height="20" />
            </Circle>  
          </ActionPrev>
          <ActionNext onClick={handleNextItem}>
            <Circle>
              <IconNextArrow color="#FFFFFF" width="20" height="20" />
            </Circle> 
          </ActionNext>
          { isDot && (
            <DotsGroup>
              { children.map((item, index) =>
                <Dot 
                  key={index}
                  isSelected={position === index + 1}
                  onClick={() => handleClickDot(index)} /> )}
            </DotsGroup>) }
        </>
      )}
    </Wrapper>
  );
};

Slider.propTypes = {
  width: PropTypes.string.isRequired,
  children: PropTypes.any
};

Slider.defaultProps = {
  width: '500px'
};

Slider.displayName = 'Slider';