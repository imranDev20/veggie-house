import { css } from "@emotion/react";

const useLoadingAnimation = () => {
  const scaleLoaderCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    border-color: red;
  `;

  return scaleLoaderCss;
};

export default useLoadingAnimation;
