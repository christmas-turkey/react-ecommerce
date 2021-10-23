import React from "react"
import ContentLoader from "react-content-loader"

export const ProductLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={500}
    style={{justifySelf: 'center'}}
    viewBox="0 0 240 500"
    backgroundColor="#d4d4d4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="120" /> 
    <rect x="0" y="260" rx="0" ry="0" width="240" height="20" /> 
    <rect x="0" y="300" rx="0" ry="0" width="240" height="60" /> 
    <rect x="0" y="380" rx="20" ry="20" width="110" height="50" /> 
    <rect x="130" y="380" rx="20" ry="20" width="110" height="50" />
  </ContentLoader>
)