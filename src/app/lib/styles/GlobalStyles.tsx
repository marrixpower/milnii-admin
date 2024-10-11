import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
}

  ul,h1,h2,h3,h4,h5,h6,li,p {
    list-style:none;
    margin:0;
    padding:0};

  img {
    display:block;
    width:100%;
};

 a {
   text-decoration: none;
   color: inherit
 };

 /* клас для того щоб елемент не відображався і не мав розмірів але був присутній в розмітці та ДОМі для семантики */
.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
};

body {
   font-family: 'Inter', sans-serif;

 background-color:#F5F8FA;
    display:flex;
        &.disable-scroll{
     overflow: hidden;
    }
 
};
  *,
 ::before,
 ::after {
   box-sizing: border-box;
 }

::-webkit-scrollbar {
  width: 10px; 
  height: 10px; 
}

::-webkit-scrollbar-track {
  background: #E3E3E3;
  
}

::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 8px;
    transition: background-color 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #919191;
}

 `;
