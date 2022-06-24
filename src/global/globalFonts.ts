import MetropolisBlack from '@/fonts/Metropolis-Black.woff2';
import MetropolisBlackItalic from '@/fonts/Metropolis-BlackItalic.woff2';
import MetropolisBold from '@/fonts/Metropolis-Bold.woff2';
import MetropolisBoldItalic from '@/fonts/Metropolis-BoldItalic.woff2';
import MetropolisExtraBold from '@/fonts/Metropolis-ExtraBold.woff2';
import MetropolisExtraBoldItalic from '@/fonts/Metropolis-ExtraBoldItalic.woff2';
import MetropolisExtraLight from '@/fonts/Metropolis-ExtraLight.woff2';
import MetropolisExtraLightItalic from '@/fonts/Metropolis-ExtraLightItalic.woff2';
import MetropolisLight from '@/fonts/Metropolis-Light.woff2';
import MetropolisLightItalic from '@/fonts/Metropolis-LightItalic.woff2';
import MetropolisMedium from '@/fonts/Metropolis-Medium.woff2';
import MetropolisMediumItalic from '@/fonts/Metropolis-MediumItalic.woff2';
import MetropolisRegular from '@/fonts/Metropolis-Regular.woff2';
import MetropolisRegularItalic from '@/fonts/Metropolis-RegularItalic.woff2';
import MetropolisSemiBold from '@/fonts/Metropolis-SemiBold.woff2';
import MetropolisSemiBoldItalic from '@/fonts/Metropolis-SemiBoldItalic.woff2';
import MetropolisThin from '@/fonts/Metropolis-Thin.woff2';
import MetropolisThinItalic from '@/fonts/Metropolis-ThinItalic.woff2';
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 100;
    src: local('Metropolis'), url(${MetropolisThin}) format('truetype');
  }

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 100;
    src: local('Metropolis'), url(${MetropolisThinItalic}) format('truetype');
  }
  
  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 200;
    src: local('Metropolis'), url(${MetropolisExtraLight}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 200;
    src: local('Metropolis'), url(${MetropolisExtraLightItalic}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 300;
    src: local('Metropolis'), url(${MetropolisLight}) format('truetype');
  }
  
  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 300;
    src: local('Metropolis'), url(${MetropolisLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 400;
    src: local('Metropolis'), url(${MetropolisRegular}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 400;
    src: local('Metropolis'), url(${MetropolisRegularItalic}) format('truetype');
  }
  
  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    src: local('Metropolis'), url(${MetropolisMedium}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 500;
    src: local('Metropolis'), url(${MetropolisMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 600;
    src: local('Metropolis'), url(${MetropolisSemiBold}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 600;
    src: local('Metropolis'), url(${MetropolisSemiBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 700;
    src: local('Metropolis'), url(${MetropolisBold}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 700;
    src: local('Metropolis'), url(${MetropolisBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 800;
    src: local('Metropolis'), url(${MetropolisExtraBold}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 800;
    src: local('Metropolis'), url(${MetropolisExtraBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 800;
    src: local('Metropolis'), url(${MetropolisBlack}) format('truetype');
  }
  

  @font-face {
    font-family: 'Metropolis';
    font-style: italic;
    font-weight: 800;
    src: local('Metropolis'), url(${MetropolisBlackItalic}) format('truetype');
  }
`;
