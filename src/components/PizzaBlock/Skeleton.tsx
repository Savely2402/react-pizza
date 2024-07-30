import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="128" r="127" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="314" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="430" rx="14" ry="14" width="90" height="27" />
        <rect x="128" y="421" rx="23" ry="23" width="152" height="47" />
    </ContentLoader>
)

export default Skeleton
