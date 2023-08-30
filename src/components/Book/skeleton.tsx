import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={346}
    height={500}
    viewBox="0 0 346 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="109" y="20" rx="0" ry="0" width="128" height="171" /> 
    <rect x="109" y="200" rx="0" ry="0" width="128" height="15" /> 
    <rect x="68" y="230" rx="0" ry="0" width="208" height="29" /> 
    <rect x="115" y="278" rx="0" ry="0" width="112" height="16" />
  </ContentLoader>
)

export default Skeleton