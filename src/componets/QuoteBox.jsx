
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, getNewValues, backgroundObject, colorObject }) => {


    return (
        <article className='quoteBox'>

            <i cla style={colorObject} className='bx bxs-quote-alt-left'></i>


            <div>
                <p style={colorObject}>{quote.quote}</p>
                <h4 style={colorObject}>{quote.author}</h4>
                <section className='quoteBox-footer'>
                    <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />

                </section>
            </div>



        </article>
    )
}

export default QuoteBox