
const QuoteButton = ({ getNewValues, backgroundObject }) => {
    return (
        <button className='grid' onClick={getNewValues} style={backgroundObject}>

            <i className='bx bx-chevron-right'></i>

        </button>
    )
}

export default QuoteButton