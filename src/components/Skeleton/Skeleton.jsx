import ContentLoader from 'react-content-loader'

const Skeleton = props => {
    // Get values from props
    // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

    // Hardcoded values
    const rows = 4
    const columns = 4
    const coverHeight = 280
    const coverWidth = 220
    const padding = 10
    const speed = 1

    const coverHeightWithPadding = coverHeight + padding
    const coverWidthWithPadding = coverWidth + padding
    const initial = 35
    const covers = Array(columns * rows).fill(1)

    return (
        <ContentLoader
            speed={speed}
            width={columns * coverWidthWithPadding}
            height={rows * coverHeightWithPadding}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            {...props}
        >


            {covers.map((g, i) => {
                let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
                let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
                return (
                    <rect
                        key={i}
                        x={vx}
                        y={vy}
                        rx="0"
                        ry="0"
                        width={coverWidth}
                        height={coverHeight}
                    />
                )
            })}
        </ContentLoader>
    )
}

Skeleton.metadata = {
    name: 'Pratik Pathak',
    github: 'PathakPratik',
    description: 'Netflix Style Dynamic',
    filename: 'Netflix',
}

export default Skeleton