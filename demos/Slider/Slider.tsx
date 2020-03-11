import React from 'react';
import { Wrapper } from './styled';
import { CardNote } from './../../src/components/CardNote';
import Slick from "react-slick";
import { IconNextArrow, IconPrevArrow } from '../../src/icons';
import {
  ActionPrev,
  ActionNext,
  Circle,
} from '../../src/components/Slider/styled';


export const items = [
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/924x530/uruguay.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/624x468/uruguay.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/513x287/uruguay.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/246x138/uruguay.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  },
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/9/4/8/1948455/924x530/plaza-armas-trujillo.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/9/4/8/1948455/624x468/plaza-armas-trujillo.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/9/4/8/1948455/513x287/plaza-armas-trujillo.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/9/4/8/1948455/246x138/plaza-armas-trujillo.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  },
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/7/6/5/1765856/924x530/londres.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/7/6/5/1765856/624x468/londres.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/7/6/5/1765856/513x287/londres.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/7/6/5/1765856/246x138/londres.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  },
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/9/4/7/1947807/924x530/perucom.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/9/4/7/1947807/624x468/perucom.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/9/4/7/1947807/513x287/perucom.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/9/4/7/1947807/246x138/perucom.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  },
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/9/4/6/1946731/924x530/callao.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/9/4/6/1946731/624x468/callao.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/9/4/6/1946731/513x287/callao.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/9/4/6/1946731/246x138/callao.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  },
  {
    image: {
      desktop: 'https://cde.peru.com/ima/0/1/9/4/4/1944461/924x530/viajes.jpg',
      laptop: 'https://cde.peru.com/ima/0/1/9/4/4/1944461/624x468/viajes.jpg',
      tablet: 'https://cde.peru.com/ima/0/1/9/4/4/1944461/513x287/viajes.jpg',
      mobile: 'https://cde.peru.com/ima/0/1/9/4/4/1944461/246x138/viajes.jpg',
      description: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya'
    },
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    category: 'Conozca Perú',
    date: '01 de Ene. 2020',
    uri: 'https://peru.com/viajes/conozca-peru/5-lugares-pocas-horas-lima-que-puedes-visitar-solo-dia-noticia-563329'
  }
];
const ArrowPrev: React.SF<any> = ({ onClick }) => (
  <ActionPrev onClick={onClick}>
    <Circle>
      <IconPrevArrow color="#FFFFFF" width="20" height="20" />
    </Circle>
  </ActionPrev>
);

const ArrowNext: React.SF<any> = ({ onClick }) => (
  <ActionNext onClick={onClick}>
    <Circle>
      <IconNextArrow color="#FFFFFF" width="20" height="20" />
    </Circle>
  </ActionNext>
);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <ArrowPrev />,
  nextArrow: <ArrowNext />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
      }
    },
  ]
};

export const SliderDemo = () => {
  return(
    <Wrapper>
      <Slick {...settings}>
        {items.map((item, index) => (
          <CardNote
            key={index}
            image={item.image}
            category={item.category}
            date={item.date}
            title={item.title}
            link={item.uri}
          />))}
      </Slick>
    </Wrapper>
  );
};
